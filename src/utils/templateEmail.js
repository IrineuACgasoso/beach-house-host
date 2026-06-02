// utils/templateEmail.js

export function gerarTemplateEmailReserva({ 
  nome, 
  dataInicio, 
  dataFim, 
  telefone, 
  email, 
  observacoes, 
  linkWhatsAppDoCliente 
}) {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
      <div style="background-color: #065f46; color: #ffffff; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 22px;">🏠 Nova Reserva Solicitada!</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">Um novo hóspede acabou de enviar um pedido pelo site.</p>
      </div>
      
      <div style="padding: 20px; color: #334155; line-height: 1.6;">
        <h3 style="color: #065f46; border-b: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 0;">Dados da Estadia</h3>
        <p style="margin: 8px 0;"><strong>👤 Nome do Hóspede:</strong> ${nome}</p>
        <p style="margin: 8px 0;"><strong>📅 Período:</strong> <span style="color: #b45309; font-weight: bold;">${new Date(dataInicio).toLocaleDateString('pt-BR')}</span> até <span style="color: #b45309; font-weight: bold;">${new Date(dataFim).toLocaleDateString('pt-BR')}</span></p>
        
        <h3 style="color: #065f46; border-b: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px;">Contato</h3>
        <p style="margin: 8px 0;"><strong>📞 WhatsApp:</strong> ${telefone}</p>
        <p style="margin: 8px 0;"><strong>✉️ E-mail:</strong> ${email}</p>
        
        <h3 style="color: #065f46; border-b: 1px solid #e2e8f0; padding-bottom: 8px; margin-top: 24px;">Observações do Cliente</h3>
        <p style="background-color: #f8fafc; padding: 12px; border-radius: 6px; font-style: italic; margin: 8px 0; border-left: 4px solid #cbd5e1;">
          ${observacoes || 'Nenhuma observação enviada.'}
        </p>
        
        <div style="text-align: center; margin-top: 32px; margin-bottom: 10px;">
          <a href="${linkWhatsAppDoCliente}" target="_blank" style="background-color: #d97706; color: #ffffff; text-decoration: none; padding: 14px 28px; font-weight: bold; border-radius: 8px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
            💬 Chamar Hóspede no WhatsApp
          </a>
        </div>
      </div>
      
      <div style="text-align: center; font-size: 11px; color: #94a3b8; margin-top: 20px; border-top: 1px solid #f1f5f9; padding-top: 15px;">
        Este é um e-mail automático gerado pelo sistema da Casa 210. O evento já foi pré-reservado no seu Google Agenda.
      </div>
    </div>
  `;
}