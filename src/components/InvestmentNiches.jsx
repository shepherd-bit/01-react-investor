import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiTrendingUp, 
  FiPieChart, 
  FiX, 
  FiArrowRight, 
  FiCpu, 
  FiZap, 
  FiActivity, 
  FiTruck, 
  FiDollarSign,
  FiHome
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const nichesData = [
  {
    id: 'fintech',
    title: 'Fintech & Digital Banking',
    shortDesc: 'Next-generation payment rails, decentralized finance architecture, and digital asset custody.',
    image: '/niches/fintech.jpg',
    icon: FiDollarSign,
    growth: '+28.4%',
    marketSize: '$340B',
    riskLevel: 'Moderate-High',
    horizon: '3-5 Years',
    thesis: 'Financial technology continues to unbundle traditional banking. Capital deployment targets scalable cross-border payment infrastructure and institutional-grade digital asset management.',
    keyPoints: [
      'Cross-border instant settlement networks',
      'API-first banking-as-a-service (BaaS) platforms',
      'Regulatory technology (RegTech) compliance engines'
    ]
  },
  {
    id: 'green-energy',
    title: 'Green Energy & Transition',
    shortDesc: 'Grid-scale battery storage, utility solar syndication, and clean hydrogen infrastructure.',
    image: '/niches/green-energy.jpg',
    icon: FiZap,
    growth: '+19.2%',
    marketSize: '$1.2T',
    riskLevel: 'Low-Moderate',
    horizon: '7-10 Years',
    thesis: 'Global decarbonization mandates create unprecedented long-term yield opportunities in utility-scale renewables and energy storage systems backed by government incentives.',
    keyPoints: [
      'Next-gen lithium & solid-state storage facilities',
      'Distributed microgrid management software',
      'Carbon credit verification & trading platforms'
    ]
  },
  {
    id: 'healthcare-tech',
    title: 'Healthcare Tech & Bio',
    shortDesc: 'AI-driven drug discovery, personalized genomic medicine, and remote diagnostic systems.',
    image: '/niches/healthcare.jpg',
    icon: FiActivity,
    growth: '+22.8%',
    marketSize: '$510B',
    riskLevel: 'Moderate',
    horizon: '5-8 Years',
    thesis: 'Converging healthcare with advanced machine learning accelerates trial phases and reduces cost-to-market for revolutionary therapies and preventive care.',
    keyPoints: [
      'Computational biology & target discovery algorithms',
      'Telehealth & continuous patient monitoring hardware',
      'Surgical robotics & minimally invasive systems'
    ]
  },
  {
    id: 'mobility',
    title: 'Mobility & Logistics',
    shortDesc: 'Autonomous fleet software, last-mile EV logistics, and smart port infrastructure.',
    image: '/niches/mobility.jpg',
    icon: FiTruck,
    growth: '+16.5%',
    marketSize: '$280B',
    riskLevel: 'Moderate',
    horizon: '4-6 Years',
    thesis: 'Supply chain friction demands automated, electrification-first logistics networks capable of operating with near-zero downtime and lower operational expenditures.',
    keyPoints: [
      'Autonomous yard automation & freight orchestration',
      'Commercial EV charging corridor development',
      'Predictive maintenance IoT sensor platforms'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Enterprise Automation',
    shortDesc: 'Generative AI infrastructure, industrial robotics, and intelligent process automation.',
    image: '/niches/ai.jpg',
    icon: FiCpu,
    growth: '+34.1%',
    marketSize: '$890B',
    riskLevel: 'High Growth',
    horizon: '2-5 Years',
    thesis: 'Enterprise productivity software is undergoing a foundational reset. Direct equity allocations target specialized LLM middleware and edge-computing silicon.',
    keyPoints: [
      'Domain-specific enterprise AI models',
      'Edge compute chip architectures & acceleration',
      'Autonomous robotic process automation (RPA)'
    ]
  },
  {
    id: 'proptech',
    title: 'Real Estate & PropTech',
    shortDesc: 'Smart urban infrastructure, tokenized real estate assets, and sustainable smart buildings.',
    image: '/niches/real-estate.jpg',
    icon: FiHome,
    growth: '+18.7%',
    marketSize: '$620B',
    riskLevel: 'Low-Moderate',
    horizon: '5-10 Years',
    thesis: 'Real estate technology simplifies asset liquidity, optimizes building energy performance, and introduces algorithmic property management across commercial sectors.',
    keyPoints: [
      'Fractional real estate tokenization platforms',
      'IoT smart building energy management systems',
      'Automated commercial leasing & underwriting software'
    ]
  }
];

export default function InvestmentNiches() {
  const containerRef = useRef(null);
  const featuredContentRef = useRef(null);
  const featuredImageRef = useRef(null);
  const [activeNiche, setActiveNiche] = useState(nichesData[0]);
  const [modalOpen, setModalOpen] = useState(false);

  useGSAP(
    () => {
      // Entrance Animation for Grid
      gsap.fromTo(
        '.niche-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  // Soft crossfade transition when active niche changes
  const handleSelectNiche = (niche) => {
    if (niche.id === activeNiche.id) return;

    gsap.to([featuredContentRef.current, featuredImageRef.current], {
      opacity: 0.3,
      duration: 0.2,
      ease: 'power1.out',
      onComplete: () => {
        setActiveNiche(niche);
        gsap.to([featuredContentRef.current, featuredImageRef.current], {
          opacity: 1,
          duration: 0.35,
          ease: 'power1.inOut',
        });
      },
    });
  };

  return (
    <section
      id="niches"
      ref={containerRef}
      className="relative w-full bg-white text-slate-900 py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-100/60 rounded-full blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase mb-3">
            Strategic Allocation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Where We Invest
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We focus on high-conviction megatrends driving long-term economic expansion. 
            Explore our core sector focus areas below.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Featured Card Spotlight */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 flex flex-col justify-end p-6 sm:p-10 border border-slate-200 group">
              
              {/* Background Image Container */}
              <div ref={featuredImageRef} className="absolute inset-0 z-0">
                <img
                  src={activeNiche.image}
                  alt={activeNiche.title}
                  className="h-full w-full object-cover object-center brightness-[0.55] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
              </div>

              {/* Spotlight Content */}
              <div ref={featuredContentRef} className="relative z-10 flex flex-col h-full justify-between">
                
                {/* Top Floating Glass Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <FiTrendingUp className="text-sky-400" />
                    <span>Growth: {activeNiche.growth}</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/15 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <FiPieChart className="text-emerald-400" />
                    <span>Market: {activeNiche.marketSize}</span>
                  </div>
                </div>

                {/* Bottom Spotlight Content */}
                <div className="mt-auto pt-10">
                  <span className="inline-block px-3 py-1 rounded-md bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-3">
                    Featured Sector
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
                    {activeNiche.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-lg">
                    {activeNiche.shortDesc}
                  </p>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 shadow-xl hover:bg-sky-400 hover:text-white transition-all duration-300 active:scale-95 group/btn"
                  >
                    <span>View details</span>
                    <FiArrowRight className="text-base transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT: Niche Selection Grid (Clean Light Cards with High-Contrast Active States) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {nichesData.map((item) => {
              const Icon = item.icon;
              const isActive = activeNiche.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectNiche(item)}
                  onMouseEnter={() => handleSelectNiche(item)}
                  className={`niche-card cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between bg-slate-50/80 text-slate-900 border ${
                    isActive
                      ? 'border-slate-900 bg-white shadow-2xl shadow-slate-900/10 scale-[1.03] z-10'
                      : 'border-slate-200/80 hover:border-slate-400 hover:bg-white hover:scale-[1.01]'
                  }`}
                >
                  <div>
                    <div
                      className={`h-11 w-11 rounded-xl flex items-center justify-center text-xl mb-4 transition-all ${
                        isActive
                          ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                          : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      <Icon />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold">
                    <span className="text-sky-600 font-bold">
                      {item.growth} Target
                    </span>
                    <span className="text-slate-400 font-normal">
                      Hover to view
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Slide-Over Drawer Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-xl bg-white text-slate-900 h-full p-6 sm:p-10 shadow-2xl overflow-y-auto flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300">
            <div>
              {/* Modal Close Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <FiPieChart />
                  <span>Investment Thesis</span>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Title & Image Banner */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                {activeNiche.title}
              </h3>

              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
                <img
                  src={activeNiche.image}
                  alt={activeNiche.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Key Metrics Strip */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-center">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Growth</div>
                  <div className="text-sm sm:text-base font-extrabold text-sky-600">{activeNiche.growth}</div>
                </div>
                <div className="border-x border-slate-200">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Risk Rating</div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-800">{activeNiche.riskLevel}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Horizon</div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-800">{activeNiche.horizon}</div>
                </div>
              </div>

              {/* Core Thesis Paragraph */}
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Executive Overview</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {activeNiche.thesis}
              </p>

              {/* Key Target Areas */}
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Core Sub-Sectors</h4>
              <ul className="space-y-2 mb-8">
                {activeNiche.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-sky-500 mt-1.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Modal CTA */}
            <div className="pt-6 border-t border-slate-200">
              <button
                onClick={() => setModalOpen(false)}
                className="w-full rounded-full bg-slate-900 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-sky-500 transition-colors shadow-lg active:scale-95"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}