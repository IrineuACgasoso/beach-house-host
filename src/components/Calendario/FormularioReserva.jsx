// src/components/Calendario/FormularioReserva.jsx

import { useState } from 'react';
import { ArrowLeft, Loader2, Send, CheckCircle } from 'lucide-react';
import { enviarSolicitacaoReserva } from '../../services/agendaService';

export default function FormularioReserva({ dataInicio, dataFim, onVoltar }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    observacoes: ''
  });
  const [carregando, setCarregando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);

    try {
      // Chama o serviço passando os dados do form e as datas do calendário
      await enviarSolicitacaoReserva({ ...formData, dataInicio, dataFim });
      setSucesso(true);
    } catch (error) {
      console.error("Erro ao enviar reserva", error);
      alert("Houve um erro ao solicitar a reserva. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

  // Se a reserva deu certo, mostra a tela de sucesso
  if (sucesso) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
        {/* Ícone com o Verde Esmeralda Escuro da Casa */}
        <CheckCircle className="w-16 h-16 text-emerald-800" />
        
        {/* Título com o Verde Esmeralda */}
        <h3 className="text-2xl font-bold text-emerald-800">Pedido Enviado!</h3>
        
        <p className="text-sm text-slate-600">
          Recebemos sua solicitação para os dias{' '}
          {/* Datas em destaque com o tom Âmbar/Laranja */}
          <strong className="text-amber-700">{dataInicio.toLocaleDateString('pt-BR')}</strong> até{' '}
          <strong className="text-amber-700">{dataFim.toLocaleDateString('pt-BR')}</strong>.
        </p>
        
        <p className="text-sm text-slate-600 mb-4">
          Em breve entraremos em contato pelo WhatsApp para confirmar os detalhes.
        </p>
        
        {/* Botão Laranja com Hover (Você já tinha feito isso perfeitamente!) */}
        <button 
          onClick={onVoltar}
          className="px-6 py-3 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 transition-colors w-full"
        >
          Voltar ao Calendário
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-2 border-b border-teal-100 pb-3">
        <button onClick={onVoltar} className="text-slate-400 hover:text-amber-600 transition-colors p-1">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h3 className="text-lg font-bold text-teal-800">Seus Dados</h3>
      </div>

      <p className="text-xs text-slate-500 mb-2">
        Preencha os campos abaixo para solicitar sua reserva de <strong>{dataInicio.toLocaleDateString('pt-BR')}</strong> a <strong>{dataFim.toLocaleDateString('pt-BR')}</strong>.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label className="text-xs font-semibold text-slate-600 mb-1 block">Nome Completo</label>
          <input 
            type="text" name="nome" required value={formData.nome} onChange={handleInputChange}
            className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            placeholder="Ex: João da Silva"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1 block">WhatsApp</label>
            <input 
              type="tel" name="telefone" required value={formData.telefone} onChange={handleInputChange}
              className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1 block">E-mail</label>
            <input 
              type="email" name="email" required value={formData.email} onChange={handleInputChange}
              className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-600 mb-1 block">Observações (Opcional)</label>
          <textarea 
            name="observacoes" rows="2" value={formData.observacoes} onChange={handleInputChange}
            className="w-full p-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            placeholder="Algum pedido especial?"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={carregando}
          className="mt-2 w-full py-3 bg-teal-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-800 transition-colors disabled:opacity-70"
        >
          {carregando ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          {carregando ? 'Enviando...' : 'Solicitar Reserva'}
        </button>
      </form>
    </div>
  );
}