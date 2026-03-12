import { WhatsAppIcon } from './WhatsAppIcon';

export function CTA() {
  return (
    <section className="px-4 md:px-8 lg:px-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto rounded-[40px] md:rounded-[60px] bg-[#050526] relative overflow-hidden p-12 md:p-24 text-center text-white shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50 mix-blend-overlay pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl leading-tight">
            Fale conosco em menos de <span className="italic font-light">10 minutos</span>
          </h2>
          <div className="text-slate-300 text-lg md:text-xl font-light">
            <p>Disponível de segunda a sexta, 8h às 18h.</p>
            <p>Você também pode <a href="https://wa.me/554337720684?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o." target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">agendar uma reunião</a>.</p>
          </div>
          <a href="https://wa.me/554337720684" target="_blank" rel="noopener noreferrer" className="bg-white text-[#050526] hover:bg-slate-100 transition-colors rounded-xl px-8 py-4 font-semibold flex items-center gap-2 mt-4 shadow-lg">
            <WhatsAppIcon size={20} />
            Fale pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
