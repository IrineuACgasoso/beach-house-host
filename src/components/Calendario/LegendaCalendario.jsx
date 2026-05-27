export default function LegendaCalendario() {
  return (
    <div className="flex gap-6 text-xs justify-center border-t border-slate-100 pt-4">
      <div className="flex items-center gap-2">
        <span className="w-3.5 h-3.5 bg-white border border-slate-300 rounded-md"></span>
        <span className="text-slate-600 font-medium">Livre</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3.5 h-3.5 bg-red-50 border border-red-200 rounded-md"></span>
        <span className="text-red-700 font-medium">Reservado</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3.5 h-3.5 bg-emerald-800 rounded-md"></span>
        <span className="text-emerald-800 font-medium">Sua Seleção</span>
      </div>
    </div>
  );
}