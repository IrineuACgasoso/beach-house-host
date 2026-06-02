import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Calendar as CalendarIcon, Loader2, ArrowRight } from 'lucide-react';

import { buscarDatasReservadas } from '../../services/googleCalendar';
import { verificarDiaDesabilitado, obterClasseDoAzulejo } from '../../services/calendarRules';

import CheckInOut from './CheckInOut';
import LegendaCalendario from './LegendaCalendario';
import FormularioReserva from './FormularioReserva'; // <--- NOVO IMPORT

// OBRIGATÓRIO: Estilos nativos primeiro, estilos customizados por ÚLTIMO para garantir precedência
import 'react-calendar/dist/Calendar.css';
import './Calendario.css';

export default function Calendario() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState([null, null]);
  const [datasReservadas, setDatasReservadas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  
  // NOVO ESTADO: Controla se mostramos o calendário ou o formulário
  const [exibirFormulario, setExibirFormulario] = useState(false);

  useEffect(() => {
    async function carregarDatas() {
      try {
        const datas = await buscarDatasReservadas();
        setDatasReservadas(datas);
      } catch (err) {
        console.error("Erro ao sincronizar calendário", err);
      } finally {
        setCarregando(false);
      }
    }
    carregarDatas();
  }, []);

  const handleDiaClicado = (date) => {
    const [inicio, fim] = periodoSelecionado;
    
    if (inicio && fim) {
      setPeriodoSelecionado([null, null]);
      return;
    }
    
    if (!inicio) {
      setPeriodoSelecionado([date, null]);
      return;
    }
    
    if (inicio && !fim) {
      if (date.getTime() === inicio.getTime()) {
        setPeriodoSelecionado([null, null]);
        return;
      }
      setPeriodoSelecionado([inicio, date]);
    }
  };

  const [dataInicio, dataFim] = periodoSelecionado || [null, null];

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border border-teal-100 relative flex flex-col gap-5 overflow-hidden">
      
      {/* Se exibirFormulario for verdadeiro, renderiza apenas o form */}
      {exibirFormulario ? (
        <FormularioReserva 
          dataInicio={dataInicio} 
          dataFim={dataFim} 
          onVoltar={() => {
            setExibirFormulario(false);
            setPeriodoSelecionado([null, null]); // Opcional: limpa as datas ao voltar
          }} 
        />
      ) : (
        /* Caso contrário, renderiza o calendário original */
        <>
          <div>
            <div className="flex items-center gap-2 mb-2 text-teal-800">
              <CalendarIcon className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-bold">Calendário de Reservas</h2>
            </div>
            <p className="text-xs text-slate-500">
              Selecione a data de chegada e de saída para planejar sua estadia na Casa 210.
            </p>
          </div>

          {carregando ? (
            <div className="flex flex-col items-center justify-center h-[285px] text-teal-600 gap-2">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p className="text-xs font-medium text-slate-400">Sincronizando com o Google Agenda...</p>
            </div>
          ) : (
            <div className={`custom-calendar-wrapper ${dataInicio && !dataFim ? 'is-selecting-checkout' : ''} ${dataInicio && dataFim ? 'has-range-selected' : ''}`}>
              <Calendar
                onClickDay={handleDiaClicado}
                value={dataInicio && dataFim ? [dataInicio, dataFim] : dataInicio}
                selectRange={false}
                tileClassName={(props) => obterClasseDoAzulejo(props, datasReservadas, periodoSelecionado)}
                tileDisabled={(props) => verificarDiaDesabilitado(props, datasReservadas, periodoSelecionado)}
                minDate={new Date()}
                locale="pt-BR"
              />
            </div>
          )}

          <CheckInOut dataInicio={dataInicio} dataFim={dataFim} />
          
          {/* NOVO: Botão que aparece apenas quando o check-in e check-out estão preenchidos */}
          {dataInicio && dataFim && (
            <button 
              onClick={() => setExibirFormulario(true)}
              className="w-full py-3 bg-amber-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-amber-700 transition-colors animate-in fade-in zoom-in duration-300 shadow-md"
            >
              Continuar para Reserva
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          <LegendaCalendario />
        </>
      )}
    </div>
  );
}