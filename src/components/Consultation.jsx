import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiCalendar, 
  FiClock, 
  FiShield, 
  FiCheckCircle, 
  FiArrowRight, 
  FiX, 
  FiUserCheck, 
  FiTrendingUp, 
  FiLock 
} from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export default function Consultation() {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    goal: 'Portfolio Growth',
    capital: '$1M - $5M',
    name: '',
    email: '',
    date: ''
  });

  useGSAP(
    () => {
      // Background Parallax Effect
      gsap.fromTo(
        bgImageRef.current,
        { y: '-10%' },
        {
          y: '10%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );

      // Smooth Entrance Animation
      gsap.fromTo(
        '.consultation-anim',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
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

  const handleGoalSelect = (goal) => {
    setFormData((prev) => ({ ...prev, goal }));
  };

  const handleCapitalSelect = (capital) => {
    setFormData((prev) => ({ ...prev, capital }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Success Step
  };

  const closeModal = () => {
    setModalOpen(false);
    setStep(1);
  };

  return (
    <section
      id="consultation"
      ref={containerRef}
      className="relative w-full bg-slate-950 text-white py-20 sm:py-28 lg:py-35 overflow-hidden"
    >
      {/* Parallax Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src="./consultation-background.jpg"
          alt="Financial Strategy Consultation"
          className="w-full h-[120%] object-cover object-center brightness-[0.75]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Badge */}
            <div className="consultation-anim inline-flex items-center gap-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 px-4 py-1.5 text-xs font-semibold text-emerald-400 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Direct Access: 3 Advisory Slots Open This Week</span>
            </div>

            {/* Main Headline */}
            <h2 className="consultation-anim text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Your Future Deserves <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-200 to-white">
                Trusted Guidance
              </span>
            </h2>

            {/* Subtext */}
            <p className="consultation-anim text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              At CapitalCore, we believe every institutional partner deserves clear, honest, and high-conviction financial strategies. Book a confidential strategy session with our senior team.
            </p>

            {/* Micro Trust Checklist */}
            <div className="consultation-anim grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <FiCheckCircle className="text-sky-400 text-sm flex-shrink-0" />
                <span>Zero Obligation</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <FiLock className="text-sky-400 text-sm flex-shrink-0" />
                <span>Strict NDA Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <FiTrendingUp className="text-sky-400 text-sm flex-shrink-0" />
                <span>Custom Blueprint</span>
              </div>
            </div>

            {/* Trigger Button */}
            <div className="consultation-anim pt-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-2xl hover:bg-sky-400 hover:text-white transition-all duration-300 active:scale-95 group"
              >
                <span>Request Consultation</span>
                <FiArrowRight className="text-base transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* RIGHT: Interactive Agenda Preview Card */}
          <div className="consultation-anim lg:col-span-5">
            <div className="rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                  30-Min Strategy Session
                </span>
                <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                  <FiClock /> Confidential
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                What to expect during your session:
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs flex-shrink-0 border border-sky-400/30">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Portfolio Review</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Analysis of your current allocation, risk tolerances, and liquidity targets.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs flex-shrink-0 border border-sky-400/30">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sector Matching</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Direct alignment with our top-performing growth megatrends (Fintech, AI, Green Energy).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs flex-shrink-0 border border-sky-400/30">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Custom Roadmap</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      A clear strategic execution blueprint delivered within 24 hours of discussion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Multi-Step Booking Drawer Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-md transition-opacity">
          <div className="relative w-full max-w-xl bg-white text-slate-900 h-full p-6 sm:p-10 shadow-2xl overflow-y-auto flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider">
                  <FiCalendar />
                  <span>Schedule Strategy Call</span>
                </div>
                <button
                  onClick={closeModal}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Step 1: Goal Selection */}
              {step === 1 && (
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step 1 of 2</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">What is your primary investment goal?</h3>
                  <p className="text-xs text-slate-500 mb-6">Select the core focus area for your portfolio.</p>

                  <div className="space-y-3 mb-8">
                    {['Portfolio Growth & Expansion', 'Risk Mitigation & Liquidity', 'Co-Investment Opportunities', 'PropTech & Infrastructure'].map((g) => (
                      <div
                        key={g}
                        onClick={() => handleGoalSelect(g)}
                        className={`cursor-pointer p-4 rounded-xl border text-sm font-bold transition-all flex items-center justify-between ${
                          formData.goal === g
                            ? 'border-sky-500 bg-sky-50 text-sky-900'
                            : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{g}</span>
                        {formData.goal === g && <FiCheckCircle className="text-sky-500 text-lg" />}
                      </div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Target Capital Deployment
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['$250K - $1M', '$1M - $5M', '$5M - $20M', '$20M+'].map((cap) => (
                        <button
                          key={cap}
                          type="button"
                          onClick={() => handleCapitalSelect(cap)}
                          className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all ${
                            formData.capital === cap
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                          }`}
                        >
                          {cap}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="w-full rounded-full bg-sky-500 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-sky-600 transition-colors shadow-lg"
                  >
                    Continue to Details →
                  </button>
                </div>
              )}

              {/* Step 2: Contact Info */}
              {step === 2 && (
                <form onSubmit={handleFormSubmit}>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step 2 of 2</span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Where should we reach you?</h3>
                  <p className="text-xs text-slate-500 mb-6">Our senior partner will reach out within 24 hours.</p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Date & Time</label>
                      <input
                        required
                        type="datetime-local"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 rounded-full bg-slate-100 py-3.5 text-xs font-bold text-slate-600 hover:bg-slate-200"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 rounded-full bg-slate-900 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-sky-500 transition-colors shadow-lg"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Success Confirmation */}
              {step === 3 && (
                <div className="text-center py-12">
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    <FiUserCheck />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Consultation Reserved!</h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Thank you, <span className="font-bold">{formData.name}</span>. A calendar invitation has been sent to <span className="font-bold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={closeModal}
                    className="rounded-full bg-slate-900 px-8 py-3 text-xs font-bold text-white hover:bg-sky-500 transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Modal Footer */}
            <div className="pt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-400">
              <FiShield className="text-sky-500 text-base" />
              <span>Your personal information is protected by bank-level encryption.</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}