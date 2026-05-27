// 1. IMPORTAÇÕES
// Trazendo as imagens locais da pasta assets. O Vite se encarrega de otimizar isso no deploy.
import quarto1Pic from '../assets/galeria/quarto1.png'
import quarto2Pic from '../assets/galeria/quarto2.png'
import quarto3Pic from '../assets/galeria/quarto3.png'
import suitePic from '../assets/galeria/suite.png'
import churrasqueiraPic from '../assets/galeria/churrasqueira.png'
import upperviewPic from '../assets/galeria/upperview.png'
import varandaPic from '../assets/galeria/varanda.png'

export default function Galeria() {
  // 2. LISTA DE FOTOS
  // Guardamos as variáveis importadas aqui. Para adicionar novas fotos no futuro, 
  // basta importar lá em cima e adicionar o nome da variável nesta lista.
  const fotos = [
    quarto1Pic,
    quarto2Pic,
    quarto3Pic,
    suitePic,
    churrasqueiraPic,
    upperviewPic,
    varandaPic
  ];

  return (
    // 3. CONTAINER PRINCIPAL
    // Centraliza o conteúdo (mx-auto) e define a largura máxima (max-w-6xl).
    <div className="w-full max-w-6xl mx-auto px-4 mt-2 mb-8">
      
      <h2 className="text-2xl font-bold text-verde-casa mb-4">Conheça o Espaço</h2>
      
      {/* 4. GRID DE IMAGENS (Responsivo)
          grid-cols-1: 1 foto por linha no celular.
          md:grid-cols-3: 3 fotos por linha em telas maiores. 
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* 5. LOOP DE RENDERIZAÇÃO
            O .map() percorre o array 'fotos' e cria uma tag <img> para cada item.
        */}
        {fotos.map((foto, index) => (
          <img
            key={index} // Obrigatório no React para listas (ajuda na performance)
            src={foto}  // O caminho da imagem gerado pelo Vite
            alt={`Foto da casa ${index + 1}`}
            // object-cover garante que a foto preencha o espaço (h-56) sem amassar
            className="w-full h-56 object-cover rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
          />
        ))}
        
      </div>
    </div>
  );
}