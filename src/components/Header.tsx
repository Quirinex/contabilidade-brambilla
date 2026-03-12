import { WhatsAppIcon } from './WhatsAppIcon';

export function Header() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <header className="flex w-full max-w-[1200px] items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-3 sm:px-6 py-3 backdrop-blur-md shadow-sm transition-all duration-300">
        <a href="#" className="flex items-center shrink-0">
          <img src="/logo-brambilla.png" alt="Brambilla Contabilidade & Consultoria" className="h-8 sm:h-10 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-slate-600 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#servicos">Serviços</a>
          <a className="text-slate-600 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#depoimentos">Depoimentos</a>
        </div>
        <div className="flex items-center shrink-0">
          <a href="https://wa.me/554337720684" target="_blank" rel="noopener noreferrer" className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-900 px-3 sm:px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors whitespace-nowrap">
            <WhatsAppIcon size={16} />
            <span className="hidden lg:inline">Agende uma Consulta</span>
          </a>
        </div>
      </header>
    </div>
  );
}
