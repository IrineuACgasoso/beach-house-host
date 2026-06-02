import { executarAcaoRedirect } from '../services/redirectActions';

export default function CardAcao({ icone, titulo, descricao, acao, onClick }) {
  // Função que decide o que fazer ao clicar
  const handleClique = () => {
    if (onClick) {
      onClick(); // Prioriza a função local (mudar de aba, por exemplo)
    } else if (acao) {
      executarAcaoRedirect(acao); // Se não tiver função, usa o serviço de links
    }
  };

  // Verifica se o card tem alguma interação para aplicar os estilos de hover
  const interativo = acao || onClick;

  return (
    <div 
      onClick={interativo ? handleClique : undefined}
      className={`flex gap-3 p-3 bg-white rounded-xl border border-verde-claro shadow-sm transition-all duration-200
        ${interativo ? 'cursor-pointer hover:border-amber-500 hover:shadow-md active:scale-[0.99]' : 'hover:shadow-md'}
      `}
    >
      {icone}
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-bold text-verde-casa">{titulo}</span>
        <span className="text-xs text-slate-600 leading-tight">{descricao}</span>
      </div>
    </div>
  );
}