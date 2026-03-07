import { Landmark } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 text-slate-900 mb-4">
              <div className="text-primary">
                <Landmark size={24} />
              </div>
              <h2 className="font-serif text-2xl font-bold tracking-tight">Brambilla</h2>
            </div>
            <p className="text-slate-500 font-serif italic">Onde a Expertise Encontra a Confiança</p>
          </div>
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-slate-900 mb-2">Brambilla</h4>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Serviços</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Blog</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Equipe</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-slate-900 mb-2">Contato</h4>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">Email</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">WhatsApp</a>
              <a href="#" className="text-slate-500 hover:text-primary transition-colors text-sm">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-y border-slate-100 py-8 mb-8 relative overflow-hidden">
          <div className="flex whitespace-nowrap opacity-50 grayscale animate-[scroll_20s_linear_infinite]">
            <div className="flex gap-12 items-center">
              <span className="font-sans font-bold text-xl text-slate-400 px-8">COMPANY ONE</span>
              <span className="font-sans font-bold text-xl text-slate-400 px-8">GLOBAL TECH</span>
              <span className="font-sans font-bold text-xl text-slate-400 px-8">INNOVATE INC</span>
              <span className="font-sans font-bold text-xl text-slate-400 px-8">VENTURE CORP</span>
              <span className="font-sans font-bold text-xl text-slate-400 px-8">COMPANY ONE</span>
              <span className="font-sans font-bold text-xl text-slate-400 px-8">GLOBAL TECH</span>
              <span className="font-sans font-bold text-xl text-slate-400 px-8">INNOVATE INC</span>
              <span className="font-sans font-bold text-xl text-slate-400 px-8">VENTURE CORP</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Brambilla. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
