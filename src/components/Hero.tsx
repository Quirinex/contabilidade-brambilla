import { Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-40 pb-20 px-4 md:px-8 relative overflow-hidden bg-white">
      <div className="max-w-[1000px] w-full flex flex-col items-center text-center z-10">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[96px] font-light leading-[1.1] tracking-tight text-slate-900 mb-8">
          Onde a Expertise<br />
          Encontra a <span className="italic font-normal gradient-text">Confiança</span>
        </h1>
        <p className="max-w-[600px] text-base md:text-lg text-slate-500 mb-10 leading-relaxed font-normal">
          Especialistas em contabilidade, consultoria fiscal e planejamento tributário para empresas que buscam crescer com segurança.
        </p>
        <button className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 px-8 py-4 text-base font-medium text-white shadow-lg hover:shadow-xl hover:from-slate-800 hover:to-slate-600 transition-all duration-300">
          <Mail size={20} className="group-hover:scale-110 transition-transform" />
          <span>Fale Conosco</span>
        </button>
      </div>
    </section>
  );
}
