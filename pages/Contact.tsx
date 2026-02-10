
import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 overflow-x-hidden bg-white font-sans text-brand-navy">
      
      {/* SECTION 1: CONTACT HERO - TEXT ONLY */}
      <section className="relative bg-brand-navy overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl text-white z-20 flex flex-col justify-center text-center lg:text-left">
            <div className="mb-6 md:mb-8 lg:mb-10 flex justify-center lg:justify-start">
              <div className="inline-block px-8 py-2 bg-brand-yellow text-brand-navy font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Reach Out
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold uppercase leading-[1.1] mb-6 md:mb-8 tracking-tight">
              LET'S <span className="text-brand-yellow font-extrabold">CONNECT</span>.
            </h1>

            <p className="font-normal uppercase tracking-[0.1em] md:tracking-[0.15em] text-white mb-0 opacity-90 max-w-2xl mx-auto lg:mx-0 border-l-4 border-brand-yellow pl-6 text-left text-sm md:text-base">
              "Real change happens when communities come together. Whether you're ready to volunteer, have questions about our platform, or want to share what matters most to your family, we're here to listen and act."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: CONTACT GRID */}
      <section className="bg-gray-50 py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
            
            {/* Sidebar Info & Image */}
            <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
              <div className="space-y-10">
                <div className="space-y-8">
                  <div className="group">
                    <a href="mailto:info@quincyforcongress.com" className="text-2xl md:text-3xl font-black text-brand-navy hover:text-brand-yellow transition-colors tracking-tighter block">
                      Click here to email the Campaign
                    </a>
                  </div>
                  
                  <div className="group">
                    <a href="tel:443-741-0604" className="text-2xl md:text-3xl font-black text-brand-navy hover:text-brand-yellow transition-colors tracking-tighter">
                      443-741-0604
                    </a>
                  </div>
                </div>

                <div className="relative pt-8">
                  <div className="border-[8px] md:border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#e1bb23] lg:shadow-[32px_32px_0px_0px_#e1bb23] overflow-hidden h-[400px] md:h-[500px]">
                    <img 
                      src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/AS9_2908-scaled.jpg" 
                      alt="Reach out to Quincy Bareebe" 
                      className="w-full h-full object-cover block" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form Area */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-white p-8 md:p-12 lg:p-16 border-4 border-brand-navy shadow-[16px_16px_0px_0px_#203365] lg:shadow-[32px_32px_0px_0px_#203365]">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for reaching out! Someone from the team will be in touch soon.'); }}>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="FIRST NAME"
                        className="w-full px-6 py-4 border-2 border-gray-100 outline-none focus:border-brand-yellow font-black uppercase tracking-widest text-sm transition-all bg-white placeholder-brand-navy"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="LAST NAME"
                        className="w-full px-6 py-4 border-2 border-gray-100 outline-none focus:border-brand-yellow font-black uppercase tracking-widest text-sm transition-all bg-white placeholder-brand-navy"
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input 
                        type="tel" 
                        placeholder="PHONE NUMBER"
                        className="w-full px-6 py-4 border-2 border-gray-100 outline-none focus:border-brand-yellow font-black uppercase tracking-widest text-sm transition-all bg-white placeholder-brand-navy"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="email" 
                        placeholder="EMAIL ADDRESS"
                        className="w-full px-6 py-4 border-2 border-gray-100 outline-none focus:border-brand-yellow font-black uppercase tracking-widest text-sm transition-all bg-white placeholder-brand-navy"
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="STREET ADDRESS"
                      className="w-full px-6 py-4 border-2 border-gray-100 outline-none focus:border-brand-yellow font-black uppercase tracking-widest text-sm transition-all bg-white placeholder-brand-navy"
                      required 
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="col-span-2 md:col-span-2 space-y-2">
                      <input 
                        type="text" 
                        placeholder="CITY"
                        className="w-full px-6 py-4 border-2 border-gray-100 outline-none focus:border-brand-yellow font-black uppercase tracking-widest text-sm transition-all bg-white placeholder-brand-navy"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        defaultValue="MD"
                        placeholder="STATE"
                        className="w-full px-6 py-4 border-2 border-gray-100 outline-none focus:border-brand-yellow font-black uppercase tracking-widest text-sm transition-all bg-white placeholder-brand-navy"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="ZIP CODE"
                        className="w-full px-6 py-4 border-2 border-gray-100 outline-none focus:border-brand-yellow font-black uppercase tracking-widest text-sm transition-all bg-white placeholder-brand-navy"
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <textarea 
                      rows={5} 
                      placeholder="YOUR MESSAGE: Tell us what matters most to your family..."
                      className="w-full px-6 py-4 border-2 border-gray-100 outline-none focus:border-brand-yellow font-black uppercase tracking-widest text-sm transition-all bg-white placeholder-brand-navy"
                      required 
                    ></textarea>
                  </div>

                  <div className="flex items-start space-x-4 p-5 bg-gray-50 border-2 border-gray-100">
                    <input type="checkbox" id="privacy-consent" className="mt-1.5 h-5 w-5 text-brand-navy border-gray-300 rounded focus:ring-brand-yellow" required />
                    <label htmlFor="privacy-consent" className="text-[11px] font-bold text-brand-navy/70 leading-snug uppercase tracking-tight">
                      I consent to the <Link to="/privacy" className="text-brand-yellow">Privacy Policy</Link> and understand that my information will be used to send campaign updates. 
                      <span className="block text-[9px] mt-1 text-gray-400 font-normal uppercase tracking-widest">Message and data rates may apply.</span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-6 bg-brand-navy text-brand-yellow font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-brand-yellow hover:text-brand-navy transition-all border-4 border-brand-navy text-xl"
                  >
                    Send to Team <span className="text-brand-yellow font-extrabold">Quincy</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FOOTER CALLOUT */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 skew-x-12 transform -translate-x-1/2"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.1] tracking-tight mb-8">
             <span className="text-brand-yellow font-extrabold">GET INVOLVED</span> TODAY
          </h2>
          <p className="text-lg md:text-2xl font-normal opacity-80 uppercase tracking-widest mb-12 max-w-3xl mx-auto">
            Our grassroots movement is built one person at a time. Join us in making history.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/take-action" className="px-12 py-5 bg-brand-yellow text-brand-navy font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
