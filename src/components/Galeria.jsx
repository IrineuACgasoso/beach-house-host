// 1. IMPORTAÇÕES
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react'; // Ícones para o Modal

// Trazendo as imagens locais
import quarto1Pic from '../assets/galeria/quarto1.png';
import quarto2Pic from '../assets/galeria/quarto2.png';
import quarto3Pic from '../assets/galeria/quarto3.png';
import suitePic from '../assets/galeria/suite.png';
import churrasqueiraPic from '../assets/galeria/churrasqueira.png';
import upperviewPic from '../assets/galeria/upperview.png';
import varandaPic from '../assets/galeria/varanda.png';

export default function Galeria() {
  // 2. ESTADO DO MODAL
  // 'null' significa que o modal está fechado. 
  // Se tiver um número (ex: 0, 1, 2...), será o índice da foto aberta.
  const [fotoExpandida, setFotoExpandida] = useState(null);

  const fotos = [
    quarto1Pic,
    quarto2Pic,
    quarto3Pic,
    suitePic,
    churrasqueiraPic,
    upperviewPic,
    varandaPic
  ];

  // 3. FUNÇÕES DE NAVEGAÇÃO
  const abrirFoto = (index) => setFotoExpandida(index);
  
  const fecharGaleria = () => setFotoExpandida(null);

  const fotoAnterior = (e) => {
    e.stopPropagation(); // Evita que o clique vaze para o fundo e feche o modal
    setFotoExpandida((atual) => (atual === 0 ? fotos.length - 1 : atual - 1));
  };

  const proximaFoto = (e) => {
    e.stopPropagation();
    setFotoExpandida((atual) => (atual === fotos.length - 1 ? 0 : atual + 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-2 mb-8 relative">
      
      <h2 className="text-2xl font-bold text-verde-casa mb-4">Conheça o Espaço</h2>
      
      {/* 4. GRID DE IMAGENS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fotos.map((foto, index) => (
          <img
            key={index}
            src={foto}
            alt={`Foto da casa ${index + 1}`}
            onClick={() => abrirFoto(index)} // Adicionado evento de clique!
            className="w-full h-56 object-cover rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          />
        ))}
      </div>

      {/* 5. MODAL (LIGHTBOX)
          Só aparece na tela se 'fotoExpandida' não for null
      */}
      {fotoExpandida !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={fecharGaleria} // Clicar no fundo escuro fecha a galeria
        >
          {/* Botão Fechar (X) */}
          <button 
            onClick={fecharGaleria}
            className="absolute top-6 right-6 text-white/70 hover:text-areia-casa transition-colors z-50"
            aria-label="Fechar galeria"
          >
            <X size={36} />
          </button>

          {/* Seta Anterior (<) */}
          <button 
            onClick={fotoAnterior}
            className="absolute left-4 md:left-8 p-2 text-white/70 hover:text-areia-casa transition-colors z-50"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Imagem em Destaque */}
          <img 
            src={fotos[fotoExpandida]} 
            alt="Foto expandida" 
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Clicar na foto não fecha o modal
          />

          {/* Seta Próxima (>) */}
          <button 
            onClick={proximaFoto}
            className="absolute right-4 md:right-8 p-2 text-white/70 hover:text-areia-casa transition-colors z-50"
            aria-label="Próxima foto"
          >
            <ChevronRight size={48} />
          </button>

          {/* Contador de Fotos (Ex: 1 / 7) */}
          <div className="absolute bottom-6 text-white/70 font-medium">
            {fotoExpandida + 1} / {fotos.length}
          </div>
        </div>
      )}
      
    </div>
  );
}