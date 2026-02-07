
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const marylandCounties = [
  "Anne Arundel", "Calvert", "Charles", "Prince Georges", "St. Mary's"
];

const Home: React.FC = () => {
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    county: '',
    message: ''
  });

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

  const issues = ['Healthcare', 'Jobs', 'Housing', 'Education', 'Other'];
  
  const issueContent: Record<string, string> = {
    'Healthcare': "As a healthcare CEO, Quincy has seen firsthand the challenges working families face in providing their loved ones with quality care. Once a home care worker herself, Quincy founded a business that employs more than 70 healthcare professionals who provide assisted living services for seniors and care for children with chronic diseases. In Congress, Quincy will defend the Affordable Care Act (ACA), expand Medicare to cover dental and vision care, and fight to reduce prescription drug prices. Quincy Bareebe is committed to advancing universal health care.",
    'Jobs': "As a former staffer of the Department of Defense, she will defend the pay, benefits, and job security of our 75,000+ federal workers against Donald Trump. She knows that federal workers are the backbone of our community. Quincy knows there is way too much income inequality in this country, and the federal government often chooses to side with the billionaires and corporate interests at the expense of working people.",
    'Housing': "Quincy will fight to protect homeownership by providing foreclosure assistance and counseling to homeowners in distress. She will champion expanded pathways to homeownership for working families. She supports creating a pathway to permanent housing ownership for Veterans and will work to make FHA and FCC grant rules more favorable to local co-ops and communities to help more people buy homes. Quincy understands that generational wealth begins with home ownership.",
    'Education': "As a working mother, she knows education is key. Quincy put herself and her younger siblings through college while working as a home health aid and a dishwasher at KFC. She will ensure real investment in our children's education from pre-K to debt-free community college, and career training to prepare our youth to achieve tomorrow’s successes.",
    'Other': ""
  };

  const formatHighlightedText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(Quincy Bareebe|Quincy)/g);
    return parts.map((part, i) => 
      (part === 'Quincy' || part === 'Quincy Bareebe') 
        ? <span key={i} className="text-brand-yellow font-bold">{part}</span> 
        : part
    );
  };

  const donateUrl = "https://secure.actblue.com/donate/quincy-for-congress-1";
  const amounts = [10, 25, 50, 100, 250];

  const handleIssueSelect = (issue: string) => {
    setSelectedIssue(issue);
    setIsAskModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 300) return;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your question has been sent to Quincy.');
    setIsAskModalOpen(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      county: '',
      message: ''
    });
  };

  const inputStyle = "w-full p-4 md:p-5 lg:p-5 bg-white text-brand-navy placeholder-brand-navy/60 outline-none font-bold uppercase text-[14px] md:text-[14px] lg:text-[16px] border-2 border-brand-navy/20 shadow-sm focus:ring-2 focus:ring-brand-yellow focus:border-brand-yellow transition-all mb-4";
  const modalInputStyle = "w-full p-4 md:p-5 border-2 md:border-4 border-gray-100 outline-none font-bold uppercase text-sm md:text-lg placeholder-brand-navy text-brand-navy bg-white";

  // Refined font sizes for gold boxes - balanced for mobile single-col and desktop 3-col
  const goldBoxTitleStyle = "text-[26px] sm:text-[28px] md:text-[22px] lg:text-[26px] xl:text-[30px] font-extrabold leading-[1.05] text-brand-navy uppercase tracking-tight text-left relative z-10";

  return (
    <div className="animate-in fade-in duration-1000 overflow-x-hidden bg-white font-sans text-brand-navy">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[550px] md:min-h-[600px] lg:min-h-[700px] flex items-stretch bg-brand-navy overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch justify-between gap-0 lg:gap-12 w-full">
          <div className="w-full lg:w-1/2 text-white z-20 flex flex-col justify-center text-center lg:text-left pt-14 md:pt-20 lg:pt-0 pb-10 md:pb-16 lg:pb-0">
            <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl xl:text-[3.9rem] font-extrabold uppercase leading-[1.05] mb-6 md:mb-8 tracking-tight text-white">
              “I AM <span className="text-brand-yellow">RUNNING FOR CONGRESS</span> TO PROTECT WORKING FAMILIES AND SENIORS.” — <span className="text-brand-yellow">QUINCY BAREEBE</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold uppercase tracking-widest text-white/90 mb-10 md:mb-12 border-l-4 border-brand-yellow pl-4 md:pl-6 leading-tight max-w-2xl mx-auto lg:mx-0 text-left">
              BRINGING AFFORDABILITY, MEDICARE, AND QUALITY HEALTHCARE TO THE FOREFRONT.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 mt-4">
              <Link to="/take-action" className="px-6 md:px-10 lg:px-12 py-4 md:py-4 lg:py-5 bg-brand-yellow text-brand-navy font-extrabold uppercase tracking-widest rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] lg:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center text-base md:text-lg lg:text-[21px]">Get Involved</Link>
              <Link to="/about" className="px-6 md:px-10 lg:px-12 py-4 md:py-4 lg:py-5 border-2 border-white text-white font-extrabold uppercase tracking-widest rounded-none shadow-[4px_4px_0px_0px_#e1bb23] md:shadow-[6px_6px_0px_0px_#e1bb23] lg:shadow-[8px_8px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center text-base md:text-lg lg:text-[21px]">Meet <span className="text-brand-yellow font-black">Quincy</span></Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-end z-10 mt-6 lg:mt-0 self-stretch p-0">
            <div className="relative w-full h-full p-0 m-0 leading-none overflow-hidden flex items-end justify-center lg:justify-end">
              <img 
                src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/Quincy-in-white-2_B3web-scaled.png" 
                alt="Quincy Bareebe" 
                className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-full h-auto max-h-[350px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-full object-contain object-bottom animate-in slide-in-from-bottom-24 duration-1000 block drop-shadow-2xl origin-bottom" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: GOLD BOXES (BAREEBE BLUEPRINT) */}
      <section className="bg-white py-12 md:py-20 lg:py-28">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            
            {/* Box 1: Healthcare - Rectangular Update */}
            <Link to="/issues#protecting-families" className="group block relative transition-all duration-300 hover:-translate-y-2">
              <div className="bg-brand-yellow p-6 sm:p-8 md:p-8 lg:p-10 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[260px] flex flex-col border-2 border-brand-navy shadow-[10px_10px_0px_0px_#203365] md:shadow-[14px_14px_0px_0px_#203365] overflow-hidden">
                <span className="absolute -top-4 -right-4 text-[90px] sm:text-[110px] md:text-[140px] lg:text-[170px] font-black text-brand-navy opacity-[0.07] leading-none select-none z-0">01</span>
                <div className="flex-grow flex items-center">
                  <h3 className={goldBoxTitleStyle}>
                    Quality Affordable<span className="hidden md:inline"><br /></span>Healthcare to Families<span className="hidden md:inline"><br /></span>and Seniors
                  </h3>
                </div>
                <div className="h-2 w-16 md:w-20 bg-brand-navy mt-4 relative z-10"></div>
              </div>
            </Link>

            {/* Box 2: Affordability - Rectangular Update */}
            <Link to="/issues#financial-stability" className="group block relative transition-all duration-300 hover:-translate-y-2">
              <div className="bg-brand-yellow p-6 sm:p-8 md:p-8 lg:p-10 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[260px] flex flex-col border-2 border-brand-navy shadow-[10px_10px_0px_0px_#203365] md:shadow-[14px_14px_0px_0px_#203365] overflow-hidden">
                <span className="absolute -top-4 -right-4 text-[90px] sm:text-[110px] md:text-[140px] lg:text-[170px] font-black text-brand-navy opacity-[0.07] leading-none select-none z-0">02</span>
                <div className="flex-grow flex items-center">
                  <h3 className={goldBoxTitleStyle}>
                    Making Our Lives<span className="hidden md:inline"><br /></span>More<span className="hidden md:inline"><br /></span>Affordable
                  </h3>
                </div>
                <div className="h-2 w-16 md:w-20 bg-brand-navy mt-4 relative z-10"></div>
              </div>
            </Link>

            {/* Box 3: Future - Rectangular Update */}
            <Link to="/issues#strong-future" className="group block relative transition-all duration-300 hover:-translate-y-2">
              <div className="bg-brand-yellow p-6 sm:p-8 md:p-8 lg:p-10 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[260px] flex flex-col border-2 border-brand-navy shadow-[10px_10px_0px_0px_#203365] md:shadow-[14px_14px_0px_0px_#203365] overflow-hidden">
                <span className="absolute -top-4 -right-4 text-[90px] sm:text-[110px] md:text-[140px] lg:text-[170px] font-black text-brand-navy opacity-[0.07] leading-none select-none z-0">03</span>
                <div className="flex-grow flex items-center">
                  <h3 className={goldBoxTitleStyle}>
                    Protecting Our Future<span className="hidden md:inline"><br /></span>Through<span className="hidden md:inline"><br /></span>21 Century
                  </h3>
                </div>
                <div className="h-2 w-16 md:w-20 bg-brand-navy mt-4 relative z-10"></div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 3: ASK QUINCY ANYTHING */}
      <section className="bg-brand-navy relative overflow-hidden flex flex-col lg:flex-row items-stretch border-t-4 md:border-t-8 border-brand-yellow">
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto relative overflow-hidden order-2 lg:order-1">
          <img 
            src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/Ask-Quincy-Anything-AS6_1701-scaled.jpg" 
            alt="Quincy with constituents" 
            className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000 object-center"
          />
          <div className="absolute inset-0 bg-brand-navy/10"></div>
        </div>
        
        <div className="w-full lg:w-1/2 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center order-1 lg:order-2">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            <h2 
              className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white uppercase tracking-[0.02em] mb-6 md:mb-4"
              style={{ lineHeight: '1.1' }}
            >
              ASK <span className="name-highlight text-brand-yellow">QUINCY</span> ANYTHING
            </h2>
            <div className="h-1.5 md:h-2 w-16 md:w-24 bg-white mb-8 md:mb-8"></div>
            
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-black uppercase tracking-widest mb-8 md:mb-10">
              What issues matter to you most?
            </p>

            <div className="flex flex-col space-y-3 md:space-y-3">
              {issues.map((issue) => (
                <button
                  key={issue}
                  onClick={() => handleIssueSelect(issue)}
                  className="group w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 bg-white/5 border-2 border-white/20 hover:border-brand-yellow hover:bg-white/10 transition-all text-left"
                >
                  <span className="text-white group-hover:text-brand-yellow font-black uppercase tracking-widest text-sm sm:text-base lg:text-lg">
                    {issue}
                  </span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 border-2 border-white/40 group-hover:border-brand-yellow flex items-center justify-center transition-colors">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ASK QUINCY MODAL */}
      {isAskModalOpen && (
        <div className="fixed inset-0 z-[150] bg-brand-navy/95 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-5xl p-8 md:p-16 shadow-[12px_12px_0px_0px_#e1bb23] md:shadow-[32px_32px_0px_0px_#e1bb23] border-4 border-brand-navy relative animate-in zoom-in duration-300 mt-8 mb-12">
            
            <button 
              onClick={() => setIsAskModalOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 bg-brand-navy text-brand-yellow hover:bg-brand-yellow hover:text-brand-navy transition-all p-2 rounded-none border-2 border-brand-navy z-[160]"
              aria-label="Close"
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="mb-8 md:mb-12">
              <div className="text-xl md:text-3xl lg:text-[34px] font-medium text-brand-navy tracking-tight leading-[1.4] border-l-4 md:border-l-[12px] border-brand-yellow pl-6 md:pl-10">
                {issueContent[selectedIssue] && (
                  <div className="mb-8">
                    {formatHighlightedText(issueContent[selectedIssue])}
                  </div>
                )}
                <div className="text-brand-navy font-black uppercase text-lg md:text-2xl mt-4">WANT TO KNOW MORE? ASK QUINCY:</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input name="firstName" placeholder="FIRST NAME" value={formData.firstName} onChange={handleInputChange} required className={modalInputStyle} />
                <input name="lastName" placeholder="LAST NAME" value={formData.lastName} onChange={handleInputChange} required className={modalInputStyle} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input name="email" type="email" placeholder="EMAIL ADDRESS" value={formData.email} onChange={handleInputChange} required className={modalInputStyle} />
                <input name="mobile" type="tel" placeholder="MOBILE #" value={formData.mobile} onChange={handleInputChange} required className={modalInputStyle} />
              </div>
              <div className="space-y-1">
                <select name="county" value={formData.county} onChange={handleInputChange} required className={`${modalInputStyle} bg-white appearance-none cursor-pointer`}>
                  <option value="" disabled>County</option>
                  {marylandCounties.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <div className="flex justify-end mb-2">
                  <span className={`text-xs md:text-sm font-black uppercase tracking-widest ${formData.message.length >= 280 ? 'text-red-500' : 'text-brand-navy'}`}>
                    {formData.message.length}/300
                  </span>
                </div>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={4} md:rows={5} maxLength={300} className={`${modalInputStyle} resize-none`} placeholder="Ask Quincy your question here..."></textarea>
              </div>
              <button type="submit" className="w-full py-6 md:py-8 bg-brand-navy text-brand-yellow font-black uppercase tracking-[0.2em] text-xl md:text-3xl hover:bg-brand-yellow hover:text-brand-navy transition-all border-4 border-brand-navy shadow-[8px_8px_0px_0px_#e1bb23]">
                Ask Quincy
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SECTION 4: GET INVOLVED TODAY */}
      <section className="bg-[#f4f7fa] py-16 md:py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12 md:mb-16 lg:mb-24">
            <h3 
              className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-brand-navy uppercase tracking-tight mb-6 md:mb-6"
              style={{ lineHeight: '1.1' }}
            >
              Get Involved <span className="text-brand-yellow">Today</span>
            </h3>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-brand-navy uppercase tracking-[0.05em] md:tracking-[0.1em] border-b-2 md:border-b-4 border-brand-yellow pb-2 md:pb-4 inline-block">
              Join <span className="text-brand-yellow">Quincy</span> in protecting our families and seniors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 w-full">
              <div className="relative group max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                <div className="bg-white p-2 sm:p-3 lg:p-4 shadow-[12px_12px_0px_0px_#e1bb23] md:shadow-[16px_16px_0px_0px_#e1bb23] transition-all duration-500 border border-gray-100">
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

            <div className="lg:col-span-7 w-full mt-6 lg:mt-0">
              <div className="bg-white p-6 sm:p-10 md:p-12 shadow-xl md:shadow-2xl border-2 md:border-4 border-brand-navy">
                <form onSubmit={handleInvolvedSubmit} className="space-y-2 md:space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <input name="firstName" placeholder="First Name" value={involvedData.firstName} onChange={handleInvolvedInputChange} required className={inputStyle} />
                    <input name="lastName" placeholder="Last Name" value={involvedData.lastName} onChange={handleInvolvedInputChange} required className={inputStyle} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <input name="email" type="email" placeholder="Email" value={involvedData.email} onChange={handleInvolvedInputChange} required className={inputStyle} />
                    <input name="phone" type="tel" placeholder="Phone Number" value={involvedData.phone} onChange={handleInvolvedInputChange} required className={inputStyle} />
                  </div>
                  
                  <div className="relative">
                    <select name="county" value={involvedData.county} onChange={handleInvolvedInputChange} required className={`${inputStyle} appearance-none cursor-pointer pr-10`}>
                      <option value="" disabled>SELECT COUNTY</option>
                      {marylandCounties.map(c => <option key={c} value={c}>{c} COUNTY</option>)}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-brand-yellow">
                      <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  {/* RESTORED: Conditional Address Info for Lawn Signs */}
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

                  <div className="pt-6 md:pt-8 pb-4 md:pb-6">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-black text-brand-navy uppercase mb-4 md:mb-6 tracking-tight">How would you like to volunteer?</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-4 gap-x-4 md:gap-x-6">
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
                          <span className="font-bold uppercase text-[11px] sm:text-[12px] lg:text-[14px] tracking-widest text-brand-navy transition-colors">{formatHighlightedText(option.label)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 md:pt-6 pb-6 md:pb-10">
                     <p className="text-[10px] sm:text-[10px] lg:text-[11px] text-gray-500 font-bold uppercase leading-relaxed tracking-tight">
                      By providing your mobile number, you consent to receive periodic campaign updates from Quincy for Congress. Txt HELP for help, STOP to end. Msg & Data rates may apply.
                    </p>
                  </div>

                  <div className="flex justify-start">
                    <button 
                      type="submit" 
                      className="w-full sm:w-auto px-10 md:px-20 py-5 md:py-6 bg-brand-navy text-brand-yellow font-black uppercase tracking-[0.2em] text-lg md:text-2xl shadow-[6px_6px_0px_0px_#e1bb23] md:shadow-[8px_8px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 md:border-4 border-brand-navy"
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

      {/* SECTION 5: DONATE */}
      <section className="bg-white py-16 md:py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12 md:mb-16 lg:mb-24">
            <h3 
              className="text-[1.8rem] sm:text-3xl md:text-5xl lg:text-7xl font-extrabold text-brand-navy uppercase tracking-tight mb-6 md:mb-6"
              style={{ lineHeight: '1.1' }}
            >
              DONATE TO SEND <span className="text-brand-yellow">QUINCY</span> TO CONGRESS
            </h3>
            <div className="h-1.5 md:h-2 w-20 md:w-24 bg-brand-navy mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-center">
            
            <div className="lg:col-span-6 relative flex justify-center order-1">
              <div className="relative inline-block group w-full max-sm sm:max-w-md lg:max-w-none">
                <div className="bg-white p-2 sm:p-3 shadow-[12px_12px_0px_0px_#e1bb23] md:shadow-[12px_12px_0px_0px_#e1bb23] transition-all duration-500 hover:translate-x-1 hover:translate-y-1 hover:shadow-none border border-gray-100">
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

            <div className="lg:col-span-6 space-y-6 md:space-y-8 order-2 mt-6 lg:mt-0">
              <div className="space-y-4 md:space-y-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-brand-navy uppercase leading-tight border-l-4 md:border-l-8 border-brand-yellow pl-5 md:pl-8 py-2 tracking-tight">
                  Fuel our fight: every dollar helps us protect working families, seniors, and farms. Your contribution powers our ability to communicate our message of affordability.
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
                {amounts.map((amount) => (
                  <a 
                    key={amount} 
                    href={`${donateUrl}?amount=${amount}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-brand-navy text-brand-yellow py-4 md:py-6 text-center font-black text-xl md:text-2xl lg:text-3xl uppercase tracking-widest shadow-[4px_4px_0px_0px_#e1bb23] md:shadow-[6px_6px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-brand-navy flex items-center justify-center"
                  >
                    ${amount}
                  </a>
                ))}
                <a 
                  href={donateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white border-2 border-brand-navy text-brand-navy py-4 md:py-6 text-center font-black text-lg md:text-xl lg:text-2xl hover:bg-gray-50 transition-all uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(32,51,101,0.1)] md:shadow-[6px_6px_0px_0px_rgba(32,51,101,0.1)] flex items-center justify-center"
                >
                  OTHER
                </a>
              </div>
              
              <div className="pt-4 md:pt-4 text-center">
                <a 
                  href={donateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block w-full sm:w-auto px-10 md:px-12 py-5 md:py-6 bg-brand-navy text-brand-yellow font-black uppercase tracking-widest text-lg md:text-xl shadow-[6px_6px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 md:border-4 border-brand-navy text-center"
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

export default Home;
