import { useState } from 'react';
import DicasLocais from './DicasLocais';
import Gastronomia from './Gastronomia';

export default function GuiaCasa() {
  // O estado inicial é a aba de Dicas
  const [abaAtiva, setAbaAtiva] = useState('DICAS'); 

  return (
    <div className="w-full flex justify-center">
      
      {/* Se a aba ativa for 'DICAS', renderiza o DicasLocais */}
      {abaAtiva === 'DICAS' && (
        <DicasLocais 
          onAbrirGastronomia={() => setAbaAtiva('GASTRONOMIA')} 
        />
      )}
      
      {/* Se a aba ativa for 'GASTRONOMIA', renderiza a lista de restaurantes */}
      {abaAtiva === 'GASTRONOMIA' && (
        <Gastronomia 
          onVoltar={() => setAbaAtiva('DICAS')} 
        />
      )}

    </div>
  );
}