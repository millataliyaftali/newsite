
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const donateUrl = "https://secure.actblue.com/donate/quincy-for-congress-1";
  
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 border-t-[12px] border-brand-yellow">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <img src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/quincy_logo-for-Dark-Background.png" alt="Quincy Bareebe Logo" className="h-20 md:h-28 lg:h-36 mb-8 object-contain" />
            <p className="text-gray-200 text-sm md:text-lg font-medium tracking-wide leading-relaxed max-w-sm">
              Fresh, energetic leadership to protect Maryland's families and build a stronger, more equitable future for the 5th District.
            </p>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <div className="mb-6 md:mb-10 inline-block md:block">
              <h4 className="text-brand-yellow font-extrabold uppercase tracking-[0.3em] text-[11px] md:text-sm mb-2">Campaign</h4>
              <div className="h-1 w-16 md:w-20 bg-brand-yellow mx-auto md:mx-0"></div>
            </div>
            <ul className="space-y-4 md:space-y-6 text-sm md:text-lg font-bold uppercase tracking-widest">
              <li><Link to="/" className="hover:text-brand-yellow transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">Meet Quincy</Link></li>
              <li><Link to="/issues" className="hover:text-brand-yellow transition-colors">Issues</Link></li>
              <li><Link to="/take-action" className="hover:text-brand-yellow transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact Us</Link></li>
              <li><a href={donateUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-yellow transition-colors">Donate</a></li>
              <li><Link to="/privacy" className="hover:text-brand-yellow transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4 text-center md:text-left">
            <div className="mb-6 md:mb-10 inline-block md:block">
              <h4 className="text-brand-yellow font-extrabold uppercase tracking-[0.3em] text-[11px] md:text-sm mb-2">Get In Touch</h4>
              <div className="h-1 w-20 md:w-28 bg-brand-yellow mx-auto md:mx-0"></div>
            </div>
            <div className="mb-8 md:mb-10">
              <a href="mailto:info@quincyforcongress.com" className="text-lg md:text-xl font-extrabold mb-1 md:mb-2 tracking-tighter italic block hover:text-brand-yellow transition-colors">Click Here to email the Campaign</a>
              <p className="text-lg md:text-xl font-extrabold mb-6 md:mb-8 tracking-tighter">443-741-0604</p>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 w-full justify-center">
            <span className="text-[10px] md:text-[12px] font-extrabold uppercase tracking-widest text-gray-400">&copy; {new Date().getFullYear()} Quincy for Congress.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
