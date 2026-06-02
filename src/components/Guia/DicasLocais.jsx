import { Compass, Ship, Sunset, Footprints, Utensils, Waves } from 'lucide-react';
import CardAcao from '../../utils/CardAcao';

export default function DicasLocais({ onAbrirGastronomia }) {
  const dicas = [
    {
      icone: <Waves className="w-5 h-5 text-onda-casa shrink-0" />,
      titulo: "Tábua de Marés",
      descricao: "Sempre confira a tábua oficial para não perder a maré baixa. Clique aqui para acessar.",
      acao: 'LINK_TABUA_MARES' // Mantém usando o serviço externo
    },
    {
      icone: <Utensils className="w-5 h-5 text-onda-casa shrink-0" />,
      titulo: "Gastronomia", 
      descricao: "Desfrute de ótimos restaurantes muito próximos à casa. Clique aqui para saber mais.",
      onClick: onAbrirGastronomia // Dispara a função de trocar a aba!
    },
    {
      icone: <Ship className="w-5 h-5 text-onda-casa shrink-0" />,
      titulo: "Piscinas Naturais",
      descricao: "Agende um passeio de catamarã para as famosas Galés de Maragogi."
    },
    {
      icone: <Sunset className="w-5 h-5 text-onda-casa shrink-0" />,
      titulo: "Pôr do Sol",
      descricao: "Não perca o fim de tarde na praia ou no próprio mar."
    },
    {
      icone: <Footprints className="w-5 h-5 text-onda-casa shrink-0" />,
      titulo: "Caminhada no Bancos de Areia",
      descricao: "Aventure-se pelos bancos de areia de Maragogi na maré baixa, lembrando-se sempre de conferir a tábua de marés antes." 
    },
  ];

  return (
    <div className="w-full max-w-xl p-6 bg-areia-clara rounded-2xl shadow-lg border border-verde-claro flex flex-col gap-4">
      <div className="flex items-center gap-2 text-areia-casa">
        <Compass className="w-6 h-6 text-amber-600" />
        <h3 className="text-xl font-bold text-verde-casa">Dicas da Casa 210</h3>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed">
        Preparamos algumas sugestões para você aproveitar o melhor de Maragogi e tornar sua estadia inesquecível:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        {dicas.map((item, index) => (
          <CardAcao 
            key={index} 
            icone={item.icone}
            titulo={item.titulo}
            descricao={item.descricao}
            acao={item.acao}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
}