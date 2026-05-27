import './App.css'

import Header from './components/Header'
import Calendario from './components/Calendario'
import InfoCasa from './components/InfoCasa'
import RegrasCasa from './components/RegrasCasa'
import BotaoWhatsApp from './components/BotaoWhatsApp'
import Galeria from './components/Galeria'

function App() {
  return (
    <div className="min-h-screen bg-areia-bg text-slate-800">
      {/* O Cabeçalho com o fundo animado e a logo */}
      <Header />

      {/* Galeria de Fotos */}
      <Galeria />

      {/* Grid Principal (Responsivo) */}
      <main className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Lado Esquerdo: Detalhes da Casa */}
        <div className="lg:col-span-7 w-full flex flex-col items-center lg:items-end gap-6">
          <InfoCasa />

          <RegrasCasa />

        </div>

        {/* Lado Direito: Calendário */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
          <Calendario />
        </div>

      </main>

      {/* Rodapé Simples */}
      <footer className="text-center py-6 text-sm text-slate-400 border-t border-slate-200 mt-12 pb-24 lg:pb-6">
        &copy; {new Date().getFullYear()} - Casa 210 Beach House. Todos os direitos reservados.
      </footer>

      {/* Botão Flutuante */}
      <BotaoWhatsApp />
    </div>
  )
}

export default App