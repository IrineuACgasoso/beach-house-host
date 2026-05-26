import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { buscarDatasReservadas } from '../services/googleCalendar';

export default function Calendario() {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [datasReservadas, setDatasReservadas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Carrega as datas do Google Agenda assim que o componente entra na tela
  useEffect(() => {
    async function carregarDatas() {
      try {
        const datas = await buscarDatasReservadas();
        setDatasReservadas(datas);
      } catch (err) {
        console.error("Falha ao renderizar datas", err);
      } finally {
        setCarregando(false);
      }
    }
    carregarDatas();
  }, []);

  const formatarData = (date) => {
    const ano = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const dia = String(date.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
  };

  const estilizarAzulejos = ({ date, view }) => {
    if (view === 'month') {
      const dataFormatada = formatarData(date);
      if (datasReservadas.includes(dataFormatada)) {
        return 'bg-red-100 text-red-600 font-bold border border-red-300 rounded-lg hover:bg-red-200';
      }
    }
    return null;
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg border border-slate-100 relative">
      <div className="flex items-center gap-2 mb-4 text-cyan-700">
        <CalendarIcon className="w-6 h-6" />
        <h2 className="text-xl font-bold">Calendário de Disponibilidade</h2>
      </div>

      <p className="text-sm text-slate-500 mb-6">
        Consulte as datas já reservadas para planejar sua viagem.
      </p>

      {carregando ? (
        <div className="flex flex-col items-center justify-center h-[280px] text-cyan-600 gap-2">
          <Loader2 className="w-8 h-8 animate-spin" />
          <p className="text-sm font-medium text-slate-500">Buscando agenda...</p>
        </div>
      ) : (
        <div className="custom-calendar-wrapper">
          <Calendar
            onChange={setDataSelecionada}
            value={dataSelecionada}
            tileClassName={estilizarAzulejos}
            minDate={new Date()}
            locale="pt-BR"
          />
        </div>
      )}

      <div className="mt-6 flex gap-4 text-sm justify-center border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-white border border-slate-300 rounded"></span>
          <span className="text-slate-600 font-medium">Disponível</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-100 border border-red-300 rounded"></span>
          <span className="text-red-600 font-medium">Reservado</span>
        </div>
      </div>
    </div>
  );
}