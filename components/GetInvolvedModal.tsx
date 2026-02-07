
import React from 'react';

interface GetInvolvedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetInvolvedModal: React.FC<GetInvolvedModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const donateUrl = "https://secure.actblue.com/donate/quincy-for-congress-1";
  const amounts = [10, 25, 50, 100, 250];

  // Brand button style: Navy bg, Yellow text, Yellow shadow, black weight, uppercase
  const brandButtonClass = "bg-brand-navy text-brand-yellow font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-brand-navy text-center";

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto font-sans animate-in fade-in duration-500">
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 relative">
        
        {/* Close Button - Top Right of screen */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-50 text-brand-navy hover:text-brand-yellow transition-colors p-2"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8 md:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Content Area */}
        <div className="w-full max-w-[1600px] flex flex-col items-center px-4 mt-8 lg:mt-0">
          
          {/* Logo - Aligned left */}
          <div className="w-full flex justify-start mb-10 md:mb-14">
            <img 
              src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/quincy_logo-for-Light-Background.png" 
              alt="Quincy Bareebe Logo" 
              className="h-[70px] md:h-[110px] object-contain"
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-0 lg:gap-[54px] xl:gap-[70px]">
            {/* Left Column: Image - Increased width by 20px as requested */}
            <div className="w-full lg:w-[calc(48%+20px)] xl:w-[calc(45%+20px)] relative flex items-end">
               <div className="relative w-full h-full min-h-[400px] lg:min-h-[700px]">
                 <img 
                  src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/Square-scaled.jpg" 
                  alt="Quincy Bareebe" 
                  className="w-full h-full object-contain object-bottom"
                />
               </div>
            </div>

            {/* Right Column: Content - Adjusted to account for left-side growth */}
            <div className="w-full lg:w-[calc(52%-20px)] xl:w-[calc(55%-20px)] flex flex-col justify-between py-12 lg:py-4">
              <div className="max-w-2xl flex flex-col h-full">
                {/* Subheading with accent line - Entire line uniform large font */}
                <div className="mb-6 inline-block">
                  <h4 className="uppercase tracking-[0.2em] mb-3 whitespace-nowrap">
                    <span className="name-highlight text-brand-yellow">QUINCY BAREEBE</span>
                    <span className="name-highlight text-brand-navy ml-3">FOR CONGRESS</span>
                  </h4>
                  <div className="h-0.5 w-full bg-brand-navy opacity-40"></div>
                </div>

                {/* Main Heading - Updated text to align with campaign focus */}
                <h1 className="text-[1.3rem] md:text-[2.4rem] lg:text-[3.15rem] xl:text-[3.9rem] font-black text-brand-navy leading-[1] tracking-tighter mb-8 uppercase">
                  Join <span className="text-brand-yellow">Quincy</span> in protecting working families and seniors.
                </h1>

                {/* Subheading */}
                <p className="text-brand-navy uppercase tracking-[0.2em] mb-10 border-l-4 border-brand-yellow pl-5 leading-relaxed flex flex-wrap items-baseline">
                  <span className="name-highlight !leading-relaxed mr-4">Donate to send</span>
                  <span className="name-highlight text-brand-yellow !leading-relaxed mr-4">Quincy Bareebe</span>
                  <span className="name-highlight !leading-relaxed">to Congress!</span>
                </p>

                {/* Donation Amounts Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mb-12">
                  {amounts.map((amount) => (
                    <a
                      key={amount}
                      href={`${donateUrl}?amount=${amount}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${brandButtonClass} py-5 md:py-6 text-2xl md:text-4xl flex items-center justify-center h-full max-h-[100px]`}
                    >
                      ${amount}
                    </a>
                  ))}
                  <a
                    href={donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-brand-navy text-brand-navy py-5 md:py-6 text-center font-black text-xl md:text-3xl hover:bg-gray-50 transition-all uppercase tracking-widest flex items-center justify-center h-full max-h-[100px]"
                  >
                    Other
                  </a>
                </div>

                {/* Action Buttons Block - Continue Button Centered Under Grid */}
                <div className="flex flex-col items-center w-full mt-auto">
                  <button 
                    onClick={onClose}
                    className="text-lg md:text-xl font-black uppercase tracking-[0.2em] text-brand-navy hover:text-brand-yellow transition-all underline decoration-[3px] underline-offset-[8px]"
                  >
                    CONTINUE TO SITE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedModal;
