import './App.css'
import Calendario from './components/Calendario'
import InfoCasa from './components/InfoCasa'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Banner / Header */}
      <header className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 px-4 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
          🏠 Casa da Praia Mar Azul
        </h1>
        <p className="mt-2 text-cyan-100 font-medium text-base md:text-lg">
          Reserve o seu descanso no paraíso
        </p>
      </header>

      {/* Grid Principal (Responsivo) */}
      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Lado Esquerdo: Detalhes da Casa (Ocupa 7 colunas no desktop) */}
        <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
          <InfoCasa />
        </div>

        {/* Lado Direito: Calendário (Ocupa 5 colunas no desktop) */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
          <Calendario />
        </div>

      </main>

      {/* Rodapé Simples */}
      <footer className="text-center py-6 text-sm text-slate-400 border-t border-slate-200 mt-12">
        &copy; {new Date().getFullYear()} - Casa da Praia. Todos os direitos reservados.
      </footer>
    </div>
  )
}

export default App