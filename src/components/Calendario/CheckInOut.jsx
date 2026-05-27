import { ArrowRight } from 'lucide-react';
import { dateToBrazilianString } from '../../services/dateUtils';

export default function CheckInOut({ dataInicio, dataFim }) {
  if (!dataInicio) return null;

  return (
    <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center justify-between text-sm transition-all animate-fade-in">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Check-in</span>
        <span className="font-semibold text-teal-900">{dateToBrazilianString(dataInicio)}</span>
      </div>
      
      <ArrowRight className="w-4 h-4 text-slate-400" />
      
      <div className="flex flex-col text-right">
        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Check-out</span>
        <span className="font-semibold text-teal-900">
          {dataFim ? dateToBrazilianString(dataFim) : 'Escolha a saída...'}
        </span>
      </div>
    </div>
  );
}