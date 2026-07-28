import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiPlay, 
  FiArrowUpRight, 
  FiX, 
  FiTv, 
  FiAward, 
  FiUsers, 
  FiGlobe 
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

// 6 Featured Media & Keynote Platforms
const pressLogos = [
  { name: 'TEDx', logo: '/featured-logos/ted-x-logo.png' },
  { name: 'Forbes', logo: '/featured-logos/forbes_logo.png' },
  { name: 'Bloomberg', logo: '/featured-logos/Bloomberg_Logo.png' },
  { name: 'Financial Times', logo: '/featured-logos/financial_times_.svg' },
  { name: 'TechCrunch', logo: '/featured-logos/techcrunch--logo.webp' },
  { name: 'Wall Street Journal', logo: '/featured-logos/Wall-Street-Journal.png' },
];

const mediaHighlights = [
  {
    id: 'tedx-talk',
    outlet: 'TEDx Stage',
    logo: '/tedx-thumbnail.jpg',
    type: 'Keynote Speech',
    title: 'The Next Decade of Venture Capital & Generative Economy',
    quote: 'Democratizing access to high-growth private equity requires a fundamental shift in risk modeling and transparency.',
    date: 'March 2026',
    duration: '18 min watch',
    thumbnail: '/tedx-thumbnail.jpg',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with your video URL
  },
  {
    id: 'forbes-feature',
    outlet: 'Forbes',
    logo: '/logos/press-forbes.svg',
    type: 'Cover Feature',
    title: 'How CapitalCore Is Redefining Institutional Asset Allocation',
    quote: 'A rare example of a venture firm blending algorithmic risk hedging with high-conviction megatrend investments.',
    date: 'January 2026',
    linkText: 'Read Article'
  },
  {
    id: 'bloomberg-summit',
    outlet: 'Bloomberg Markets',
    logo: '/logos/press-bloomberg.svg',
    type: 'Panel Keynote',
    title: 'Navigating Tech Liquidity & Secondary Market Trends',
    quote: 'Structured secondary liquidity options are becoming essential for maintaining stability in late-stage valuations.',
    date: 'November 2025',
    linkText: 'View Summit Highlights'
  }
];

export default function Features() {
  const containerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.features-anim',
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

  return (
    <section
      id="as-seen-in"
      ref={containerRef}
      className="relative w-full bg-slate-950 text-white py-10 sm:py-14 lg:py-20 overflow-hidden border-t border-slate-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="features-anim inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 text-xs font-semibold text-amber-400">
            <FiAward className="text-sm" />
            <span>Global Recognition</span>
          </div>

          <h2 className="features-anim text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Featured on Global Stages & Leading Media
          </h2>

          <p className="features-anim text-sm sm:text-base text-slate-400 leading-relaxed">
            Sharing future-forward investment insights across world-renowned platforms, keynote stages, and tier-1 financial publications.
          </p>
        </div>

        {/* 6 MONOCHROME PRESS LOGOS BAR */}
        <div className="features-anim mb-12 py-6 border-y border-slate-900">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
            {pressLogos.map((p) => (
              <div
                key={p.name}
                className="h-8 max-w-[120px] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={p.logo}
                  alt={`${p.name} Logo`}
                  className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED KEYNOTE & PRESS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* LEFT: SPOTLIGHT STAGE TALK (7 Cols) */}
          <div className="features-anim lg:col-span-7 bg-slate-900/80 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  {mediaHighlights[0].type}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {mediaHighlights[0].duration}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug group-hover:text-amber-300 transition-colors">
                {mediaHighlights[0].title}
              </h3>

              <blockquote className="text-sm text-slate-300 italic border-l-2 border-amber-400/50 pl-4 py-1">
                "{mediaHighlights[0].quote}"
              </blockquote>
            </div>

            {/* VIDEO THUMBNAIL CONTAINER */}
            <div className="relative mt-6 rounded-2xl overflow-hidden bg-slate-950 h-56 sm:h-64 border border-slate-800">
              <img
                src={mediaHighlights[0].thumbnail}
                alt={mediaHighlights[0].title}
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40" />

              {/* Play Button Overlay */}
              <button
                onClick={() => setActiveVideo(mediaHighlights[0])}
                className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white"
                aria-label="Watch Keynote"
              >
                <FiPlay className="text-2xl ml-1" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 font-semibold bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                <span className="flex items-center gap-1.5">
                  <FiTv className="text-amber-400" /> {mediaHighlights[0].outlet}
                </span>
                <span>{mediaHighlights[0].date}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: PRESS ARTICLES SIDE LIST (5 Cols) */}
          <div className="features-anim lg:col-span-5 space-y-6 flex flex-col justify-between">
            {mediaHighlights.slice(1).map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/60 rounded-3xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-6 max-w-[100px] flex items-center">
                      <img
                        src={item.logo}
                        alt={item.outlet}
                        className="max-h-full object-contain filter brightness-0 invert opacity-80"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-800 px-2.5 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>{item.linkText}</span>
                  <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* MEDIA METRICS BANNER */}
        <div className="features-anim bg-slate-900/40 rounded-2xl border border-slate-800 p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2 text-amber-400 text-lg font-bold">
              <FiTv />
              <span className="text-2xl font-black text-white">50+</span>
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Global Keynotes Delivered</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2 text-amber-400 text-lg font-bold">
              <FiUsers />
              <span className="text-2xl font-black text-white">2.5M+</span>
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cumulative Talk Views</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2 text-amber-400 text-lg font-bold">
              <FiGlobe />
              <span className="text-2xl font-black text-white">15+</span>
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tier-1 Media Features</p>
          </div>
        </div>

      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-800 p-4 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <h3 className="text-sm font-bold text-white truncate pr-4">
                {activeVideo.outlet}: {activeVideo.title}
              </h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}