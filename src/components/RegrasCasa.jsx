import { VolumeX, Trash2, Zap, HeartHandshake, Info } from 'lucide-react';
import { PetProibido } from '../utils/emojiCreator';

export default function RegrasCasa() {
  const regras = [
    {
      icone: <VolumeX className="w-6 h-6 text-onda-casa shrink-0" />,
      titulo: "Lei do Silêncio",
      texto: "Pedimos a gentileza de respeitar as regras de convivência na questão do silêncio, garantindo a tranquilidade do condomínio e dos vizinhos."
    },
    {
      icone: <Zap className="w-6 h-6 text-onda-casa shrink-0" />,
      titulo: "Uso Consciente",
      texto: "Ajude-nos a preservar o meio ambiente! Lembre-se de desligar os ares-condicionados e as luzes sempre que sair da casa."
    },
    {
      icone: <PetProibido className="w-6 h-6 text-onda-casa shrink-0" />,
      titulo: "Proibido Pets",
      texto: "Adoramos todos os bichinhos, mas para manter o padrão de limpeza e garantir o conforto de todos os hóspedes e vizinhos, não acomodamos pets."
    },
    {
      icone: <Trash2 className="w-6 h-6 text-onda-casa shrink-0" />,
      titulo: "Coleta de Lixo",
      texto: "Mantenha o ambiente limpo. Ao final da estadia, pedimos que todo o lixo seja recolhido e depositado nas lixeiras do condomínio, respeitando a divisão de recicláveis e não recicláveis."
    },
    {
      icone: <HeartHandshake className="w-6 h-6 text-onda-casa shrink-0" />,
      titulo: "Cuidado com o Espaço",
      texto: "A casa foi preparada com muito carinho para você. Cuide dos móveis, utensílios e da piscina como se fossem seus."
    }
  ];

  return (
    <div className="w-full max-w-xl p-6 bg-white rounded-2xl shadow-lg border border-verde-claro flex flex-col gap-6 mt-8">
      
      {/* Cabeçalho da Seção */}
      <div className="flex items-center gap-2 border-b border-verde-claro pb-3">
        <Info className="w-6 h-6 text-areia-casa" />
        <h2 className="text-xl font-bold text-verde-casa">Boa Convivência</h2>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed">
        Para que a sua experiência e a nossa relação sejam as melhores possíveis, 
        listamos algumas orientações importantes para a sua estadia:
      </p>

      {/* Grid de Regras */}
      <div className="flex flex-col gap-4">
        {regras.map((regra, index) => (
          <div key={index} className="flex gap-4 items-start p-3 bg-areia-clara rounded-xl border border-verde-claro/50">
            {regra.icone}
            <div>
              <h3 className="text-sm font-semibold text-verde-casa mb-1">{regra.titulo}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{regra.texto}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}