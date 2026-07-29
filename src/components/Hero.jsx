import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiArrowUpRight, FiTrendingUp, FiShield } from 'react-icons/fi';

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const pillRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const heroImageRef = useRef(null);
  const floatBadge1Ref = useRef(null);
  const floatBadge2Ref = useRef(null);
  const counterRef = useRef(null);

  // Array for the 15 trusted client avatars
  const trustedAvatars = Array.from(
  { length: 15 },
  (_, i) => `./client-avatars/avatar${i + 1}.jpg`
);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      // 1. Text & Call-to-Actions Stagger Reveal
      tl.fromTo(pillRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.3 })
        .fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.6')
        .fromTo(subtextRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0 }, '-=0.7')
        .fromTo(ctaGroupRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.6')
        .fromTo(
          imageWrapperRef.current,
          { opacity: 0, scale: 0.95, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2 },
          '-=0.8'
        );

      // 2. Animated Counter (0 to 125,000)
      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: 125,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = `${Math.floor(counterObj.val)}k+`;
          }
        },
      });

      // 3. Ambient Floating Motion for UI Badges
      gsap.to(floatBadge1Ref.current, {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
      });

      gsap.to(floatBadge2Ref.current, {
        y: 12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.easeInOut',
        delay: 0.5,
      });
    },
    { scope: containerRef }
  );

  // Mouse move parallax effect on main graphic cutout
  const handleMouseMove = (e) => {
    if (!imageWrapperRef.current || !heroImageRef.current) return;
    const { left, top, width, height } = imageWrapperRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    gsap.to(heroImageRef.current, {
      x: x * 15,
      y: y * 15,
      rotationY: x * 5,
      rotationX: -y * 5,
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  const handleMouseLeave = () => {
    if (!heroImageRef.current) return;
    gsap.to(heroImageRef.current, {
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Radial Glow Spheres */}
      <div className="absolute top-1/4 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action Content */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Top Pill Tag */}
            <div
              ref={pillRef}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs sm:text-sm font-medium mb-6 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Financial Freedom Starts Here</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
            >
              Secure Your <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Financial Future
              </span> <br />
              with Confidence
            </h1>

            {/* Subtitle */}
            <p
              ref={subtextRef}
              className="max-w-xl text-sm sm:text-base md:text-lg text-white/70 font-normal leading-relaxed mb-8"
            >
              We empower individuals, families, and businesses with tailored financial strategies that grow wealth, mitigate risks, and preserve generational prosperity.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaGroupRef}
              className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10 sm:mb-12"
            >
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-sky-500/25 hover:bg-sky-400 hover:shadow-sky-400/35 transition-all active:scale-95">
                <span>Request Consultation</span>
                <FiArrowUpRight className="text-base sm:text-lg" />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-all active:scale-95">
                <span>View Portfolio</span>
              </button>
            </div>

            {/* Trusted By Ticker Bar */}
            <div className="w-full pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                {/* Infinite Carousel Container */}
                    <div className="flex overflow-hidden w-36 sm:w-44 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md">
                    <div className="flex gap-2 animate-marquee whitespace-nowrap">
                        {trustedAvatars.map((srcPath, index) => (
                        <div
                            key={index}
                            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full overflow-hidden bg-slate-800 border border-white/20 flex-shrink-0"
                        >
                            <img
                            src={srcPath}
                            alt={`Client Avatar ${index + 1}`}
                            className="h-full w-full object-cover"
                            />
                        </div>
                        ))}
                    </div>
                    </div>

                <div className="text-left">
                  <div
                    ref={counterRef}
                    className="text-base sm:text-lg font-bold text-white tracking-tight leading-none"
                  >
                    0k+
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/60 font-medium">
                    Satisfied Customers
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Graphic & Cutout Image */}
          <div
            ref={imageWrapperRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0 perspective-1000"
          >
            {/* Soft Ambient Radial Backdrop for Graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-blue-600/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            {/* Floating Live Badge 1 (Top Left) */}
            <div
              ref={floatBadge1Ref}
              className="absolute top-4 -left-2 sm:-left-6 z-20 flex items-center gap-2.5 rounded-2xl bg-[#0f284e]/90 border border-white/15 p-3 sm:p-3.5 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <FiTrendingUp className="text-base sm:text-lg" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-white/60 font-medium">Portfolio Growth</div>
                <div className="text-xs sm:text-sm font-bold text-white">+24.8% ROI</div>
              </div>
            </div>

            {/* Floating Live Badge 2 (Bottom Right) */}
            <div
              ref={floatBadge2Ref}
              className="absolute bottom-6 -right-2 sm:-right-6 z-20 flex items-center gap-2.5 rounded-2xl bg-[#0f284e]/90 border border-white/15 p-3 sm:p-3.5 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                <FiShield className="text-base sm:text-lg" />
              </div>
              <div>
                <div className="text-[10px] sm:text-xs text-white/60 font-medium">Asset Protection</div>
                <div className="text-xs sm:text-sm font-bold text-white">100% Secured</div>
              </div>
            </div>

            {/* Main Cutout Hero Image Frame */}
            <div
              ref={heroImageRef}
              className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0d1f3d]/60 backdrop-blur-sm"
            >
              {/* Empty Hero Image Container Placeholder */}
              <img
                src="./hero-3.jpg"
                alt="Financial Advisor Hero Cutout"
                className="h-full w-full object-cover object-center"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}