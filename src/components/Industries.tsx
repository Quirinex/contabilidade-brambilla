import { Store, MonitorSmartphone, Stethoscope, Building, Factory, Briefcase, ArrowRight } from 'lucide-react';

const industries = [
  { icon: Store, title: 'Comércio e Varejo' },
  { icon: MonitorSmartphone, title: 'Tecnologia e Startups' },
  { icon: Stethoscope, title: 'Saúde e Clínicas' },
  { icon: Building, title: 'Construção Civil' },
  { icon: Factory, title: 'Indústria e Manufatura' },
  { icon: Briefcase, title: 'Serviços Profissionais' },
];

export function Industries() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-[36px] md:text-[46px] font-light leading-tight text-slate-900 mb-6">
            Atendemos o seu <span className="italic gradient-text font-medium">setor</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            Soluções contábeis e estratégicas especializadas para as demandas únicas de cada indústria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <a key={i} href="#servicos" className="group relative flex items-center justify-between rounded-2xl bg-white p-8 md:p-10 overflow-hidden border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10 flex items-center gap-6">
                <ind.icon className="text-primary/80" size={32} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl md:text-[28px] text-slate-900 font-medium">{ind.title}</h3>
              </div>
              <ArrowRight className="text-slate-400 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 relative z-10" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
