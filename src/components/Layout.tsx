import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

const BrandLogo = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" fill="url(#globeGradient)" />
    <path d="M10 50C10 50 25 30 50 30C75 30 90 50 90 50" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M15 65C15 65 35 45 50 45C65 45 85 65 85 65" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 5C50 5 40 25 40 50C40 75 50 95 50 95" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <defs>
      <linearGradient id="globeGradient" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF9D00" />
        <stop offset="1" stopColor="#FF5C00" />
      </linearGradient>
    </defs>
  </svg>
);

const WeChatIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M8.5 12c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm7.5 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM24 10.5c0-4.42-4.25-8-9.5-8S5 6.08 5 10.5c0 2.43 1.28 4.62 3.32 6.13l-.58 2.11 2.37-1.18c.45.12.91.19 1.39.19.26 0 .52-.02.78-.05-.2-.55-.3-1.14-.3-1.76 0-3.31 3.13-6 7-6 .56 0 1.11.06 1.62.17.26-.64.4-1.32.4-2.06zm-6.5 4.5c-3.04 0-5.5 2.01-5.5 4.5 0 1.48.88 2.78 2.2 3.6l-.37 1.34 1.48-.74c.29.07.6.12.92.12 3.04 0 5.5-2.01 5.5-4.5s-2.46-4.5-5.5-4.5zm-2 2.5c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm4 0c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z"/>
  </svg>
);

const PhoneIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.tours, path: '/tours' },
    { name: t.nav.tickets, path: '/tickets' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'tr', label: 'TR' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <BrandLogo className="w-9 h-9 transition-transform group-hover:scale-110 duration-500" />
          <div className="flex flex-col">
             <span className={`text-lg font-black tracking-tight leading-none ${isScrolled ? 'text-blue-900' : 'text-white'}`}>GRACE WAY</span>
             <span className={`text-[10px] font-bold tracking-[0.2em] ${isScrolled ? 'text-blue-900/60' : 'text-white/70'}`}>{language === 'zh' ? '恩途（国际）' : 'INTERNATIONAL'}</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#FF9D00] ${
                location.pathname === link.path ? 'text-[#FF9D00]' : isScrolled ? 'text-slate-600' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center space-x-3 border-l border-slate-300 pl-6 ml-2 h-5">
             {languages.map(l => (
               <button 
                 key={l.code}
                 onClick={() => setLanguage(l.code)}
                 className={`text-[10px] font-bold transition-colors hover:text-[#FF9D00] ${
                   language === l.code ? 'text-[#FF9D00]' : isScrolled ? 'text-slate-400' : 'text-white/60'
                 }`}
               >
                 {l.label}
               </button>
             ))}
          </div>

          <Link to="/contact" className="bg-[#FF9D00] hover:bg-[#FF7A00] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-orange-500/20">
            {t.nav.enquire}
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          <svg className={`w-6 h-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div className={`fixed inset-0 bg-blue-950 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <BrandLogo className="w-16 h-16 mb-4" />
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-2xl text-white font-medium hover:text-[#FF9D00]" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-white/10 w-48 justify-center">
             {languages.map(l => (
               <button key={l.code} onClick={() => { setLanguage(l.code); setIsOpen(false); }} className={`text-sm font-bold ${language === l.code ? 'text-[#FF9D00]' : 'text-white/60'}`}>
                 {l.label}
               </button>
             ))}
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/40 text-sm mt-8 underline">Close</button>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Brand Center Identity */}
        <div className="flex flex-col items-center text-center mb-20 animate-in fade-in zoom-in duration-1000">
           <BrandLogo className="w-24 h-24 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,157,0,0.3)]" />
           <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 uppercase">{t.footer.brandEn}</h3>
           <h4 className="text-[#FF9D00] text-xl font-bold tracking-[0.2em]">{t.footer.brandZh}</h4>
           
           <div className="mt-8 inline-block px-10 py-3 border border-orange-500/30 rounded-full bg-orange-500/5 backdrop-blur-sm">
             <span className="text-sm font-bold text-[#FF9D00] tracking-widest uppercase">
               {t.footer.statement}
             </span>
           </div>
        </div>

        {/* Detailed Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-16 border-t border-white/5 mb-16">
          {/* Column 1: Links */}
          <div className="space-y-6 text-left">
            <h4 className="font-bold text-white uppercase text-xs tracking-[0.3em] border-l-2 border-[#FF9D00] pl-3">{t.footer.explore}</h4>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-[#FF9D00] transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/tours" className="hover:text-[#FF9D00] transition-colors">{t.nav.tours}</Link></li>
              <li><Link to="/tickets" className="hover:text-[#FF9D00] transition-colors">{t.nav.tickets}</Link></li>
              <li><Link to="/contact" className="hover:text-[#FF9D00] transition-colors">{t.nav.contact}</Link></li>
            </ul>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs pt-4 border-t border-white/5 italic">
              {t.footer.about}
            </p>
          </div>

          {/* Column 2: Prioritized Contacts */}
          <div className="space-y-8 text-left">
            <h4 className="font-bold text-white uppercase text-xs tracking-[0.3em] border-l-2 border-[#FF9D00] pl-3">{t.footer.contact}</h4>
            <div className="space-y-6">
               {/* Arwen */}
               <div className="space-y-2 group">
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Lead: Arwen (阿文)</p>
                 <div className="flex flex-col gap-1.5">
                   <a href="tel:+8618144633364" className="flex items-center gap-3 text-white font-bold tracking-wider hover:text-[#FF9D00] transition-colors">
                     <div className="bg-slate-900 p-2 rounded-lg"><PhoneIcon /></div>
                     +86 181 4463 3364
                   </a>
                   <div className="flex items-center gap-3 text-slate-400 text-[10px] font-bold">
                     <div className="bg-slate-900 p-2 rounded-lg"><WeChatIcon className="text-green-500" /></div>
                     WeChat/WhatsApp ID same
                   </div>
                 </div>
               </div>

               {/* Dahua */}
               <div className="space-y-2 group">
                 <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Lead: Dahua (大华)</p>
                 <div className="flex flex-col gap-1.5">
                   <a href="tel:+8613426401777" className="flex items-center gap-3 text-white font-bold tracking-wider hover:text-[#FF9D00] transition-colors">
                     <div className="bg-slate-900 p-2 rounded-lg"><PhoneIcon /></div>
                     +86 134 2640 1777
                   </a>
                 </div>
               </div>

               {/* Office Line */}
               <div className="pt-4 border-t border-white/5 space-y-1">
                 <a href="tel:+905064972026" className="flex items-center gap-3 text-white font-bold tracking-wider hover:text-[#FF9D00] transition-colors">
                   <div className="bg-slate-900 p-2 rounded-lg"><PhoneIcon className="text-orange-400" /></div>
                   +90 506 497 20 26
                 </a>
                 <p className="text-[9px] text-slate-500 uppercase font-black pl-10">Turkey HQ Office</p>
               </div>
            </div>
          </div>

          {/* Column 3: Address & Trust */}
          <div className="space-y-8 text-left">
            <h4 className="font-bold text-white uppercase text-xs tracking-[0.3em] border-l-2 border-[#FF9D00] pl-3">Location & Trust</h4>
            <div className="space-y-2">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Istanbul Office</p>
              <p className="text-[11px] text-slate-400 leading-relaxed font-medium">{t.footer.address}</p>
            </div>
            
            <div className="pt-6 border-t border-white/5 flex items-center gap-4 group">
               {/* Minimal Tursab */}
               <div className="bg-[#d1d5db] text-slate-800 p-2 rounded-lg w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                 <span className="font-black text-[10px] leading-none">TÜRSAB</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-white text-[10px] font-black uppercase tracking-tight">Licensed A-Group Agency</span>
                  <a href="https://www.tursab.org.tr" target="_blank" className="text-slate-600 text-[8px] hover:text-[#FF9D00] transition-colors uppercase font-black">
                    Official Verification
                  </a>
               </div>
            </div>
          </div>
        </div>

        {/* Legal & Language */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-slate-800 uppercase tracking-[0.2em] font-black">
          <p>© {new Date().getFullYear()} {t.footer.brandEn}. {t.footer.licenseInfo}</p>
          <div className="flex gap-8">
             {['en', 'zh', 'tr'].map(l => (
                <button 
                  key={l} 
                  onClick={() => setLanguage(l as Language)} 
                  className={`transition-colors ${language === l ? 'text-[#FF9D00]' : 'hover:text-white'}`}
                >
                  {l}
                </button>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;