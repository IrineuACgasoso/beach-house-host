// src/components/Header.jsx

// 1. ATENÇÃO: Certifique-se de que o import aponta para o novo arquivo .png
import logoPng from '../assets/headerLogo.png' 
import backgroundMaragogi from '../assets/maragogi-bg.jpeg'

export default function Header() {
  return (
    /* O contêiner principal permanece estático, 
      garantindo que o site não se mova quando o mouse passa.
    */
    <header className="w-full relative shadow-inner border-b border-slate-200 aspect-video md:aspect-16/6 overflow-hidden group">
      
      {/* ESTA É A ÚNICA DIV MESTRE (O "BLITTING")
        Ela contém o fundo E a logo. Quando ela escala, tudo escala junto.
        - transition-transform duration-500: Para o movimento ser suave.
        - group-hover:scale-105: O zoom acontece quando o mouse entra no header.
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${backgroundMaragogi})` }}
      >
        
        {/* Overlay escuro opcional para dar contraste (também escala) */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        {/* A NOVA LOGO PNG INTEGADA
          Repare que ela está DENTRO da div mestre acima.
          Ela não tem mais o fundo branco flutuante.
          Usamos positioning absoluto para colocá-la na direita/centro.
        */}
        <div className="absolute inset-0 z-10 flex items-bottom justify-end px-4 md:px-16">
          <img 
            src={logoPng} 
            alt="Logo Casa 210 Beach House Maragogi" 
            /* Usamos object-contain para manter a proporção da logo.
              Usei 'drop-shadow-lg' para garantir que as letras verdes
              tenham boa leitura se a foto de fundo for escura nessa região.
            */
            className="h-28 md:h-64 object-contain drop-shadow-lg"
          />
        </div>

      </div>
    </header>
  );
}