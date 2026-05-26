import { Wifi, Home, Snowflake, MapPin, ShieldCheck, Waves } from 'lucide-react';

export default function InfoCasa() {
  // Lista de comodidades da casa para facilitar a manutenção
  const comodidades = [
    { icone: <Home className="w-5 h-5 text-cyan-600" />, texto: "Acomoda até 8 pessoas" },
    { icone: <Waves className="w-5 h-5 text-cyan-600" />, texto: "Piscina privativa & Churrasqueira" },
    { icone: <Snowflake className="w-5 h-5 text-cyan-600" />, texto: "Ar-condicionado nos quartos" },
    { icone: <Wifi className="w-5 h-5 text-cyan-600" />, texto: "Wi-Fi de alta velocidade (Home Office)" },
    { icone: <ShieldCheck className="w-5 h-5 text-cyan-600" />, texto: "Condomínio fechado com segurança" },
  ];

  return (
    <div className="w-full max-w-xl p-6 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col gap-6">
      {/* Seção Sobre a Casa */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-3">Sobre a Casa</h2>
        <p className="text-slate-600 leading-relaxed text-sm">
          Aproveite dias inesquecíveis em nossa casa de praia personalizada. Um ambiente amplo, 
          perfeito para descansar com a família, curtir uma piscina e relaxar ao som do mar. 
          Localizada em uma região tranquila e de fácil acesso.
        </p>
      </div>

      {/* O que o espaço oferece */}
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-3">O que o espaço oferece</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {comodidades.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
              {item.icone}
              <span className="text-sm font-medium text-slate-700">{item.texto}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Região */}
      <div className="border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2 text-cyan-700 mb-2">
          <MapPin className="w-5 h-5" />
          <h3 className="text-lg font-semibold text-slate-800">A Região</h3>
        </div>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 pl-1">
          <li>Há menos de 100 metros da praia.</li>
          <li>Próximo a supermercados, padarias e ótimos restaurantes locais.</li>
          <li>Bairro seguro e monitorado.</li>
        </ul>
      </div>
    </div>
  );
}