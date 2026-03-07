import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Quanto custa os serviços de contabilidade?', a: 'Nossos valores variam de acordo com a complexidade e volume de transações da sua empresa. Entre em contato para um orçamento personalizado, garantindo que você pague apenas pelo que realmente precisa.' },
  { q: 'Vocês atendem empresas de qual porte?', a: 'Atendemos desde microempreendedores individuais (MEI) até grandes corporações, adaptando nossas soluções contábeis para o tamanho e a necessidade específica do seu negócio.' },
  { q: 'Como funciona a migração de contador?', a: 'A migração é um processo simples e transparente. Nós cuidamos de toda a transição dos seus dados e obrigações fiscais do antigo contador para a Brambilla, sem interrupções nas suas operações.' },
  { q: 'Quais impostos minha empresa precisa pagar?', a: 'Os impostos dependem do regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real) e da atividade da sua empresa. Realizamos um planejamento tributário para otimizar seus custos fiscais.' },
  { q: 'Vocês fazem abertura de empresa?', a: 'Sim, realizamos todo o processo de abertura de empresa, desde a escolha da natureza jurídica ideal até o registro nos órgãos competentes, garantindo que seu negócio nasça estruturado corretamente.' },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 md:px-8 lg:px-24 bg-white">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center text-slate-900 mb-12 tracking-tight">
          Tem alguma <span className="gradient-text italic font-normal">dúvida?</span>
        </h2>
        <div className="flex flex-col w-full">
          {faqs.map((faq, i) => (
            <div key={i} className="flex flex-col border-b border-slate-200 py-6 group">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="flex cursor-pointer items-center justify-between gap-6 outline-none w-full text-left"
              >
                <p className="text-slate-900 text-lg md:text-xl font-medium leading-normal">{faq.q}</p>
                <ChevronDown className={`text-slate-900 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <p className="text-slate-500 text-base font-normal leading-relaxed pt-4 pb-2">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
