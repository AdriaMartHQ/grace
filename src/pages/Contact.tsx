import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const WeChatIcon = ({ className = "" }) => (
  <svg className={`w-3 h-3 ${className} fill-current`} viewBox="0 0 24 24">
    <path d="M8.5 12c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm7.5 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM24 10.5c0-4.42-4.25-8-9.5-8S5 6.08 5 10.5c0 2.43 1.28 4.62 3.32 6.13l-.58 2.11 2.37-1.18c.45.12.91.19 1.39.19.26 0 .52-.02.78-.05-.2-.55-.3-1.14-.3-1.76 0-3.31 3.13-6 7-6 .56 0 1.11.06 1.62.17.26-.64.4-1.32.4-2.06zm-6.5 4.5c-3.04 0-5.5 2.01-5.5 4.5 0 1.48.88 2.78 2.2 3.6l-.37 1.34 1.48-.74c.29.07.6.12.92.12 3.04 0 5.5-2.01 5.5-4.5s-2.46-4.5-5.5-4.5zm-2 2.5c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm4 0c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z"/>
  </svg>
);

const MapIcon = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

const PhoneIcon = ({ className = "" }) => (
  <svg className={`w-3.5 h-3.5 ${className} fill-current`} viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', whatsapp: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', whatsapp: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-white animate-in fade-in duration-700">
      <section className="py-20 px-6 max-w-[1440px] mx-auto space-y-24">
        
        {/* Top Section: Experts & Inquiry Form (Baseline Aligned) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
          
          {/* Left Column: Information & Expert Cards */}
          <div className="flex flex-col h-full text-left">
            <div className="mb-12">
              <span className="text-[#FF9D00] text-xs font-black uppercase tracking-[0.5em] mb-4 block">Bespoke Travel Solutions</span>
              <h1 className="text-5xl md:text-6xl font-black serif text-slate-900 mb-6 tracking-tighter">
                {language === 'zh' ? '开启您的私人定制' : 'Design Your Escape'}
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed font-light max-w-lg">
                {language === 'zh' 
                  ? '资深地接团队常驻伊斯坦布尔。从签证协助到全程私人专车，我们为您提供一站式高端旅行服务。' 
                  : 'Based in Istanbul, our specialists craft bespoke journeys with local precision and 24/7 support.'}
              </p>
            </div>

            {/* Spacer to push expert cards to the bottom for baseline alignment with form */}
            <div className="flex-grow"></div>

            {/* Expert Cards Container */}
            <div className="space-y-8">
              {/* Expert Card: Arwen */}
              <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">Arwen (阿文)</h3>
                    <p className="text-[10px] font-black text-[#FF9D00] uppercase tracking-widest">DMC Operations Director</p>
                  </div>
                  <span className="bg-white px-4 py-1.5 rounded-full text-[9px] font-black border border-slate-200 uppercase tracking-tighter text-slate-400">Istanbul Resident</span>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      <WeChatIcon className="text-[#1AAD19]/60" />
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">WeChat ID (Same as Mobile)</p>
                    </div>
                    <span className="text-3xl font-black text-slate-900 tracking-tight block">+86 181 4463 3364</span>
                  </div>
                  
                  <div className="flex items-center gap-6 pt-4 border-t border-slate-200/50">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-[#1AAD19] rounded-full"></div>
                       <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Primary Contact: WeChat</p>
                    </div>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">WhatsApp Supported</p>
                  </div>
                </div>
              </div>

              {/* Expert Card: Dahua */}
              <div className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">Dahua (大华)</h3>
                    <p className="text-[10px] font-black text-[#FF9D00] uppercase tracking-widest">Licensed Senior Specialist</p>
                  </div>
                  <span className="bg-white px-4 py-1.5 rounded-full text-[9px] font-black border border-slate-200 uppercase tracking-tighter text-slate-400">Istanbul Resident</span>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-1">
                      <WeChatIcon className="text-[#1AAD19]/60" />
                      <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">WeChat ID (Same as Mobile)</p>
                    </div>
                    <span className="text-3xl font-black text-slate-900 tracking-tight block">+86 134 2640 1777</span>
                  </div>
                  
                  <div className="flex items-center gap-6 pt-4 border-t border-slate-200/50">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-[#1AAD19] rounded-full"></div>
                       <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">WeChat ID = Mobile Number</p>
                    </div>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">Turkey Expert Advice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="bg-white p-12 lg:p-16 rounded-[4rem] shadow-[0_24px_80px_-15px_rgba(0,0,0,0.08)] border border-slate-50 flex flex-col justify-center">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in-95">
                <div className="w-20 h-20 bg-[#FFF4E5] text-[#FF9D00] rounded-full flex items-center justify-center text-4xl mb-8 shadow-inner">✓</div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">{t.contact.form.success}</h3>
                <p className="text-slate-500 text-lg mb-10">{t.contact.form.successDesc}</p>
                <button onClick={() => setSuccess(false)} className="text-[#FF9D00] font-black uppercase tracking-[0.4em] text-sm hover:underline">New Inquiry</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">{t.contact.form.email}</label>
                    <input type="email" required value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} className="w-full bg-[#F8FAFC] border border-slate-100 px-8 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#FF9D00]/10 focus:border-[#FF9D00] transition-all font-semibold text-slate-900" />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">{t.contact.form.whatsapp}</label>
                    <input type="text" required value={formState.whatsapp} onChange={(e) => setFormState({...formState, whatsapp: e.target.value})} className="w-full bg-[#F8FAFC] border border-slate-100 px-8 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#FF9D00]/10 focus:border-[#FF9D00] transition-all font-semibold text-slate-900" placeholder="WeChat ID / Phone" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">{t.contact.form.message}</label>
                  <textarea rows={6} required value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} className="w-full bg-[#F8FAFC] border border-slate-100 px-8 py-6 rounded-[2.5rem] focus:outline-none focus:ring-4 focus:ring-[#FF9D00]/10 focus:border-[#FF9D00] transition-all resize-none font-semibold text-slate-900"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className={`w-full bg-[#0A0F1D] text-white py-6 rounded-2xl font-black uppercase tracking-[0.5em] text-sm transition-all shadow-xl hover:scale-[1.01] active:scale-[0.99] ${isSubmitting ? 'opacity-70' : 'hover:bg-[#FF9D00]'}`}>
                  {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Section: Simplified Office Location (Institutional Tone) */}
        <div className="bg-[#0A0F1D] rounded-[4rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden text-left border border-white/5">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9D00] opacity-[0.03] rounded-full -mr-48 -mt-48 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
            <div className="space-y-10 max-w-xl">
               <div className="space-y-4">
                  <span className="text-[#FF9D00] text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Official Presence</span>
                  <h2 className="text-4xl lg:text-5xl font-black serif tracking-tight">Turkey Office Location</h2>
               </div>
               
               <div className="space-y-8">
                  <div className="flex items-start gap-8">
                    <div className="p-5 bg-white/5 rounded-[2rem] border border-white/10 shrink-0">
                       <MapIcon className="text-[#FF9D00]" />
                    </div>
                    <div className="space-y-2">
                       <p className="text-3xl font-bold tracking-tight text-white/95">Bakırköy, Istanbul</p>
                       <p className="text-slate-500 text-xs font-black uppercase tracking-widest">Global Operations Hub</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-[#FF9D00] rounded-full animate-pulse"></div>
                    <p className="text-sm font-medium italic">
                      {language === 'zh' 
                        ? '出于对客户隐私与办公环境的保护，详细门牌信息将在预订确认或正式核实后提供。' 
                        : 'Exact office details are shared upon confirmed booking or official verification request.'}
                    </p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6 shrink-0">
               {/* Replace 'PLACEHOLDER_URL' with the actual Google Maps link */}
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-white text-slate-900 px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all hover:bg-[#FF9D00] hover:text-white shadow-2xl"
               >
                 Open in Google Maps
               </a>
               
               <div className="flex items-center gap-3 py-3 px-6 bg-white/5 rounded-full border border-white/10">
                  <PhoneIcon className="text-slate-500" />
                  <a href="tel:+905064972026" className="text-sm font-black tracking-widest text-white/70 hover:text-[#FF9D00] transition-colors">+90 506 497 20 26</a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;