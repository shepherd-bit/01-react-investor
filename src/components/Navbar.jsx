import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const servicesItems = [
  'Portfolio Management',
  'Retirement Planning',
  'Tax Optimization',
  'Estate Planning',
  'Risk Assessment',
  'Wealth Preservation',
];

const caseStudiesItems = [
  'Early Retirement Success',
  'Real Estate Investment Growth',
  'Business Sale & Reinvestment',
  'Generational Wealth Transfer',
  'Market Volatility Recovery',
  'Sustainable & ESG Investing',
  'High-Net-Worth Divorce Settlement',
  'Executive Stock Option Strategy',
];

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const ctaRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tl.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.2 }
    )
      .fromTo(
        logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 0.95, x: 0 },
        '-=0.6'
      )
      .fromTo(
        linksRef.current?.children ? Array.from(linksRef.current.children) : [],
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, stagger: 0.08 },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1 },
        '-=0.4'
      );
  }, { scope: navRef });

  const handleMouseMove = (e) => {
    const btn = ctaRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    const btn = ctaRef.current;
    if (!btn) return;
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  const toggleMobileDropdown = (name) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 py-3 sm:px-6 sm:py-5 lg:px-10">
      <nav
        ref={navRef}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-[#0d1f3d]/70 px-4 py-2.5 sm:px-6 sm:py-3.5 backdrop-blur-md border border-white/15 shadow-2xl transition-all duration-300"
      >
        {/* Brand Logo */}
        <a
          href="#"
          ref={logoRef}
          className="flex items-center gap-2 group text-white focus:outline-none"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-sky-500 text-white font-black text-xs sm:text-sm tracking-widest transition-transform duration-300 group-hover:scale-105 shadow-md shadow-sky-500/30">
            ∞
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white/95 group-hover:text-white transition-colors">
            Capital<span className="text-sky-400">Core</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div
          ref={linksRef}
          className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs lg:text-sm font-medium text-white/80"
        >
          <a
            href="#home"
            className="hover:text-white transition-colors duration-200 relative group py-2"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#about"
            className="hover:text-white transition-colors duration-200 relative group py-2"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Services Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-white transition-colors duration-200 focus:outline-none">
              <span>Services</span>
              <HiChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
              <div className="w-56 rounded-2xl bg-[#0f284e]/95 border border-white/15 backdrop-blur-xl p-2 shadow-2xl space-y-1">
                {servicesItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="block px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-sky-500/20 rounded-xl transition-colors duration-150"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Case Studies Dropdown */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-white transition-colors duration-200 focus:outline-none">
              <span>Case Studies</span>
              <HiChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
              <div className="w-72 rounded-2xl bg-[#0f284e]/95 border border-white/15 backdrop-blur-xl p-2 shadow-2xl space-y-1 max-h-80 overflow-y-auto">
                {caseStudiesItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="block px-3 py-2 text-xs text-white/80 hover:text-white hover:bg-sky-500/20 rounded-xl transition-colors duration-150"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lighter Sky Blue Action Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            ref={ctaRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs lg:text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:bg-sky-400 hover:shadow-sky-400/40 active:scale-95"
          >
            <span>Book a call</span>
            <FiArrowUpRight className="text-sm sm:text-base" />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex items-center justify-center rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white md:hidden transition-colors"
          >
            {isOpen ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="mt-2 rounded-2xl bg-[#0f284e]/95 p-5 border border-white/15 backdrop-blur-xl md:hidden shadow-2xl flex flex-col gap-3 text-sm font-medium text-white/80 max-h-[80vh] overflow-y-auto">
          <a href="#home" onClick={() => setIsOpen(false)} className="py-1 hover:text-sky-300">
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)} className="py-1 hover:text-sky-300">
            About
          </a>

          {/* Mobile Accordion - Services */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('services')}
              className="flex w-full items-center justify-between py-1 text-white/80 hover:text-sky-300"
            >
              <span>Services</span>
              <HiChevronDown className={`transition-transform ${activeMobileDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {activeMobileDropdown === 'services' && (
              <div className="ml-3 mt-1 space-y-1 border-l border-white/15 pl-3">
                {servicesItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-1 text-xs text-white/60 hover:text-sky-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Accordion - Case Studies */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('caseStudies')}
              className="flex w-full items-center justify-between py-1 text-white/80 hover:text-sky-300"
            >
              <span>Case Studies</span>
              <HiChevronDown className={`transition-transform ${activeMobileDropdown === 'caseStudies' ? 'rotate-180' : ''}`} />
            </button>
            {activeMobileDropdown === 'caseStudies' && (
              <div className="ml-3 mt-1 space-y-1 border-l border-white/15 pl-3">
                {caseStudiesItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-1 text-xs text-white/60 hover:text-sky-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full flex items-center justify-center gap-2 rounded-full bg-sky-500 py-2.5 text-xs font-semibold text-white shadow-lg active:scale-95"
          >
            <span>Book a call</span>
            <FiArrowUpRight />
          </button>
        </div>
      )}
    </header>
  );
}