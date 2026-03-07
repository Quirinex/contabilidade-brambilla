import { ArrowRight } from 'lucide-react';

const posts = [
  { title: 'Como Reduzir a Carga Tributária Legalmente', category: 'Tributário', date: '12 Mar 2026', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8pkWzh2trMHCpuEHRwCvP7QdJD3M61IuD3KGYcql3mrxJM8h5ns-G-FlRHbWhFwFvAfz9oVjYOgiQXsQ5FGC_DGrLX4HXOdyGiIDKvlWJ7XEuVAABhz1AcDVmQkMZBj5xgK7Hxto3AyneD7C3V_iprzJR50CACJmf-ja0yFzOdflbYTn3MDsIRO6GmXU4yPC3ZL-EpuToPEOF586bsSwSvVUrEXuiupB0QsRjlEwzlrhjMxYrdKV1u8JmpADbe-ASnJo_Dng9mg0' },
  { title: 'Novas Regras do Simples Nacional 2026', category: 'Fiscal', date: '05 Mar 2026', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6U1tQuiP62Hf-vhiXc-ZsFMt1muXlzQBtjTKrgZxYtwWuai4-lnRULc5h50uE_y5t_2Q-B6O-GH708sgvvEV1dAThQ5WK2m7xjSy_90yzUFVepiaTpx-NlMTxGb-FRVCg4dG4rBvOKkj4ueNrj9A7ifvf36-0a3F3YhO6VrET1lHIzwRdQIj2qBgxirx5PjOhPoN0Q-fdd9fgwNmKA2Db2AI0S-GZfLOCMnTKMrYmO8abZRQQ44taOZ-a9c59-QdgC6qbKSdwguY' },
  { title: 'IRPJ: Guia Completo para Empresas', category: 'Tributário', date: '28 Fev 2026', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCg6wEIa7JtIvk4X7rQ_Dh8yB-3FgIWIIupjvR0yvMJnfYXLMjhKsi82itMFakN4tLzO3wdw-eNrXiTgwXBLpmMaKoyTUR5HZSKKtqEQgxt4LOIDtEA0ctFwpEzFgg41qO0TbMWgIJ_LRczZaSfM2DV3NZZOwM2g7a-sKounHvPXUoyLl4-Mn0-71u7uz3KOLHQkHITXrIlp3Qn8_hffnJakhFGzCNqYh_EiT2RB6j9NeLa5sfcXqjM3_iVN-EErWfP2-m7-IYnqy8' },
  { title: 'MEI: Tudo que Você Precisa Saber', category: 'Gestão', date: '15 Fev 2026', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALZxiJzcSgKj5I-OrwjhEc0CeGCNX9E1EU78DdlCqxq4e3B2-ahEgPasVBDxSBKv-iL713ptnnrqYC6EU2b1zVur8ViHXmpU3eWo1ki8LdLDgNnHcto-xDdgSfijVPk_33I4967u_qTDtDOSFQ7md3_loBv6HTHgl1tAZWeNLecMG5cDmRru6vDgFSbynCoj7DHG2khnyXfN766zL2PLP5Rq90w69AWDvLZ3MNlfw_IkWas2WyuWjj3Yu5TnQfLNabbyRp_hl1TWY' },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 px-4 md:px-8 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-16 text-slate-900">
          Conteúdos e <span className="gradient-text italic">insights</span>
        </h2>
        <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x">
          {posts.map((post, i) => (
            <article key={i} className="min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start flex flex-col gap-4 group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <h3 className="absolute bottom-4 left-4 right-4 text-white font-serif text-xl font-medium z-20">{post.title}</h3>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-sm">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded font-medium">{post.category}</span>
                  <span className="text-slate-500">{post.date}</span>
                </div>
                <p className="text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Leia Mais <ArrowRight size={16} className="ml-1" />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
