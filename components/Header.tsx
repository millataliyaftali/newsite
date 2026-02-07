
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Meet Quincy', path: '/about' },
    { name: 'Issues', path: '/issues' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const donateUrl = "https://secure.actblue.com/donate/quincy-for-congress-1";

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 md:h-32">
          <Link to="/" className="flex items-center">
            <img src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/quincy_logo-for-Light-Background.png" alt="Quincy Bareebe Logo" className="h-20 md:h-24 object-contain" />
          </Link>
          <nav className="hidden lg:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-black uppercase tracking-widest transition-colors ${
                  isActive(link.path) ? 'text-brand-yellow' : 'text-brand-navy hover:text-brand-yellow'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-6">
              <a href={donateUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-brand-navy text-brand-yellow text-sm font-black uppercase tracking-widest shadow-lg hover:bg-opacity-90 transition-all border-2 border-brand-yellow">Donate</a>
              <Link to="/take-action" className="px-8 py-4 bg-brand-yellow text-brand-navy text-sm font-black uppercase tracking-widest shadow-lg hover:bg-white transition-all border-2 border-brand-navy">Get Involved</Link>
            </div>
          </nav>
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-navy hover:text-brand-yellow focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-navy border-t border-brand-yellow px-4 py-8 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className={`block px-3 py-3 text-xl font-black uppercase tracking-widest ${isActive(link.path) ? 'text-brand-yellow' : 'text-white'}`}>
              {link.name}
            </Link>
          ))}
          <div className="pt-4 space-y-4">
            <Link to="/take-action" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-4 py-4 bg-brand-yellow text-brand-navy font-black uppercase tracking-widest text-lg">Get Involved</Link>
            <a href={donateUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="block w-full text-center px-4 py-4 border-2 border-brand-yellow text-brand-yellow font-black uppercase tracking-widest text-lg">Donate Now</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
