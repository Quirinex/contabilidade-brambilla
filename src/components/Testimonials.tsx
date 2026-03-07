import { Quote } from 'lucide-react';

const testimonials = [
  { quote: "A Brambilla transformou a gestão financeira da minha empresa. O atendimento é excepcional e as orientações tributárias salvaram nosso fluxo de caixa em um momento crítico.", name: "João Silva", role: "CEO, TechNova Solutions", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWlKAYqkdf4vbGhwB0HYHUG-0sQ5Jgk2umECYlsK5WiOgcXtkWeT9bZ6RrNyvlH-Xo8UqGvB96O4PrbOxqf9FusvLPAARS_DagSuc44MWfagKdSa3y6vzETuaUo_iMD1xXEKF6WtP3QVa_ORJw3ePdVaubeRcTCU2EXmueDrFsw05hU7AYupyxbvi2iR5Wd3MhTLfn0_aa0ZJFrWk8TNNdVM8e1RXcd8G8Z5JxyTPJ9Jn9CJCIv57UQ6YnmtOVvL8j6RJWVpXnnOg" },
  { quote: "Profissionais extremamente competentes. Desde que mudamos para a Brambilla, não tivemos mais dores de cabeça com a contabilidade. Eles cuidam de tudo com muita maestria e transparência.", name: "Maria Santos", role: "Fundadora, Ateliê Santos", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg7zRaajE_bzvwFkR3LHEyllJakpGfpKoc2HC53oPgJcgL3hiM9La7wRQv1QB1R3iFklXu_KerUsIN3yq0yi9o8IdmzfkSBLI7rtGL132kk9KnFbRKG9bUbKX0fxjf4UWRVAix7fpzb7PmXtCHbPruEsBa7sHJZi-pbbY7KJT-ZV0JoFhJ48ZWvOwB9iA6ObRwKLxQfvf1VbtwbQKogqXeVWXS2eZcUulrkE68wH2rzHIHH3dTX7AOVuUfJefMvrMRrQ_q5MiLFKQ" },
  { quote: "Recomendo de olhos fechados. A equipe é ágil, prestativa e sempre pronta para tirar nossas dúvidas. Ter a Brambilla como parceira estratégica fez toda a diferença no nosso crescimento.", name: "Carlos Oliveira", role: "Diretor, Construtora Oliveira", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaypATeKQZyH8KZn5DX0jT4DP1sztlXVX1jia6L11Fz5-XeNZVfQZHQVZBiQo0qoA83nOYfrOKSYCqNXrA-p3wxnC98MMRPvElhwnTLhIsX0QOigI21nv3nqmz5aIEo8wUkjjDVgAR9Ps35u5zFHmCumn4a5g2OsgGuP16tN5U8BG0C1HOrb-y7uEUsPI6gnsu4YRVn9R-ZybgL-Mf1Lx8aDdsTREgFhbTDPSXOkvUSyoLqBNDzZtS_F-yeFQqofN1khNOPZwNWWg" },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-4 md:px-8 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight text-left">
            Pessoas reais, <span className="gradient-text italic font-normal">resultados reais.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl text-left">
            O que nossos <span className="gradient-text font-medium">clientes</span> dizem sobre a Brambilla
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between h-full">
              <div className="mb-8">
                <Quote className="text-primary opacity-20 mb-4" size={40} />
                <p className="text-slate-700 text-base leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url('${t.img}')` }}></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
