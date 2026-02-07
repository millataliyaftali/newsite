
import React from 'react';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const donateUrl = "https://secure.actblue.com/donate/quincy-for-congress-1";
  const amounts = [10, 25, 50, 100, 250];

  // Primary brand button class for consistency
  const brandButtonClass = "bg-brand-navy text-brand-yellow font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-brand-navy text-center";

  return (
    <div className="fixed inset-0 z-[100] bg-[#f4f7fa] overflow-y-auto font-sans animate-in fade-in duration-500">
      <div className="min-h-screen w-full flex flex-col items-center justify-between p-4 md:p-8 lg:p-12">
        
        {/* Top Header: Logo - Increased size further */}
        <div className="w-full max-w-[1400px] flex justify-start mb-8 lg:mb-12">
          <img 
            src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/quincy_logo-for-Light-Background.png" 
            alt="Quincy Bareebe Logo" 
            className="h-24 md:h-36 lg:h-44 object-contain"
          />
        </div>

        {/* Main Content Area: Two Columns responsive card */}
        <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center bg-white shadow-2xl overflow-hidden mb-12 border-4 border-brand-navy">
          
          {/* Left Side: Candidate Portrait (Force Square) */}
          <div className="w-full lg:w-1/2 relative aspect-square overflow-hidden bg-gray-100">
            <img 
              src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/Square-scaled.jpg" 
              alt="Quincy Bareebe" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right Side: Action Area */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <div className="max-w-xl w-full mx-auto">
              <h4 className="font-black uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4 border-b border-gray-100 pb-2">
                <span className="text-brand-yellow">QUINCY BAREEBE</span> <span className="text-brand-navy">FOR CONGRESS</span>
              </h4>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-navy leading-[1.1] tracking-tighter mb-6 uppercase">
                Join the fight to stop Trump’s attacks on our families.
              </h1>

              <p className="text-brand-navy font-bold uppercase tracking-widest mb-8 text-sm md:text-base italic border-l-4 border-brand-navy pl-4">
                Donate to send <span className="text-brand-yellow">Quincy Bareebe</span> to Congress!
              </p>

              {/* Donation Amount Grid - Matching Brand Button Style */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 mb-10 pr-2 pb-2">
                {amounts.map((amount) => (
                  <a
                    key={amount}
                    href={`${donateUrl}?amount=${amount}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${brandButtonClass} py-4 md:py-5 text-xl md:text-2xl`}
                  >
                    ${amount}
                  </a>
                ))}
                <a
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-brand-navy text-brand-navy py-4 md:py-5 text-center font-black text-lg md:text-xl hover:bg-gray-50 transition-all uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(32,51,101,0.1)]"
                >
                  Other
                </a>
              </div>
              
              <div className="w-full bg-gray-50 p-4 border border-gray-100">
                <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center leading-relaxed">
                  Paid for by Quincy for Congress. Contributions or gifts to Quincy for Congress are not tax deductible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer: Brand-Matched Continue Button */}
        <div className="w-full flex justify-center pb-12 lg:pb-16">
          <button 
            onClick={onClose}
            className={`${brandButtonClass} px-12 py-5 text-lg md:text-xl min-w-[300px] shadow-[8px_8px_0px_0px_#e1bb23]`}
          >
            CONTINUE TO SITE
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;
