import { Dog, Cat, Ban } from 'lucide-react';

// Exemplo usando um Cão
export const PetProibido = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Dog size={20} color = "#4A9087" />
      <Ban size={28} color = "#4A9087" style={{ position: 'absolute', top: -4, left: -4 }} />
    </div>
  );
};