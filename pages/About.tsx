
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000 overflow-x-hidden bg-white font-sans text-brand-navy">
      
      {/* SECTION 1: SPLIT HERO SECTION */}
      <section className="relative flex flex-col lg:flex-row items-stretch bg-brand-navy min-h-[500px] lg:h-[85vh] overflow-hidden">
        {/* Left Side: Text with Blue Background */}
        <div className="w-full lg:w-1/2 bg-brand-navy flex items-center py-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 z-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold uppercase leading-[1.1] mb-6 md:mb-8 tracking-tight text-white">
              <span className="text-brand-yellow">QUINCY BAREEBE</span> : FROM KFC DISHWASHER TO SUCCESSFUL HEALTH CARE CEO.
            </h1>
            <p className="uppercase tracking-[0.1em] md:tracking-[0.15em] text-white mb-0 max-w-2xl border-l-4 border-brand-yellow pl-6 text-left text-xl md:text-2xl lg:text-[30px] font-extrabold leading-[1.2]">
              <span className="text-brand-yellow">Quincy</span> knows what it means to struggle and knows how to succeed.
            </p>
          </div>
        </div>

        {/* Right Side: Image Only */}
        <div className="w-full lg:w-1/2 relative bg-white">
          <div 
            className="w-full h-[400px] md:h-[500px] lg:h-full bg-cover bg-no-repeat bg-center"
            style={{ 
              backgroundImage: 'url("http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/meet-quincy-header-page-Test.png")',
              backgroundPosition: 'center center'
            }}
          ></div>
        </div>
      </section>

      {/* SECTION 4: JOURNEY BLOCKS (3rd to 6th sections) */}
      <section className="bg-gray-50 py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24 md:space-y-32 lg:space-y-48">
            {/* Journey Block 1 (3rd Section) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 flex flex-col items-start text-left px-4 md:px-10">
                <div className="about-body-text text-brand-navy border-b-4 border-brand-yellow pb-8 md:pb-12 space-y-6">
                  <p>The daughter of working-class parents, Quincy paid her way through Northeastern University by pulling late-night shifts as a KFC dishwasher and private home health aide. <span className="text-brand-yellow font-bold">Quincy</span> knows all too well the challenges people face just to keep a roof over their heads.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="border-[8px] md:border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#e1bb23] lg:shadow-[32px_32px_0px_0px_#e1bb23] overflow-hidden h-[240px] md:h-[360px] lg:h-[450px]">
                  <img src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/AS6_1745-scaled.jpg" alt="Quincy Bareebe Roots" className="w-full h-full object-cover block" />
                </div>
              </div>
            </div>

            {/* Journey Block 2 (4th Section) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
              <div className="relative order-1">
                <div className="border-[8px] md:border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#203365] lg:shadow-[32px_32px_0px_0px_#203365] overflow-hidden h-[240px] md:h-[360px] lg:h-[450px]">
                  <img src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/AS9_2919-scaled.jpg" alt="Quincy Bareebe Expertise" className="w-full h-full object-cover block" />
                </div>
              </div>
              <div className="order-2 flex flex-col items-start text-left px-4 md:px-10">
                <div className="about-body-text text-brand-navy border-b-4 border-brand-yellow pb-8 md:pb-12 space-y-6">
                  <p>Instead of leaving those experiences behind, <span className="text-brand-yellow font-bold">Quincy</span> built on them. She became an auditor at KPMG, helping state governments navigate complex financial decisions. She managed multi-billion-dollar budgets at the Department of Defense, ensuring our tax dollars were spent wisely. She is the founder and CEO of a successful home care business that employs 70 professionals who provide high-quality services to seniors and children with chronic diseases.</p>
                </div>
              </div>
            </div>

            {/* Journey Block 3 (5th Section) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1 flex flex-col items-start text-left px-4 md:px-10">
                <div className="about-body-text text-brand-navy border-b-4 border-brand-yellow pb-8 md:pb-12 space-y-6">
                  <p><span className="text-brand-yellow font-bold">Quincy</span> has signed both sides of a paycheck, navigated payroll and regulatory requirements, and consistently delivered results for her residents and staff when the system fell short. Now she’s running for Congress with the same determination and compassion she brought to her residents: listening more than she talks, cutting through red tape, and fighting for fair pay, lower costs, while providing the best care for every family.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="border-[8px] md:border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#e1bb23] lg:shadow-[32px_32px_0px_0px_#e1bb23] overflow-hidden h-[240px] md:h-[360px] lg:h-[450px]">
                  <img src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/01/AS9_1868-scaled.jpg" alt="Quincy Bareebe Results" className="w-full h-full object-cover block" />
                </div>
              </div>
            </div>

            {/* Journey Block 4 (6th Section) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
              <div className="relative order-1">
                <div className="border-[8px] md:border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#203365] lg:shadow-[32px_32px_0px_0px_#203365] overflow-hidden h-[240px] md:h-[360px] lg:h-[450px]">
                  <img src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/QB-with-woman-at-park-with-kids-playing.png" alt="Quincy Bareebe neighbor" className="w-full h-full object-cover block" />
                </div>
              </div>
              <div className="order-2 flex flex-col items-start text-left px-4 md:px-10">
                <div className="about-body-text text-brand-navy border-b-4 border-brand-yellow pb-8 md:pb-12 space-y-6">
                  <p>A wife, mother of four, small-business owner, and your neighbor, <span className="text-brand-yellow font-bold">Quincy</span> lives in Odenton, Maryland, with her husband and children. In Congress, she will bring real-world experience, financial expertise, and a caregiver’s heart to the decisions that shape the future of our families.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN US SECTION */}
      <section className="bg-white py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
                <div className="border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#e1bb23] md:shadow-[32px_32px_0px_0px_#e1bb23] overflow-hidden h-[320px] md:h-[520px]">
                  <img src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/AS6_1621.png" alt="Join Us" className="w-full h-full object-cover block" style={{ objectPosition: 'center center' }} />
                </div>
            </div>
            <div className="order-1 lg:order-2 space-y-10 flex flex-col items-start">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy uppercase leading-[1.1] tracking-tight text-left">VOTE FOR <span className="text-brand-yellow font-extrabold">CHANGE</span></h2>
              <p className="about-body-text text-brand-navy leading-relaxed uppercase tracking-tight">Explore <span className="text-brand-yellow font-bold">Quincy</span>'s full platform and join our grassroots movement.</p>
              <div className="flex flex-col sm:flex-row justify-start gap-4 md:gap-6 w-full">
                <Link to="/issues" className="px-10 py-5 bg-brand-navy text-brand-yellow font-extrabold uppercase tracking-widest shadow-[6px_6px_0px_0px_#e1bb23] md:shadow-[8px_8px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center text-sm md:text-base">Issues</Link>
                <Link to="/take-action" className="px-10 py-5 border-4 border-brand-navy text-brand-navy font-extrabold uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all text-center text-sm md:text-base">Get Involved</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
