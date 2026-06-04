// api/reservar.js
import * as dotenv from 'dotenv';
import { google } from 'googleapis';
import { gerarTemplateEmailReserva } from '../src/utils/templateEmail.js';

dotenv.config();

// 💡 Removemos o "new Resend()" daqui de cima.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  if (!process.env.CLOUD_RESERVE_MANAGER_MAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.RESEND_API_KEY) {
    return res.status(500).json({ erro: 'Falha na configuração do servidor (Credenciais ausentes).' });
  }

  try {
    const { nome, email, telefone, observacoes, dataInicio, dataFim } = req.body;

    // ... (Seu código de autenticação do Google e inserção na agenda continua IGUAL aqui) ...
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLOUD_RESERVE_MANAGER_MAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.trim().replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/calendar.events'],
    });
    const calendar = google.calendar({ version: 'v3', auth });
    const dataCheckin = new Date(dataInicio).toISOString().split('T')[0];
    const dataCheckout = new Date(dataFim).toISOString().split('T')[0];
    const evento = {
      summary: `🏠 Reserva: ${nome}`,
      description: `📞 WhatsApp: ${telefone}\n✉️ E-mail: ${email}\n📝 Obs: ${observacoes || 'Nenhuma'}`,
      start: { date: dataCheckin },
      end: { date: dataCheckout },
      colorId: '2',
    };
    const googleResponse = await calendar.events.insert({
      calendarId: process.env.VITE_GOOGLE_CALENDAR_ID,
      requestBody: evento,
    });
    console.log("✅ Reserva criada no Google Agenda!");


    // 🔄 NOVA ABORDAGEM: DISPARO DE E-MAIL COM FETCH PURO (À prova de Windows)
    const numeroLimpo = telefone.replace(/\D/g, ''); 
    const linkWhatsAppDoCliente = `https://wa.me/${numeroLimpo.startsWith('55') ? numeroLimpo : '55' + numeroLimpo}`;

    const htmlDoEmail = gerarTemplateEmailReserva({
      nome,
      dataInicio,
      dataFim,
      telefone,
      email,
      observacoes,
      linkWhatsAppDoCliente
    });

    console.log("📨 Enviando e-mail via API HTTP...");

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Casa 210 <onboarding@resend.dev>',
        to: [process.env.RESEND_TO_EMAIL],
        subject: `🚨 Nova Solicitação de Reserva: ${nome}`,
        html: htmlDoEmail,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      throw new Error(`Erro no Resend: ${JSON.stringify(errorData)}`);
    }

    console.log("✉️ E-mail de notificação enviado com sucesso!");

    res.status(200).json({ sucesso: true, link: googleResponse.data.htmlLink });

  } catch (error) {
    console.error('❌ Erro detalhado no Servidor:', error.message);
    res.status(500).json({ erro: 'Falha ao processar a reserva.' });
  }
}