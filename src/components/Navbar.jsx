import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const ctaRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // GSAP Entrance & Magnetic Effects
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    // Initial Navbar Drop & Fade In
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

  // Magnetic Hover Effect Handler for CTA Button
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 py-3 sm:px-6 sm:py-5 lg:px-10">
      <nav
        ref={navRef}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-[#031024]/75 px-4 py-2.5 sm:px-6 sm:py-3.5 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300"
      >
        {/* Brand Logo */}
        <a
          href="#"
          ref={logoRef}
          className="flex items-center gap-2 group text-white focus:outline-none"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-blue-600 text-white font-black text-xs sm:text-sm tracking-widest transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-500/20">
            ∞
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
            Capital<span className="text-blue-500">Core</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div
          ref={linksRef}
          className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs lg:text-sm font-medium text-white/70"
        >
          {['Home', 'About', 'Niches', 'Features', 'Case Studies'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="hover:text-white transition-colors duration-200 relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            ref={ctaRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs lg:text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-95"
          >
            <span>Book a call</span>
            <FiArrowUpRight className="text-sm sm:text-base" />
          </button>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex items-center justify-center rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white md:hidden transition-colors"
          >
            {isOpen ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Aggressive Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="mt-2 rounded-2xl bg-[#031024]/95 p-5 border border-white/10 backdrop-blur-xl md:hidden shadow-2xl flex flex-col gap-4 text-center">
          <div className="flex flex-col gap-3 text-sm font-medium text-white/80">
            {['Home', 'About', 'Niches', 'Features', 'Case Studies'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsOpen(false)}
                className="py-1.5 hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-blue-600 py-2.5 text-xs font-semibold text-white shadow-lg active:scale-95"
          >
            <span>Book a call</span>
            <FiArrowUpRight />
          </button>
        </div>
      )}
    </header>
  );
}