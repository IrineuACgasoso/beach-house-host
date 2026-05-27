import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Calendar as CalendarIcon, Loader2 } from 'lucide-react';

import { buscarDatasReservadas } from '../../services/googleCalendar';
import { verificarDiaDesabilitado, obterClasseDoAzulejo } from '../../services/calendarRules';

import CheckInOut from './CheckInOut';
import LegendaCalendario from './LegendaCalendario';

// OBRIGATÓRIO: Estilos nativos primeiro, estilos customizados por ÚLTIMO para garantir precedência
import 'react-calendar/dist/Calendar.css';
import './Calendario.css';

export default function Calendario() {
  const [periodoSelecionado, setPeriodoSelecionado] = useState([null, null]);
  const [datasReservadas, setDatasReservadas] = useState([]);
  const [carregando, setCarregando] = useState(true);

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
    
    // CLIQUE 3: Se já temos início e fim preenchidos, qualquer clique limpa o estado (RESET completo)
    if (inicio && fim) {
      setPeriodoSelecionado([null, null]);
      return;
    }
    
    // CLIQUE 1: Se está totalmente zerado, define o Check-in
    if (!inicio) {
      setPeriodoSelecionado([date, null]);
      return;
    }
    
    // Se já tem início mas não tem fim (Aguardando o segundo clique)
    if (inicio && !fim) {
      // ROTA DE FUGA: Se clicar no mesmo dia do Check-in, cancela e reseta tudo
      if (date.getTime() === inicio.getTime()) {
        setPeriodoSelecionado([null, null]);
        return;
      }
      // CLIQUE 2: Define o Check-out
      setPeriodoSelecionado([inicio, date]);
    }
  };

  const [dataInicio, dataFim] = periodoSelecionado || [null, null];

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border border-teal-100 relative flex flex-col gap-5">
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
        /* Injetamos dinamicamente o estado da seleção no wrapper do CSS */
        <div className={`custom-calendar-wrapper ${dataInicio && !dataFim ? 'is-selecting-checkout' : ''} ${dataInicio && dataFim ? 'has-range-selected' : ''}`}>
          <Calendar
            onClickDay={handleDiaClicado}
            value={dataInicio}
            selectRange={false}
            tileClassName={(props) => obterClasseDoAzulejo(props, datasReservadas, periodoSelecionado)}
            tileDisabled={(props) => verificarDiaDesabilitado(props, datasReservadas, periodoSelecionado)}
            minDate={new Date()}
            locale="pt-BR"
          />
        </div>
      )}

      <CheckInOut dataInicio={dataInicio} dataFim={dataFim} />
      <LegendaCalendario />
    </div>
  );
}