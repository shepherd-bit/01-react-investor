import { 
  FiArrowRight, 
  FiMail, 
  FiMapPin, 
  FiLinkedin, 
  FiTwitter, 
  FiGithub, 
  FiSend,
  FiShield
} from 'react-icons/fi';

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic
  };

  return (
    <footer className="relative w-full bg-slate-950 text-slate-400 border-t border-slate-900 overflow-hidden font-sans">
      
      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* BRAND & NEWSLETTER COLUMN (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* CapitalCore Logo (Matches Navbar) */}
            <a href="#" className="inline-flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                Capital<span className="text-sky-400">Core</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Our expert advisors help you develop a solid strategy to grow your assets while minimizing risk and ensuring long-term returns.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Subscribe to Investor Insights
              </span>
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 max-w-md">
                <div className="relative flex-1">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-sky-500/10 flex-shrink-0"
                >
                  <span>Join</span>
                  <FiArrowRight className="text-sm" />
                </button>
              </form>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {[
                  { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
                  { name: 'X / Twitter', icon: FiTwitter, href: '#' },
                  { name: 'GitHub', icon: FiGithub, href: '#' },
                  { name: 'Telegram', icon: FiSend, href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300 shadow-sm"
                  >
                    <social.icon className="text-base" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* NAVIGATION & LINKS COLUMNS (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Main Pages */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Main Pages
              </h3>
              <ul className="space-y-2.5 text-xs">
                {['Home', 'About Us', 'Services', 'Success Stories', 'As Seen In'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-sky-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Resources & Case Studies */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Resources
              </h3>
              <ul className="space-y-2.5 text-xs">
                {['Case Studies', 'Market Reports', 'Testimonials', 'Investor Deck', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-sky-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Global Headquarters */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                Headquarters
              </h3>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5 text-slate-400">
                  <FiMapPin className="text-sky-400 text-sm flex-shrink-0 mt-0.5" />
                  <span>100 Bishopsgate, Financial District, London EC2N 4AG</span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-400">
                  <FiMail className="text-sky-400 text-sm flex-shrink-0" />
                  <span>invest@capitalcore.com</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-400 font-semibold pt-1">
                  <FiShield className="text-sm" />
                  <span>FCA & SEC Regulated</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* REGULATORY DISCLAIMER STRIP */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong>Regulatory Notice:</strong> CapitalCore is an international investment advisory firm. Private capital deployments, secondary equity strategies, and venture capital allocations involve substantial risk of loss and are not suitable for all investors. Past performance is no guarantee of future returns.
          </p>
        </div>

        {/* COPYRIGHT & LEGAL STRIP */}
        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© CapitalCore 2026. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
}