import { useState } from 'react';
import { ChevronDown, MousePointer2 } from 'lucide-react';

const steps = [
  { title: 'Diagnóstico Inicial', desc: 'Análise completa da situação contábil e fiscal da sua empresa, identificando oportunidades e riscos.' },
  { title: 'Planejamento Estratégico', desc: 'Definição de metas claras e estruturação de um plano de ação personalizado para otimização tributária e financeira.' },
  { title: 'Execução e Acompanhamento', desc: 'Implementação das estratégias com monitoramento contínuo de indicadores chave e resultados alcançados.' },
  { title: 'Suporte Contínuo', desc: 'Atendimento dedicado para dúvidas rotineiras e ajustes de rota conforme o crescimento e necessidades do seu negócio.' },
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
          {/* Mockup UI */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100">
            <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
              <div className="size-3 rounded-full bg-slate-200"></div>
              <div className="size-3 rounded-full bg-slate-200"></div>
              <div className="size-3 rounded-full bg-slate-200"></div>
            </div>
            <div className="p-8 relative min-h-[400px]">
              <div className="space-y-4 max-w-[80%]">
                <div className="h-8 w-3/4 bg-slate-100 rounded"></div>
                <div className="h-4 w-full bg-slate-50 rounded"></div>
                <div className="h-4 w-5/6 bg-slate-50 rounded"></div>
                <div className="h-4 w-4/6 bg-slate-50 rounded"></div>
              </div>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="size-10 rounded bg-slate-100 shrink-0"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-1/3 bg-slate-100 rounded"></div>
                    <div className="h-3 w-full bg-slate-50 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="size-10 rounded bg-slate-100 shrink-0"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-1/4 bg-slate-100 rounded"></div>
                    <div className="h-3 w-5/6 bg-slate-50 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/3 right-1/4 flex items-center gap-1 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg translate-x-4">
                <MousePointer2 size={12} /> Ana S.
              </div>
              <div className="absolute bottom-1/3 left-1/4 flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg -translate-x-4">
                <MousePointer2 size={12} /> Carlos M.
              </div>
              <div className="absolute top-8 right-8 flex -space-x-2">
                <img alt="Avatar Ana" className="inline-block size-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEP4qtCgvpJx4Bia5z0BBAvdAOwPjYsCGc9phnjnA4xEknL2F6Gu3FRyqHYlv5RdNiNR_mSi-1gFlxF0wXaEA3OlJcTonzfj9KiaWPTa3C0b5101QKg2brRkbN3YaDNRsmYQOIK-tWaJQW9NtJklGrutRDt_viHsL_qK8RVQK_DAfD936yvlNMuo-v0ytIZ9kQaUxiN9X2NvK9MOx-_nIGPYGmo_I4q_xfdvjN8FVPgBDnMnHrq16CqROmjlIfR8IPFK-CDYV2v-Q" />
                <img alt="Avatar Carlos" className="inline-block size-8 rounded-full ring-2 ring-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfZXztM_mllXx8uJALhb2bG5mFAFruZb4URb7ckgUFVzcyln2FrGtCZ8T6_uaIcQJ74oMMwZteJ5dONg73fY5R26waM0xW0C0cKELWtxW7kwuMxZwIqJnxOdToCbdznLTrzYDng3dyjI7wVDQ7QlbAAPtE1suUHO3SGbPA_X9eP7ucR1cjK4A4jsEJfT9KNzbSzKmyvwtlQBE95v5OKSuQMjci7R_7WT5SkzIJ6HMZyjhvI-ZXNXVKBeRqjK2EAvxO8KgZH1KqBNQ" />
              </div>
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
