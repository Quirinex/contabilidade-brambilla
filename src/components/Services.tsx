import { BookOpen, Calculator, LineChart, Users, Building2, Handshake, FileText, Store, Wallet } from 'lucide-react';

const services = [
  { icon: BookOpen, title: 'Contabilidade Empresarial', desc: 'Gestão contábil completa para empresas de todos os portes.' },
  { icon: Calculator, title: 'Consultoria Fiscal', desc: 'Consultoria especializada para otimizar sua carga tributária.' },
  { icon: LineChart, title: 'Planejamento Tributário', desc: 'Planejamento estratégico para redução legal de impostos.' },
  { icon: Users, title: 'Departamento Pessoal', desc: 'Gestão eficiente e segura do departamento pessoal da sua empresa.' },
  { icon: Building2, title: 'Abertura e Alteração de Empresas', desc: 'Assessoria ágil e descomplicada para abertura e alteração de empresas.' },
  { icon: Handshake, title: 'Assessoria Societária', desc: 'Suporte completo em rotinas societárias e paralegais.' },
  { icon: FileText, title: 'Obrigações Acessórias', desc: 'Garantia de conformidade no cumprimento de todas as obrigações acessórias.' },
  { icon: Store, title: 'Consultoria para MEI e Simples', desc: 'Consultoria direcionada e simplificada para MEIs e empresas do Simples Nacional.' },
  { icon: Wallet, title: 'BPO Financeiro', desc: 'Terceirização financeira especializada para focar no seu negócio.' },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 px-4 md:px-8 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="font-serif text-[36px] md:text-[46px] font-light leading-tight text-slate-900">
            Mantenha sua empresa em <span className="gradient-text italic">conformidade</span>
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-8 hover:shadow-lg transition-shadow duration-300">
              <s.icon className="text-primary" size={32} strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
