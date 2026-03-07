import { Landmark } from 'lucide-react';

export function Header() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <header className="flex w-full max-w-[1200px] items-center justify-between whitespace-nowrap rounded-xl border border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded bg-amber-50 p-1.5 text-amber-700">
            <Landmark size={20} />
          </div>
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Brambilla</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-slate-600 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#servicos">Serviços</a>
          <a className="text-slate-600 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#depoimentos">Depoimentos</a>
          <a className="text-slate-600 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#equipe">Equipe</a>
          <a className="text-slate-600 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#blog">Blog</a>
        </div>
        <div className="flex items-center">
          <button className="flex cursor-pointer items-center justify-center rounded-lg border border-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
            <span>Agende uma Consulta &rarr;</span>
          </button>
        </div>
      </header>
    </div>
  );
}
