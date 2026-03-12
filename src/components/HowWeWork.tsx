import { useState } from 'react';
import { ChevronDown, Search, Target, BarChart3, Headphones } from 'lucide-react';

const steps = [
  { title: 'Diagnóstico Inicial', desc: 'Análise completa da situação contábil e fiscal da sua empresa, identificando oportunidades e riscos.', icon: Search },
  { title: 'Planejamento Estratégico', desc: 'Definição de metas claras e estruturação de um plano de ação personalizado para otimização tributária e financeira.', icon: Target },
  { title: 'Execução e Acompanhamento', desc: 'Implementação das estratégias com monitoramento contínuo de indicadores chave e resultados alcançados.', icon: BarChart3 },
  { title: 'Suporte Contínuo', desc: 'Atendimento dedicado para dúvidas rotineiras e ajustes de rota conforme o crescimento e necessidades do seu negócio.', icon: Headphones },
];

export function HowWeWork() {
  const [openStep, setOpenStep] = useState(0);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col items-center text-center mb-16">
          <h2 className="text-slate-900 font-serif text-4xl md:text-[46px] font-light leading-tight mb-4 tracking-tight">
            Como <span className="italic font-normal gradient-text">trabalhamos</span>
          </h2>
          <p className="text-slate-500 text-base max-w-2xl font-light leading-relaxed">
            Onboarding simplificado, atendimento ágil e orientação especializada para que você foque no que importa.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Process Illustration */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-8 md:p-10 min-h-[400px] flex flex-col justify-center">
            <div className="relative flex flex-col gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = openStep === i;
                const isPast = openStep > i;
                return (
                  <button
                    key={i}
                    onClick={() => setOpenStep(openStep === i ? -1 : i)}
                    className={`flex items-center gap-5 p-4 rounded-xl transition-all duration-500 cursor-pointer text-left ${
                      isActive
                        ? 'bg-white shadow-lg scale-[1.02] border border-slate-200'
                        : isPast
                        ? 'bg-white/60 border border-transparent'
                        : 'bg-transparent border border-transparent hover:bg-white/40'
                    }`}
                  >
                    <div className={`relative shrink-0 size-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-md'
                        : isPast
                        ? 'bg-emerald-100 text-emerald-600'
                        : 'bg-slate-200/70 text-slate-400'
                    }`}>
                      {isPast && !isActive ? (
                        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      ) : (
                        <Icon size={20} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium uppercase tracking-wider ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                          Passo {i + 1}
                        </span>
                      </div>
                      <h4 className={`text-base font-medium mt-0.5 transition-colors ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {step.title}
                      </h4>
                    </div>
                    <div className={`shrink-0 size-3 rounded-full transition-all duration-500 ${
                      isActive ? 'bg-primary scale-125' : isPast ? 'bg-emerald-400' : 'bg-slate-300'
                    }`} />
                  </button>
                );
              })}
            </div>
            {/* Connecting line */}
            <div className="absolute left-[3.25rem] top-[4.5rem] bottom-[4.5rem] w-0.5 bg-slate-200 rounded-full pointer-events-none hidden md:block">
              <div
                className="w-full bg-gradient-to-b from-slate-900 to-primary rounded-full transition-all duration-500"
                style={{ height: `${Math.max(0, openStep) * 33.33}%` }}
              />
            </div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col w-full">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col border-b border-slate-200 py-4 group">
                <button 
                  onClick={() => setOpenStep(openStep === i ? -1 : i)}
                  className="flex cursor-pointer items-center justify-between gap-6 py-4 outline-none w-full text-left"
                >
                  <h3 className={`text-xl font-medium leading-normal transition-colors ${openStep === i ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}>
                    {step.title}
                  </h3>
                  <div className={`text-slate-400 transition-transform duration-300 ${openStep === i ? 'text-primary rotate-180' : 'group-hover:text-primary'}`}>
                    <ChevronDown />
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${openStep === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-slate-500 text-base font-light leading-relaxed pb-4 pr-12">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
