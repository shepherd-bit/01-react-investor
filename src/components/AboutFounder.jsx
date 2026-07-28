import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiBriefcase, FiAward, FiCheckCircle, FiGlobe } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

// Array of 10 partner logo placeholders
const partnerLogos = Array.from(
  { length: 10 },
  (_, i) => `/Partners/partner${i === 0 ? '' : i + 1}.png`
);

export default function AboutFounder() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const cardGridRef = useRef(null);

  const countProjectsRef = useRef(null);
  const countPartnersRef = useRef(null);
  const countYearsRef = useRef(null);

  useGSAP(
    () => {
      // 1. Header Fade & Slide Up on Scroll
      gsap.fromTo(
        [titleRef.current, bioRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );

      // 2. Cards Stagger Reveal
      if (cardGridRef.current?.children) {
        gsap.fromTo(
          Array.from(cardGridRef.current.children),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardGridRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // 3. ScrollTrigger Counter Animations
      const animateCounter = (ref, targetValue) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetValue,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
          onUpdate: () => {
            if (ref.current) {
              ref.current.innerText = `${Math.floor(obj.val)}+`;
            }
          },
        });
      };

      animateCounter(countProjectsRef, 200);
      animateCounter(countPartnersRef, 48);
      animateCounter(countYearsRef, 17);
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full bg-slate-50 text-slate-900 py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase mb-3">
            Leadership & Vision
          </span>
          <h2
            ref={titleRef}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            About Founder
          </h2>
          <p
            ref={bioRef}
            className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8"
          >
            With two decades of global experience advising startups, family offices, and institutions,{' '}
            <strong className="text-slate-900 font-semibold">Jonathan Blackwell</strong> combines
            Swiss financial discipline with Silicon Valley foresight. From Zurich to Singapore, our
            mission remains constant: guiding capital toward innovation that matters.
          </p>

          <button className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm active:scale-95">
            <span>More about us</span>
            <FiArrowRight className="text-base" />
          </button>
        </div>

        {/* Founder Bio Card & Interactive Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Founder Profile Spotlight Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-200/50 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold text-xl">
                  <FiGlobe />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Jonathan Blackwell</h3>
                  <p className="text-xs text-slate-500 font-medium">Founder & Managing Director</p>
                </div>
              </div>

              {/* Founder Image Container Placeholder */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6 relative">
                <img
                  src="/founder.jpg"
                  alt="Jonathan Blackwell - Founder"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-600 italic border-l-2 border-sky-500 pl-4 py-1">
                "True wealth preservation requires balancing rigorous risk controls with forward-thinking innovation."
              </blockquote>
            </div>
          </div>

          {/* 3 Metric Cards Grid */}
          <div ref={cardGridRef} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Projects Done */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 text-lg">
                  <FiBriefcase />
                </div>
                <div
                  ref={countProjectsRef}
                  className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2"
                >
                  0+
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-3">Projects Done</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  Delivering non-traditional investment opportunities and a direct gateway to the ventures shaping tomorrow's economic landscape.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every portfolio allocation undergoes deep liquidity analysis, risk modeling, and institutional audit standards.
                </p>
              </div>
            </div>

            {/* Card 2: Trusted Partners (With Image Logo Marquee) */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="h-10 w-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 text-lg">
                  <FiAward />
                </div>
                <div
                  ref={countPartnersRef}
                  className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2"
                >
                  0+
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-3">Trusted Partners</h4>

                {/* Embedded Logo Image Carousel Container */}
                <div className="my-4 overflow-hidden rounded-xl bg-slate-50 border border-slate-200/60 p-2">
                <div className="flex gap-3 animate-marquee whitespace-nowrap">
                    {partnerLogos.concat(partnerLogos).map((logoPath, idx) => (
                    <div
                        key={idx}
                        className="h-8 w-16 bg-white border border-slate-200 rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center p-1"
                    >
                        <img
                        src={logoPath}
                        alt={`Partner Logo ${(idx % 10) + 1}`}
                        className="h-full w-full object-contain"
                        />
                    </div>
                    ))}
                </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  Collaborating with top-tier financial institutions, global VC funds, and private equity firms worldwide.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building strong syndicates that provide our clients exclusive deal flow access and co-investment rights.
                </p>
              </div>
            </div>

            {/* Card 3: Years Experience */}
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 text-lg">
                  <FiCheckCircle />
                </div>
                <div
                  ref={countYearsRef}
                  className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2"
                >
                  0+
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-3">Years Experience</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  Two decades of proven discipline and navigating volatile market cycles across major global financial hubs.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Providing steadfast fiduciary guidance tailored to high-net-worth individuals, tech founders, and family offices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}