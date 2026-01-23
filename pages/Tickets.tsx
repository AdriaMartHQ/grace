import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Tickets: React.FC = () => {
  const { t } = useLanguage();
  const [category, setCategory] = useState<'all' | 'entry' | 'activity' | 'daytrip'>('all');

  const ticketsData = t.ticketsData || [];

  const filteredTickets = useMemo(() => {
    return category === 'all' ? ticketsData : ticketsData.filter((ticket: any) => ticket.category === category);
  }, [category, ticketsData]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 animate-in fade-in duration-700">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <span className="text-[11px] font-black text-[#FF9D00] uppercase tracking-[0.4em] mb-4 block">Official Entry & Events</span>
          <h1 className="text-4xl md:text-5xl font-black serif text-slate-900 mb-6">{t.nav.tickets}</h1>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">{t.footer.about}</p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {(['all', 'entry', 'activity', 'daytrip'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                category === cat 
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20' 
                  : 'bg-white text-slate-500 hover:bg-slate-200 border border-slate-100'
              }`}
            >
              {t.sections.categories[cat as keyof typeof t.sections.categories]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredTickets.map((ticket: any) => (
            <div key={ticket.id} className="bg-white p-6 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-left">
              <div className="relative h-56 rounded-[2rem] overflow-hidden mb-8 group bg-slate-100">
                <img 
                  src={ticket.image} 
                  alt={ticket.title} 
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${ticket.id}/600/400`;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-6 right-6 bg-[#FF9D00] text-white px-5 py-2 rounded-2xl text-lg font-black shadow-lg">
                  ${ticket.price}
                </div>
              </div>
              <div className="px-4">
                <h3 className="text-xl font-black text-slate-900 mb-6 h-14 line-clamp-2 leading-tight group-hover:text-[#FF9D00] transition-colors">{ticket.title}</h3>
                <div className="space-y-3 mb-10">
                  {(ticket.includes || []).map((inc: string, i: number) => (
                    <div key={i} className="flex items-center text-xs text-slate-500 font-medium">
                      <span className="w-5 h-5 mr-3 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold shadow-sm">✓</span>
                      {inc}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="block w-full text-center bg-slate-50 hover:bg-[#FF9D00] hover:text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all text-slate-900 shadow-inner">
                  {t.nav.enquire}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tickets;