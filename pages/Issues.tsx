import React from "react";
import { Link } from "react-router-dom";

const Issues: React.FC = () => {
  const fightingPoints = [
    {
      bold: "Put people over corporate greed",
      regular:
        " by capping prescription drug prices and health insurance premiums — so every family and senior can afford the care they need.",
    },
    {
      bold: "Invest in education",
      regular:
        " through universal pre-K, debt-free community college, and career training",
    },
    {
      bold: "Support small businesses and farms",
      regular:
        " with tax relief, land protections, and urban agriculture grants",
    },
    {
      bold: "Keep Pax River and Indian Head bases open",
      regular: " to support military readiness and local jobs",
    },
    {
      bold: "Protect federal workers’ jobs",
      regular: " from harmful budget cuts and government shutdowns",
    },
    {
      bold: "Stop Trump’s tariff hikes that raise prices for everyone",
      regular:
        " — rebuild supply chains and enact trade laws that help workers, not corporate insiders.",
    },
    {
      bold: "Increase affordable housing",
      regular:
        " by strengthening housing supply laws to stop Wall Street from hoarding housing and capping corporate rent gouging.",
    },
    {
      bold: "Reduce prices",
      regular:
        " by enforcing antitrust rules against price-fixing corporate monopolies in groceries and energy, delivering faster relief at the checkout and at the gas pump.",
    },
    {
      bold: "Lower electrical bills",
      regular:
        " by boosting clean energy incentives and grid upgrades and promoting solar, storage, and efficient transmission.",
    },
  ];

  return (
    <div className="animate-in fade-in duration-1000 overflow-x-hidden bg-white font-sans text-brand-navy">
      {/* SECTION 1: ISSUES HERO */}
      <section className="relative bg-brand-navy overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl text-white z-20 flex flex-col justify-center text-center lg:text-left pt-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold uppercase leading-[1.1] mb-6 md:mb-8 tracking-tight">
              A VISION FOR{" "}
              <span className="text-brand-yellow font-extrabold">OUR</span>{" "}
              COMMUNITY.
            </h1>
            <p className="content-body-text uppercase tracking-[0.1em] md:tracking-[0.15em] text-white mb-0 opacity-90 max-w-2xl mx-auto lg:mx-0 border-l-4 border-brand-yellow pl-6 text-left">
              <span className="text-brand-yellow font-bold">
                Quincy Bareebe
              </span>{" "}
              is ready to take on the tough fights to protect Maryland's
              families and federal workers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ISSUE BLOCKS */}
      <section className="bg-gray-50 py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24 md:space-y-32 lg:space-y-48">
            {/* Section 1: Delivering quality affordable health care for all */}
            <div
              id="protecting-families"
              className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center"
            >
              <div className="order-2 lg:order-1 space-y-6 md:space-y-10">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy uppercase leading-[1.1] tracking-tight relative z-10">
                  DELIVERING QUALITY AFFORDABLE HEALTH CARE FOR ALL
                </h3>
                <div className="content-body-text text-black leading-relaxed border-b-4 border-brand-yellow pb-8 md:pb-12 space-y-6">
                  <p>
                    As the founder and CEO of Royal Home Care and Royal Assisted
                    Living, Quincy Bareebe has spent years delivering hands-on
                    care to seniors and people with disabilities in our
                    community, employing more than 70 frontline health
                    professionals across Maryland. From helping seniors live
                    with dignity in assisted living to supporting families
                    caring for chronically ill loved ones at home, she has seen
                    up close how insurance rules, drug prices, and gaps in
                    Medicare can make the difference between stability and
                    crisis for working families. That real-world experience—not
                    think-tank theory—drives her commitment to guarantee
                    quality, affordable health care as a basic right, not a
                    privilege tied to zip code or income.
                  </p>
                  <p>
                    In Congress, Quincy will fight to protect and strengthen the
                    Affordable Care Act, close loopholes that let insurance
                    companies deny or delay needed care, and cap out-of-pocket
                    costs so no one has to choose between a prescription and the
                    rent. She will work to expand Medicare to cover dental,
                    vision, and hearing, which are essential for seniors to stay
                    healthy and independent, and push to give Medicare more
                    power to negotiate lower drug prices across the board.
                    Quincy will also support increased funding for home- and
                    community-based services, so seniors and people with chronic
                    conditions can receive care at home or in assisted living
                    settings like the ones she operates, instead of being forced
                    into more expensive institutional care.
                  </p>
                  <p>
                    Because she has managed both federal budgets and a health
                    care workforce, Quincy knows how to pay for these
                    improvements responsibly—by cracking down on pharmaceutical
                    price gouging, wasteful billing practices, and sweetheart
                    deals for big insurance companies. She will stand up to
                    lobbyists to put patients and providers ahead of corporate
                    profits, making sure that federal health dollars actually
                    reach the exam rooms, assisted living facilities, and home
                    care visits where they are needed most. For working families
                    and seniors who are tired of broken promises, Quincy Bareebe
                    offers something different: a health care champion who has
                    already been doing the work in our community and is ready to
                    scale that commitment nationwide.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="border-[8px] md:border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#e1bb23] lg:shadow-[32px_32px_0px_0px_#e1bb23] overflow-hidden h-[350px] md:h-[500px] lg:h-[650px]">
                  <img
                    src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/Protecting-our-families-as9-3807-1.jpg"
                    alt="Health Care"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Making life more affordable for Marylanders */}
            <div
              id="financial-stability"
              className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center"
            >
              <div className="relative order-1">
                <div className="border-[8px] md:border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#203365] lg:shadow-[32px_32px_0px_0px_#203365] overflow-hidden h-[350px] md:h-[500px] lg:h-[650px]">
                  <img
                    src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/Creating-financial-stability-AS9_4002-scaled.jpg"
                    alt="Making Life Affordable"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
              <div className="order-2 space-y-6 md:space-y-10">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy uppercase leading-[1.1] tracking-tight relative z-10">
                  MAKING LIFE MORE AFFORDABLE FOR MARYLANDERS
                </h3>
                <div className="content-body-text text-black leading-relaxed border-b-4 border-brand-yellow pb-8 md:pb-12 space-y-6">
                  <p>
                    Quincy Bareebe knows that when groceries, rent, and
                    prescription drugs go up but paychecks don’t, working
                    families and seniors are the first to feel the squeeze. As a
                    former Defense Department budget manager and local
                    small-business leader, she has balanced billion-dollar
                    federal ledgers and real-world payrolls, so she understands
                    both sides of the affordability crisis. In Congress, she
                    will fight to put more money back in the pockets of working
                    and middle-class families by expanding targeted tax breaks
                    for working parents, strengthening relief for seniors on
                    fixed incomes, and making sure federal policy finally favors
                    people who earn a paycheck—not corporations that game the
                    system.
                  </p>
                  <p>
                    To tackle rising costs head-on, Quincy will push to lower
                    everyday expenses families cannot avoid: capping
                    prescription drug and insulin prices, defending and
                    strengthening the Affordable Care Act so premiums and copays
                    stay affordable, and cracking down on price gouging that
                    drives up energy and utility bills. She will support smart
                    housing and transportation investments that stabilize rents
                    and cut commute times, so families spend less on gas and
                    have more time and money for their kids and aging parents.
                    For seniors, Quincy will champion intelligence measures that
                    protect retirement security, preserve Medicare and Social
                    Security, and create targeted relief programs so older
                    adults are never forced to choose between paying for heat,
                    food, or life-saving medications.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Building a stronger future by funding education and protecting our environment */}
            <div
              id="strong-future"
              className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center"
            >
              <div className="order-2 lg:order-1 space-y-6 md:space-y-10">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-navy uppercase leading-[1.1] tracking-tight relative z-10">
                  BUILDING A STRONGER FUTURE BY FUNDING EDUCATION AND PROTECTING
                  OUR ENVIRONMENT
                </h3>
                <div className="content-body-text text-black leading-relaxed border-b-4 border-brand-yellow pb-8 md:pb-12 space-y-6">
                  <p>
                    Quincy Bareebe will go to Congress determined to fully fund
                    public education—from universal pre-K through debt-free
                    community college—so every child in Maryland has a fair shot
                    at a good-paying career. She supports doubling Title I
                    funding for high-poverty schools, boosting teacher residency
                    stipends, and investing in STEM so classrooms are linked to
                    local opportunities at places like Pax River and union
                    apprenticeship programs. Quincy will work to pass a federal
                    College Promise plan for tuition-free community college and
                    expand Pell Grants to short-term credential and trade
                    programs, giving students and mid-career workers affordable
                    pathways into high-demand fields without being crushed by
                    debt.
                  </p>
                  <p>
                    Quincy also understands that Maryland’s economy and identity
                    are inseparable from the Chesapeake Bay and our local
                    environment, so she will fight for bold federal action to
                    protect them. She backs fully funding the Chesapeake
                    Resilience Fund to restore the Bay, strengthen wetlands and
                    living shorelines, and support farmers with
                    performance-based conservation grants that keep fields
                    productive and waters clean. In Congress, she will champion
                    investments in clean energy—like offshore wind capable of
                    powering hundreds of thousands of homes—and modern flood
                    mapping and insurance reforms, so coastal and riverfront
                    communities can withstand rising seas and stronger storms.
                    For Quincy, investing in great schools and safeguarding
                    Maryland’s environment are two sides of the same promise:
                    building a future where every child can learn, work, and
                    raise a family in a healthy, thriving community.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="border-[8px] md:border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#e1bb23] lg:shadow-[32px_32px_0px_0px_#e1bb23] overflow-hidden h-[350px] md:h-[500px] lg:h-[650px]">
                  <img
                    src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/Small-business-issues-AS9_3989-Cropped-scaled.png"
                    alt="Building a Stronger Future"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-40 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-brand-yellow/10 skew-x-12 transform translate-x-16"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 md:mb-24 lg:mb-32">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.1] tracking-tight">
              IN CONGRESS,{" "}
              <span className="text-brand-yellow font-extrabold">
                QUINCY BAREEBE
              </span>{" "}
              WILL FIGHT TO:
            </h2>
            <div className="h-2 w-32 bg-brand-yellow mx-auto mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {fightingPoints.map((point, idx) => (
              <div
                key={idx}
                className="group border-l-4 border-brand-yellow pl-6 py-6 hover:bg-white/5 transition-colors"
              >
                <p className="text-2xl md:text-3xl lg:text-[32px] leading-[1.3] uppercase tracking-tight transition-all">
                  <span className="font-black text-brand-yellow">
                    {point.bold}
                  </span>
                  <span className="font-medium text-white/90">
                    {point.regular}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-40 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="border-[12px] border-brand-navy shadow-[16px_16px_0px_0px_#e1bb23] md:shadow-[32px_32px_0px_0px_#e1bb23] overflow-hidden h-[300px] md:h-[500px]">
                <img
                  src="http://quincyforcongress.zahidyaftali.com/wp-content/uploads/2026/02/AS6_1621.png"
                  alt="Join Us"
                  className="w-full h-full object-cover block"
                  style={{ objectPosition: "center center" }}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-10 flex flex-col items-start text-left">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-brand-navy uppercase leading-[1.1] tracking-tight">
                JOIN THE{" "}
                <span className="text-brand-yellow font-extrabold">
                  MOVEMENT
                </span>{" "}
                FOR CHANGE.
              </h2>
              <p className="content-body-text text-brand-navy leading-relaxed uppercase tracking-tight">
                Our community deserves a representative who understands our
                struggles and has the expertise to deliver results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6 w-full">
                <Link
                  to="/take-action"
                  className="px-10 py-5 bg-brand-navy text-brand-yellow font-extrabold uppercase tracking-widest shadow-[6px_6px_0px_0px_#e1bb23] md:shadow-[8px_8px_0px_0px_#e1bb23] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center text-sm md:text-base"
                >
                  Get Involved
                </Link>
                <Link
                  to="/contact"
                  className="px-10 py-5 border-4 border-brand-navy text-brand-navy font-extrabold uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all text-center text-sm md:text-base"
                >
                  Reach Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Issues;
