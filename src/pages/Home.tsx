import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541432901912-238b47375e0a?auto=format&fit=crop&q=80&w=1920" 
          alt="Grace Way Hero Background" 
          className="w-full h-full object-cover brightness-[0.5] scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://picsum.photos/seed/turkey-deep/1920/1080?blur=2";
          }}
        />
        {/* Overlay for added deep blue mood */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-slate-950/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 serif leading-tight tracking-tight drop-shadow-2xl">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/tours" className="w-full sm:w-auto bg-[#FF9D00] hover:bg-[#FF7A00] text-white px-12 py-5 rounded-full text-lg font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/40">
            {t.hero.cta1}
          </Link>
          <Link to="/contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl border border-white/30 px-12 py-5 rounded-full text-lg font-black uppercase tracking-[0.2em] transition-all">
            {t.hero.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
};

const TourCard: React.FC<{ tour: any }> = ({ tour }) => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 text-left">
      <div className="relative h-80 overflow-hidden bg-slate-100">
        <img 
          src={tour.image} 
          alt={tour.title} 
          loading="lazy"
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ${imgError ? 'opacity-50 grayscale' : ''}`}
          onError={(e) => {
            if(!imgError) {
               setImgError(true);
               (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${tour.id}/800/600`;
            }
          }}
        />
        <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 shadow-xl">
          {tour.location}
        </div>
      </div>
      <div className="p-10">
        <div className="flex justify-between items-center mb-6">
          <span className="text-[11px] font-black text-[#FF9D00] uppercase tracking-[0.3em]">{tour.duration}</span>
          <span className="text-2xl font-black text-slate-900 tracking-tight">${tour.price}</span>
        </div>
        <h3 className="text-2xl font-black mb-6 text-slate-900 leading-tight group-hover:text-[#FF9D00] transition-colors h-16 line-clamp-2">
          {tour.title}
        </h3>
        <div className="flex flex-wrap gap-2.5 mb-10">
          {(tour.highlights || []).slice(0, 3).map((h: string, i: number) => (
            <span key={i} className="text-[10px] font-black bg-slate-50 text-slate-500 px-4 py-2 rounded-xl border border-slate-100 uppercase tracking-widest">{h}</span>
          ))}
        </div>
        <Link to="/contact" className="block w-full text-center bg-slate-50 hover:bg-[#FF9D00] hover:text-white text-slate-900 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all shadow-sm">
          {t.nav.enquire}
        </Link>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      
      {/* Popular Routes Section */}
      <section className="py-40 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-3xl text-left">
            <span className="text-[12px] font-black text-[#FF9D00] uppercase tracking-[0.5em] mb-6 block">{t.sections.featuredTours}</span>
            <h3 className="text-5xl md:text-6xl font-black serif text-slate-900 leading-tight">{t.sections.featuredSubtitle}</h3>
          </div>
          <Link to="/tours" className="text-slate-900 font-black uppercase tracking-[0.3em] text-xs border-b-2 border-[#FF9D00] pb-3 hover:text-[#FF9D00] transition-all mb-4">
            {t.sections.viewAll}
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {(t.toursData || []).slice(0, 3).map((tour: any) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-orange-500/10 rounded-full blur-[160px] -mr-[25rem] -mt-[25rem]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <span className="text-[12px] font-black text-[#FF9D00] uppercase tracking-[0.5em] mb-6 block">{t.sections.whyUs}</span>
            <h3 className="text-5xl md:text-6xl font-black serif mb-10 leading-tight">{t.sections.whyUsSubtitle}</h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed tracking-wide italic">{t.footer.about}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '🛡️', title: t.features.f1.title, desc: t.features.f1.desc },
              { icon: '✨', title: t.features.f2.title, desc: t.features.f2.desc },
              { icon: '🎓', title: t.features.f3.title, desc: t.features.f3.desc }
            ].map((f, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-xl group hover:border-[#FF9D00]/40 transition-all hover:bg-white/10">
                <div className="text-5xl mb-10 group-hover:scale-125 group-hover:rotate-6 transition-transform block origin-left duration-500">{f.icon}</div>
                <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">{f.title}</h4>
                <p className="text-slate-400 text-base font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[12px] font-black text-[#FF9D00] uppercase tracking-[0.5em] mb-6 block">Traveler Knowledge</span>
          <h3 className="text-5xl font-black serif text-slate-900">{t.sections.faq}</h3>
        </div>
        <div className="space-y-8">
          {(t.faqs || []).map((faq: any, idx: number) => (
            <div key={idx} className="border border-slate-100 rounded-[2.5rem] overflow-hidden text-left bg-white shadow-sm hover:shadow-md transition-shadow">
              <button 
                className="w-full flex items-center justify-between p-10 text-left font-black text-slate-900 hover:bg-slate-50 transition-colors uppercase tracking-[0.1em] text-base"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <span className={`transform transition-all duration-500 ${activeFaq === idx ? 'rotate-180 text-[#FF9D00]' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </button>
              {activeFaq === idx && (
                <div className="px-10 pb-10 pt-0 text-slate-500 text-lg font-light leading-relaxed animate-in slide-in-from-top-4 duration-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;