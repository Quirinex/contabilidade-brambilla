import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';

const team = [
  { name: 'Ricardo Brambilla', role: 'Sócio Fundador / CEO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8xmsbxr6npK_x_dX7lGkk8GZFwHRxP4zcklBts0kL4NI6rLFb30qK81YWkT1sSAQk58dv3IIAnmaKogMWJsqRt3VVp-GNp6C_uo36LO_Y7YAC-aXQmbniOZ_BlwI7tCJ2_wNkHj_LITPIjbhr9yOvBig6nKZRwgx_vIkjp3VPTJzsTxKqdjwA-OHRU1fQVmqoE9UC_rSw1gysbhy-jAH_RiaGEn7YY6HmZKO5iiPcnw8K_E0ehqzUSvIkLj7pFAgjk5pVdG3kj_g' },
  { name: 'Fernanda Oliveira', role: 'Diretora Contábil', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVsLOz_ut4icz0Vo6xBtY-qVJ4O-NdU9G2LVvhLTzG5bVS4QD8_xFDPyTxjYA5hG9pG8UajXM7dFoUdzg3w2opITtcEZKkr-bd5nG-777Jz2BtDP7MO10kSlDfGO8yO-Zfb9TIg60Q5QVuACw4q9HzqQ5TnzmIC_tYaMW8gY6QvLVnSP9FlQlzA6I74I2MX_0OdMqR-UUoVYphAeOeoAggp577ZpmncBgd7ZxDHxDto_6JlU_5Y0tckraaA5qrXJCt_w7XnUkKyF0' },
  { name: 'Lucas Mendes', role: 'Gerente Fiscal', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNeRtnw_xENEvGcD7eNKjy1pM-lR27ZVkgau1_JMYQln5bXXYdqB3brkx90G_A9paVQxsilf1GICvbdAfWluFjH9O7kMzbB8e4sFSgPeP8eXT4JTOstxJQGhIcxMZyV2rspUDICeuBlXWcBX87ROJk75mJY_iAXMg-mENMCUUrEV84TtB_g3iUKAdIEgrb007vn28X4brJfea4flbMLnbPaBEBX4U9J0xlIDxoyB-BOhgwF1OMNFDWP3rCO-Ecy0aVd3OIUMGBZ2Y' },
  { name: 'Camila Santos', role: 'Coordenadora de DP', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALpn7339W_Sh-ZLtdJeBW-HST4xGkqRKcGQXQj6ee58uYglCESd-XYUMldsSHM34Pkea4NtvcICUu5nOPzZEwEoc86sOYQ1ATVG61gMigaP0P6Rkd2b2w3Ct1Z7ujLYbVs69aBYQRLRcTbDzA0YjC-TswkD5WBWjYZvJMEYSme7WkB--dleNdKWaihpxdzAb9iN06wntiN2PVdz00C1YxT5rj4Zl2PZdE6IJOkBJgJJVY_NFnefEtDAkybiE8BW-8M7EYzyzR2Hdg' },
  { name: 'André Ribeiro', role: 'Consultor Tributário', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjMxfqrbXjRytZfqvBVUUtO4rRHWN2FT0v9XBVdocFnWtrfX27SLzuPg18uxtXmX1b-deoilo8sa2WLoMI6ox00GgrqMQaPn6zjY5KuzjtCmLp2iYBfQ5MFl3UJngzpZfSpqUG0DPp6rHu193LF-O9ObqagUh8FWJSMhsOWwDxA8wgXV11noPBLWnJMdt-ejvUP_ugYsp7nknYwpn9tKc8XW6PW0vgJ9ftfooFWoNlLP7DVsL998ig-jEfmj6O3BRhNpmwTKor0Y4' },
];

export function Team() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <section id="equipe" className="py-24 px-4 md:px-8 lg:px-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <h2 className="font-serif text-[46px] font-light leading-tight tracking-tight text-slate-900">
            Conheça a <span className="italic font-normal gradient-text">equipe</span>
          </h2>
          <div className="flex h-10 items-center justify-center rounded-xl bg-slate-200/50 p-1 border border-slate-200">
            <button 
              onClick={() => setView('grid')}
              className={`flex h-full items-center justify-center rounded-lg px-4 text-sm font-medium transition-all ${view === 'grid' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <LayoutGrid size={18} className="mr-1.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button 
              onClick={() => setView('list')}
              className={`flex h-full items-center justify-center rounded-lg px-4 text-sm font-medium transition-all ${view === 'list' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <List size={18} className="mr-1.5" />
              <span className="hidden sm:inline">List</span>
            </button>
          </div>
        </div>

        <div className={view === 'grid' ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12" : "flex flex-col gap-6"}>
          {team.map((member, i) => (
            <div key={i} className={`group ${view === 'grid' ? 'flex flex-col gap-4' : 'flex items-center gap-6 bg-white p-4 rounded-2xl shadow-sm'}`}>
              <div className={`${view === 'grid' ? 'w-full aspect-[3/4]' : 'w-24 h-24 shrink-0'} bg-slate-200 rounded-xl overflow-hidden relative`}>
                <img src={member.img} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div>
                <p className="text-slate-900 text-[18px] font-bold leading-snug tracking-tight">{member.name}</p>
                <p className="text-slate-500 text-[14px] font-medium mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
