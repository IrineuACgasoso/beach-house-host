import { Wifi, Home, Snowflake, MapPin, ShieldCheck, Waves, BedDouble, Tv, Compass } from 'lucide-react';

export default function InfoCasa() {
  // Lista de comodidades atualizada com os novos boxes solicitados
  const comodidades = [
    { icone: <Home className="w-5 h-5 text-onda-casa" />, texto: "Acomoda até 8 pessoas confortavelmente" },
    { 
      icone: <BedDouble className="w-5 h-5 text-onda-casa" />, texto: "5 quartos (sendo 2 suítes)" },
    { icone: <Waves className="w-5 h-5 text-onda-casa" />, texto: "Piscina privativa & Espaço Gourmet com Churrasqueira" },
    { icone: <Snowflake className="w-5 h-5 text-onda-casa" />, texto: "Ambientes climatizados (Ar-condicionado nos quartos e sala)" },
    { icone: <Tv className="w-5 h-5 text-onda-casa" />, texto: "Smart TV com acesso a aplicativos de streaming" },
    { icone: <Wifi className="w-5 h-5 text-onda-casa" />, texto: "Conexão Wi-Fi de alta velocidade (Ideal para Home Office)" },
    { icone: <ShieldCheck className="w-5 h-5 text-onda-casa" />, texto: "Localizada em condomínio fechado com segurança 24h" },
  ];

  return (
    <div className="w-full max-w-xl p-6 bg-areia-clara rounded-2xl shadow-lg border border-verde-claro flex flex-col gap-6">
      
      {/* Seção Sobre a Casa */}
      <div>
        <h2 className="text-xl font-bold text-verde-casa mb-3">Sobre a Casa</h2>
        <p className="text-slate-700 leading-relaxed text-sm">
          Aproveite dias inesquecíveis em nossa casa de praia personalizada. Um ambiente amplo, 
          perfeito para descansar com a família, curtir uma piscina e relaxar ao som do mar. 
          Localizada em uma região tranquila e de fácil acesso.
        </p>
      </div>

      {/* O que o espaço oferece */}
      <div>
        <h3 className="text-lg font-semibold text-verde-casa mb-3">O que o espaço oferece</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {comodidades.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-verde-claro shadow-sm hover:shadow-md transition-shadow">
              {item.icone}
              <span className="text-sm font-medium text-slate-700">{item.texto}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Região (Vocabulário aprimorado) */}
      <div className="border-t border-verde-claro pt-4">
        <div className="flex items-center gap-2 text-areia-casa mb-3">
          <MapPin className="w-5 h-5" />
          <h3 className="text-lg font-semibold text-verde-casa">A Região</h3>
        </div>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-2 pl-1 leading-relaxed">
          <li>
            <strong className="text-verde-casa">Localização privilegiada:</strong> Situada a menos de 100 metros das areias de Maragogi.
          </li>
          <li>
            <strong className="text-verde-casa">Mar de calmaria:</strong> Praia de águas calmas, mornas e seguras, excelente para relaxar, nadar e aproveitar com crianças sem preocupações com ondas fortes.
          </li>
          <li>
            <strong className="text-verde-casa">Praticidade ao redor:</strong> Ampla conveniência a poucos minutos, com mercados, padarias artesanais e excelentes restaurantes da culinária local.
          </li>
          <li>
            <strong className="text-verde-casa">Tranquilidade garantida:</strong> Bairro estritamente residencial, seguro e monitorado para o seu total sossego.
          </li>
        </ul>
      </div>

      {/* Nova Seção: Recomendações Locais */}
      <div className="border-t border-verde-claro pt-4">
        <div className="flex items-center gap-2 text-areia-casa mb-3">
          <Compass className="w-5 h-5" />
          <h3 className="text-lg font-semibold text-verde-casa">Nossas Recomendações</h3>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-2">
          Para tornar sua experiência ainda mais completa em Maragogi, não deixe de conferir:
        </p>
        <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 pl-1">
          <li>Passeio de catamarã para as famosas Galés (Piscinas Naturais).</li>
          <li>Assistir ao pôr do sol na praia ou do mirante local.</li>
          <li>Experimentar os tradicionais Bolinhos de Goma de Maragogi.</li>
          <li>
            Jantar no Restaurante /* INSIRA SEU RESTAURANTE PREFERIDO AQUI */, muito próximo à casa.
          </li>
        </ul>
      </div>

    </div>
  );
}