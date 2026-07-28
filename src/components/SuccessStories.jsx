import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiArrowRight, 
  FiArrowLeft, 
  FiTrendingUp, 
  FiX, 
  FiCheckCircle,  
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const storiesData = [
  {
    id: 'clearbit',
    company: 'Clearbit',
    logoImage: '/logos-n-cards/Clearbit.svg',
    bgImage: '/logos-n-cards/clearbit-card.jpg',
    metric: '+45% Net Portfolio Growth',
    headline: 'Achieved 45% net portfolio growth in 3 years through disciplined wealth management.',
    category: 'Fintech & B2B Data',
    duration: '3 Years',
    summary: 'Partnered with Clearbit to optimize treasury deployment and scale yield across high-liquidity capital accounts.',
    highlights: [
      'Automated cash management across multi-currency accounts',
      'Lowered risk exposure while maintaining liquid access to reserves',
      'Over $15M in additional capital efficiency generated'
    ]
  },
  {
    id: 'databricks',
    company: 'Databricks',
    logoImage: '/logos-n-cards/Databricks.svg',
    bgImage: '/logos-n-cards/databricks-cards.avif',
    metric: '5.8% Annualized Yield',
    headline: 'Created a reliable income stream with 5.8% annual yield and zero drawdowns over 24 months.',
    category: 'Enterprise AI & Data',
    duration: '24 Months',
    summary: 'Constructed an institutional fixed-income strategy tailored for late-stage enterprise expansion.',
    highlights: [
      'Zero drawdowns recorded over 8 consecutive quarters',
      'Diversified exposure across investment-grade corporate assets',
      'Tailored hedge structure during rate volatility'
    ]
  },
  {
    id: 'miro',
    company: 'Miro',
    logoImage: '/logos-n-cards/Miro.svg',
    bgImage: '/logos-n-cards/miro-card.webp',
    metric: '$120M Capital Deployed',
    headline: 'Scaled cross-border strategic investments across 4 major European tech markets.',
    category: 'Collaboration & SaaS',
    duration: '18 Months',
    summary: 'Facilitated strategic cross-border venture capital deployment with localized compliance frameworks.',
    highlights: [
      'Direct co-investment structuring across 4 regions',
      'Regulatory compliance managed across cross-border jurisdictions',
      'Enhanced institutional investor confidence and governance'
    ]
  },
  {
    id: 'docusign',
    company: 'DocuSign',
    logoImage: '/logos-n-cards/Docusign.svg',
    bgImage: '/logos-n-cards/docusign-card.jpg',
    metric: '3.2x Valuation Uplift',
    headline: 'Accelerated secondary liquidity and portfolio valuation with targeted institutional backing.',
    category: 'Enterprise SaaS',
    duration: '4 Years',
    summary: 'Designed secondary equity transaction solutions and risk-mitigated growth financing.',
    highlights: [
      'Structured liquidity options for key early stakeholders',
      'Optimized cap table for institutional follow-on rounds',
      'Maintained stable valuation trajectory through market cycles'
    ]
  },
  {
    id: 'monzo',
    company: 'Monzo',
    logoImage: '/logos-n-cards/Monzo.svg',
    bgImage: '/logos-n-cards/monzo-card.jpg',
    metric: '18.4% Outperformance',
    headline: 'Outperformed market benchmarks through high-conviction consumer banking allocations.',
    category: 'Neobanking & Consumer Fintech',
    duration: '2 Years',
    summary: 'Guided strategic growth equity allocations focusing on scalable digital banking infrastructure.',
    highlights: [
      '18.4% gain above traditional market benchmark indices',
      'Dynamic rebalancing during shifting interest rate environments',
      'Expanded access to exclusive private investment vehicles'
    ]
  },
  {
    id: 'zapier',
    company: 'Zapier',
    logoImage: '/logos-n-cards/Zapier.svg',
    bgImage: '/logos-n-cards/zapier-card.avif',
    metric: '$85M Yield Generated',
    headline: 'Engineered automated cash management strategies delivering sustained capital returns.',
    category: 'Workflow Automation',
    duration: '3 Years',
    summary: 'Implemented programmatic capital allocation to maximize short-term yield on operational capital.',
    highlights: [
      'Continuous automated rebalancing of treasury reserves',
      'Substantial return boost on non-operational balance sheet cash',
      'Seamless multi-asset integration with full audit transparency'
    ]
  },
  {
    id: 'hotjar',
    company: 'Hotjar',
    logoImage: '/logos-n-cards/Hotjar.svg',
    bgImage: '/logos-n-cards/hotjar-card.jpg',
    metric: '100% Capital Preservation',
    headline: 'Secured long-term capital preservation while achieving steady real estate yield.',
    category: 'Analytics & Product Insights',
    duration: '5 Years',
    summary: 'Constructed a resilient PropTech and real estate asset portfolio for inflation-hedged income.',
    highlights: [
      'Protected downside capital through prime asset placement',
      'Generated consistent quarterly dividends with low correlation',
      'Fully ESG-compliant real estate development portfolio'
    ]
  }
];

export default function SuccessStories() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const total = storiesData.length;

  // Auto Rotate Every 2 Seconds
  useEffect(() => {
    if (isPaused || selectedStory) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 15000);

    return () => clearInterval(interval);
  }, [isPaused, selectedStory, total]);

  useGSAP(
    () => {
      gsap.fromTo(
        '.stories-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Currently visible 2 cards
  const visibleStories = [
    storiesData[currentIndex],
    storiesData[(currentIndex + 1) % total]
  ];

  return (
    <section
      id="success-stories"
      ref={containerRef}
      className="relative w-full bg-slate-900 text-white py-10 sm:py-14 lg:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="stories-anim inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/20 px-3.5 py-1 text-xs font-semibold text-sky-400">
            <FiTrendingUp className="text-sm" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="stories-anim text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our Success Stories
          </h2>

          <p className="stories-anim text-sm sm:text-base text-slate-400 leading-relaxed">
            Expert advisors help you develop a solid strategy to grow your assets while minimizing risk and ensuring long-term returns.
          </p>
        </div>

        {/* CAROUSEL CONTROLS & PROGRESS INDICATOR */}
        <div className="stories-anim flex items-center justify-between mb-6 max-w-5xl mx-auto">
          {/* Progress Bar Dots */}
          <div className="flex items-center gap-2">
            {storiesData.map((s, idx) => {
              const isActive = idx === currentIndex || idx === (currentIndex + 1) % total;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8 bg-sky-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  title={s.company}
                />
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-slate-700 bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-all duration-200"
              aria-label="Previous Story"
            >
              <FiArrowLeft className="text-base" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-slate-700 bg-slate-800 text-slate-300 hover:bg-sky-500 hover:text-white transition-all duration-200"
              aria-label="Next Story"
            >
              <FiArrowRight className="text-base" />
            </button>
          </div>
        </div>

        {/* 2 DYNAMIC CARDS CONTAINER */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleStories.map((story) => (
            <div
              key={story.id}
              className="group relative flex flex-col sm:flex-row bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-sky-500/10 border border-slate-100"
            >
              {/* IMAGE & LOGO CONTAINER */}
              <div className="relative w-full sm:w-1/2 h-56 sm:h-auto overflow-hidden bg-slate-950 flex-shrink-0">
                {/* Background Card Image */}
                <img
                  src={story.bgImage}
                  alt={story.company}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
                />

                {/* Dark Gradient Overlay for Logo Clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Startup Logo Container (Overlayed at bottom) */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="h-8 max-w-[120px] flex items-center">
                    <img
                      src={story.logoImage}
                      alt={`${story.company} Logo`}
                      className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-90"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-sky-300 uppercase tracking-wider bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-sky-400/30">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* CARD TEXT CONTENT */}
              <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  {/* Metric Highlight Badge */}
                  <div className="inline-block bg-sky-50 text-sky-700 text-xs font-extrabold px-3 py-1 rounded-full mb-3 border border-sky-200">
                    {story.metric}
                  </div>

                  {/* Headline */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-sky-600 transition-colors">
                    {story.headline}
                  </h3>
                </div>

                {/* Read Case Study Button */}
                <div className="pt-4 border-t border-slate-100 mt-2">
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-sky-600 transition-colors group/btn"
                  >
                    <span>Read Case Study</span>
                    <FiArrowRight className="text-sm transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CASE STUDY DRAWER MODAL */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-white text-slate-900 h-full p-6 sm:p-10 shadow-2xl overflow-y-auto flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-6 max-w-[100px]">
                    <img
                      src={selectedStory.logoImage}
                      alt={selectedStory.company}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-400">| Case Study</span>
                </div>

                <button
                  onClick={() => setSelectedStory(null)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Title & Category */}
              <div className="mb-6">
                <span className="text-xs font-extrabold text-sky-600 uppercase tracking-widest">
                  {selectedStory.category}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1 mb-2">
                  {selectedStory.headline}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {selectedStory.summary}
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Impact</span>
                  <span className="text-sm sm:text-base font-black text-sky-600">{selectedStory.metric}</span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Time Horizon</span>
                  <span className="text-sm sm:text-base font-black text-slate-800">{selectedStory.duration}</span>
                </div>
              </div>

              {/* Key Deliverables & Highlights */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Strategic Execution Highlights:
                </h4>
                {selectedStory.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <FiCheckCircle className="text-sky-500 text-sm flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Modal Action */}
            <div className="pt-6 border-t border-slate-200">
              <button
                onClick={() => setSelectedStory(null)}
                className="w-full rounded-full bg-slate-900 py-3.5 text-xs font-bold text-white hover:bg-sky-500 transition-colors shadow-lg"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}