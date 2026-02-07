
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const marylandCounties = [
  "Anne Arundel", "Calvert", "Charles", "Prince Georges", "St. Mary's"
];

const TakeAction: React.FC = () => {
  const donateUrl = "https://secure.actblue.com/donate/quincy-for-congress-1";
  const amounts = [10, 25, 50, 100, 250];

  const [involvedOptions, setInvolvedOptions] = useState({
    host: false,
    calls: false,
    knock: false,
    yardSign: false
  });

  const [involvedData, setInvolvedData] = useState({
    firstName: '', lastName: '', email: '', phone: '', county: '',
    address1: '', address2: '', city: '', state: 'MD', zip: ''
  });

  const formatHighlightedText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(Quincy Bareebe|Quincy)/g);
    return parts.map((part, i) => 
      (part === 'Quincy' || part === 'Quincy Bareebe') 
        ? <span key={i} className="text-brand-yellow">{part}</span> 
        : part
    );
  };

  const handleInvolvedOptionChange = (option: keyof typeof involvedOptions) => {
    setInvolvedOptions(prev => ({ ...prev, [option]: !prev[option] }));
  };

  const handleInvolvedInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInvolvedData(prev => ({ ...prev, [name]: value }));
  };

  const handleInvolvedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for getting involved! Team Quincy will be in touch soon.');
    setInvolvedOptions({ host: false, calls: false, knock: false, yardSign: false });
    setInvolvedData({
      firstName: '', lastName: '', email: '', phone: '', county: '',
      address1: '', address2: '', city: '', state: 'MD', zip: ''
    });
  };

  // Matched Home Page Input Style with brand white background
  const inputStyle = "w-full p-4 md:p-5 bg-white text-brand-navy placeholder-brand-navy/60 outline-none font-bold uppercase text-[14px] md:text-[16px] border-2 border-brand-navy/20 shadow-sm focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all mb-4";

  return (
    <div className="animate-in fade-in duration-1000 overflow-x-hidden bg-white font-sans text-brand-navy">
      
      {/* SECTION 1: HERO */}
      <section className="relative bg-brand-navy overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl text-white z-20 flex flex-col justify-center text-center lg:text-left">
            <div className="mb-6 md:mb-8 lg:mb-10 flex justify-center lg:justify-start">
              <div className="inline-block px-8 py-2 bg-brand-yellow text-brand-navy font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">Get Involved</div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold uppercase leading-[1.1] mb-6 md:mb-8 tracking-tight">JOIN THE <span className="text-brand-yellow">FIGHT</span> FOR CHANGE.</h1>
            <p className="font-normal uppercase tracking-[0.1em] md:tracking-[0.15em] text-white mb-0 opacity-90 max-w-2xl mx-auto lg:mx-0 border-l-4 border-brand-yellow pl-6 text-left text-sm md:text-base">
              Real change happens when communities come together. Team <span className="text-brand-yellow name-highlight">Quincy</span> needs your energy and passion to win in Maryland's 5th District.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: GET INVOLVED TODAY (COPIED FROM HOME PAGE) */}
      <section className="bg-[#f4f7fa] py-20 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 lg:mb-24">
            <h3 
              className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-navy uppercase tracking-tighter mb-6"
              style={{ lineHeight: '1.1' }}
            >
              Get Involved <span className="text-brand-yellow">Today</span>
            </h3>
            <p className="text-xl md:text-2xl font-bold text-brand-navy uppercase tracking-[0.1em] border-b-4 border-brand-yellow pb-4 inline-block">
              Join <span className="text-brand-yellow">Quincy</span> in stopping Trump’s attacks on our families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 w-full">
              <div className="relative group">
                <div className="bg-white p-2 md:p-4 shadow-[16px_16px_0px_0px_#e1bb23] transition-all duration-500 border border-gray-100">
                  <div className="overflow-hidden aspect-square relative">
                    <img 
                      src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/Get-involved-AS9_3888-scaled.jpg" 
                      alt="Get Involved with Quincy" 
                      className="w-full h-full object-cover block grayscale-[5%] group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 w-full">
              <div className="bg-white p-8 md:p-12 shadow-2xl border-4 border-brand-navy">
                <form onSubmit={handleInvolvedSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="firstName" placeholder="First Name" value={involvedData.firstName} onChange={handleInvolvedInputChange} required className={inputStyle} />
                    <input name="lastName" placeholder="Last Name" value={involvedData.lastName} onChange={handleInvolvedInputChange} required className={inputStyle} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="email" type="email" placeholder="Email" value={involvedData.email} onChange={handleInvolvedInputChange} required className={inputStyle} />
                    <input name="phone" type="tel" placeholder="Phone Number" value={involvedData.phone} onChange={handleInvolvedInputChange} required className={inputStyle} />
                  </div>
                  
                  <div className="relative">
                    <select name="county" value={involvedData.county} onChange={handleInvolvedInputChange} required className={`${inputStyle} appearance-none cursor-pointer pr-10`}>
                      <option value="" disabled>SELECT COUNTY</option>
                      {marylandCounties.map(c => <option key={c} value={c}>{c} COUNTY</option>)}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-brand-yellow">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  {involvedOptions.yardSign && (
                    <div className="space-y-2 pt-4 animate-in slide-in-from-top-4 duration-300 border-t-2 border-brand-yellow/30">
                      <input name="address1" placeholder="STREET ADDRESS" value={involvedData.address1} onChange={handleInvolvedInputChange} required className={inputStyle} />
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="col-span-2">
                          <input name="city" placeholder="CITY" value={involvedData.city} onChange={handleInvolvedInputChange} required className={inputStyle} />
                        </div>
                        <div>
                          <input name="state" placeholder="ST" defaultValue="MD" readOnly className={`${inputStyle} opacity-60`} />
                        </div>
                        <div>
                          <input name="zip" placeholder="ZIP" value={involvedData.zip} onChange={handleInvolvedInputChange} required className={inputStyle} />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-8 pb-6">
                    <h4 className="text-xl md:text-2xl font-black text-brand-navy uppercase mb-6 tracking-tight">How would you like to volunteer?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {[
                        { id: 'host', label: 'Host Quincy (Meet & Greet or Fundraiser)' }, 
                        { id: 'calls', label: 'Make Calls' }, 
                        { id: 'knock', label: 'Knock Doors' }, 
                        { id: 'yardSign', label: 'Request a Lawn Sign' }
                      ].map((option) => (
                        <label key={option.id} className="flex items-center space-x-3 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            checked={involvedOptions[option.id as keyof typeof involvedOptions]} 
                            onChange={() => handleInvolvedOptionChange(option.id as keyof typeof involvedOptions)} 
                            className="sr-only" 
                          />
                          <div className={`w-6 h-6 border-2 border-brand-navy transition-all flex items-center justify-center shrink-0 ${involvedOptions[option.id as keyof typeof involvedOptions] ? 'bg-brand-navy' : 'bg-transparent'}`}>
                            {involvedOptions[option.id as keyof typeof involvedOptions] && <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" /></svg>}
                          </div>
                          <span className="font-bold uppercase text-[12px] md:text-[14px] tracking-widest text-brand-navy transition-colors">{formatHighlightedText(option.label)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 pb-10">
                     <p className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase leading-relaxed tracking-tight">
                      By providing your mobile number, you consent to receive periodic campaign updates from Quincy for Congress. Txt HELP for help, STOP to end. Msg & Data rates may apply.
                    </p>
                  </div>

                  <div className="flex justify-start">
                    <button 
                      type="submit" 
                      className="px-20 py-5 md:py-6 bg-brand-navy text-brand-yellow font-black uppercase tracking-[0.2em] text-xl md:text-2xl shadow-[8px_8px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-4 border-brand-navy"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MORE WAYS TO WIN */}
      <section className="py-24 lg:py-40 bg-brand-navy text-white relative overflow-hidden text-center">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.1] tracking-tight mb-16 md:mb-24">MORE WAYS TO <span className="text-brand-yellow">WIN</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-16 lg:gap-24">
            <div className="group flex flex-col items-center">
              <div className="relative mb-10">
                <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-brand-yellow rotate-45 flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                  <span className="text-2xl md:text-3xl font-black text-brand-yellow group-hover:text-brand-navy -rotate-45">1</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase mb-4 tracking-widest">Share Digitally</h3>
              <p className="text-white opacity-70 uppercase text-[11px] font-bold tracking-widest">Help spread our vision online.</p>
            </div>

            <div className="group flex flex-col items-center">
              <div className="relative mb-10">
                <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-brand-yellow rotate-45 flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                  <span className="text-2xl md:text-3xl font-black text-brand-yellow group-hover:text-brand-navy -rotate-45">2</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase mb-4 tracking-widest">Host A Meet</h3>
              <p className="text-white opacity-70 uppercase text-[11px] font-bold tracking-widest">Invite <span className="text-brand-yellow font-bold">Quincy</span> to your neighborhood.</p>
            </div>

            <div className="group flex flex-col items-center">
              <div className="relative mb-10">
                <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-brand-yellow rotate-45 flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-300">
                  <span className="text-2xl md:text-3xl font-black text-brand-yellow group-hover:text-brand-navy -rotate-45">3</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase mb-4 tracking-widest">Request A Sign</h3>
              <p className="text-white opacity-70 uppercase text-[11px] font-bold tracking-widest">Stand with <span className="text-brand-yellow font-bold">Quincy</span> with a lawn sign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: DONATE (COPIED FROM LAST SECTION OF HOME PAGE) */}
      <section className="bg-white py-12 md:py-20 lg:py-40 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-10 md:mb-16 lg:mb-24">
            <h3 
              className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-brand-navy uppercase tracking-tighter mb-4 md:mb-6"
              style={{ lineHeight: '1.1' }}
            >
              DONATE TO SEND <span className="text-brand-yellow">QUINCY</span> TO CONGRESS
            </h3>
            <div className="h-1.5 md:h-2 w-20 md:w-24 bg-brand-navy mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 lg:gap-24 items-center">
            
            <div className="lg:col-span-6 relative flex justify-center order-1">
              <div className="relative inline-block group w-full max-md lg:max-w-none">
                <div className="bg-white p-1.5 md:p-3 shadow-[8px_8px_0px_0px_#e1bb23] md:shadow-[12px_12px_0px_0px_#e1bb23] transition-all duration-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none border border-gray-100">
                  <div className="overflow-hidden aspect-square relative">
                    <img 
                      src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/Donate-AS6_1565-scaled.jpg" 
                      alt="Donate to Campaign" 
                      className="w-full h-full object-cover block grayscale-[5%] group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 md:space-y-8 order-2">
              <div className="space-y-4 md:space-y-6">
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-brand-navy uppercase leading-tight border-l-4 md:border-l-8 border-brand-yellow pl-4 md:pl-8 py-2 tracking-tight">
                  Fuel our fight: every dollar helps us protect federal workers, families, and farms. Your contribution powers our ability to communicate our message.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6">
                {amounts.map((amount) => (
                  <a 
                    key={amount} 
                    href={`${donateUrl}?amount=${amount}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-navy text-brand-yellow py-3 md:py-6 text-center font-black text-lg md:text-2xl lg:text-3xl uppercase tracking-widest shadow-[4px_4px_0px_0px_#e1bb23] md:shadow-[6px_6px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-brand-navy flex items-center justify-center"
                  >
                    ${amount}
                  </a>
                ))}
                <a 
                  href={donateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white border-2 border-brand-navy text-brand-navy py-3 md:py-6 text-center font-black text-base md:text-xl lg:text-2xl hover:bg-gray-50 transition-all uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(32,51,101,0.1)] md:shadow-[6px_6px_0px_0px_rgba(32,51,101,0.1)] flex items-center justify-center"
                >
                  OTHER
                </a>
              </div>
              
              <div className="pt-2 md:pt-4 text-center">
                <a 
                  href={donateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-brand-navy text-brand-yellow font-black uppercase tracking-widest text-lg md:text-xl shadow-[6px_6px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 md:border-4 border-brand-navy text-center"
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TakeAction;
