export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <div className="mb-4">
              <img src="/logo-brambilla.png" alt="Brambilla Contabilidade & Consultoria" className="h-14 w-auto" />
            </div>
            <p className="text-slate-500 font-serif italic">Onde a Expertise Encontra a Confiança</p>
          </div>
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-slate-900 mb-2">Brambilla</h4>
              <a href="#servicos" className="text-slate-500 hover:text-primary transition-colors text-sm">Serviços</a>
              <a href="#depoimentos" className="text-slate-500 hover:text-primary transition-colors text-sm">Depoimentos</a>
              <a href="#faq" className="text-slate-500 hover:text-primary transition-colors text-sm">Dúvidas</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-slate-900 mb-2">Contato</h4>
              <a href="https://wa.me/554337720684" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors text-sm">WhatsApp</a>
              <a href="mailto:contato@brambilla.cnt.br" className="text-slate-500 hover:text-primary transition-colors text-sm">Email</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Brambilla. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="/politica-de-privacidade.html" className="hover:text-slate-900 transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso.html" className="hover:text-slate-900 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
