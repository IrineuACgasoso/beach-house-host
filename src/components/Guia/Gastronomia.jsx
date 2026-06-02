import { MapPin, Utensils, ArrowLeft } from 'lucide-react';
import CardAcao from '../../utils/CardAcao'; // Ajuste o caminho se necessário

export default function Gastronomia({ onVoltar }) {
  // Array com os restaurantes para facilitar a manutenção e adição de novos locais
  const restaurantes = [
    {
      nome: "Restaurante Tua Casa Hamburgueria e Petiscaria Delivery",
      descricao: "Hamburgueria incrível bem próxima do Beach House. Possuem um ótimo atendimento e aceitam delivery.",
      acao: "MAPS_TUA_CASA"
    },
    {
      nome: "Casa da Praia Lounge e Pizzaria",
      descricao: "A melhor pizza de Maragogi. Somente há 10 minutos do condomínio. Localizada no centro de Barra Grande.",
      acao: "MAPS_CASA_DA_PRAIA"
    },
    {
      nome: "Rei das Coxinhas Peroba",
      descricao: "Perfeito para lanchar ou tomar café da manhã. E o melhor: é só atravessar a rua do condomínio e você já chegou.",
      acao: "MAPS_REI_DAS_COXINHAS"
    }
  ];

  return (
    <div className="w-full max-w-xl p-6 bg-areia-clara rounded-2xl shadow-lg border border-verde-claro flex flex-col gap-5">
      
      {/* Cabeçalho com botão de voltar condicional */}
      <div className="flex items-center justify-between border-b border-verde-claro pb-3">
        <div className="flex items-center gap-2 text-areia-casa">
          <Utensils className="w-6 h-6 text-amber-600" />
          <h3 className="text-xl font-bold text-verde-casa">Gastronomia Local</h3>
        </div>
        
        {/* Se você passar a prop onVoltar, o botão aparece. Ótimo para navegação em abas/modais! */}
        {onVoltar && (
          <button 
            onClick={onVoltar}
            className="flex items-center gap-1 text-sm text-slate-500 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
        )}
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed">
        Selecionamos os nossos restaurantes e lanchonetes favoritos nas redondezas da Casa 210. Clique nos locais abaixo para ver a rota no Google Maps:
      </p>

      {/* Lista de Restaurantes usando o seu CardAcao reaproveitável */}
      <div className="flex flex-col gap-3">
        {restaurantes.map((rest, index) => (
          <CardAcao 
            key={index}
            icone={<MapPin className="w-5 h-5 text-red-500 shrink-0" />}
            titulo={rest.nome}
            descricao={rest.descricao}
            acao={rest.acao}
          />
        ))}
      </div>

    </div>
  );
}