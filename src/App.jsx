import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFounder from './components/AboutFounder';
import InvestmentNiches from './components/InvestmentNiches';
import Consultation from './components/Consultation';
import SuccessStories from './components/SuccessStories';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <AboutFounder />
      <InvestmentNiches />
      <Consultation />
      <SuccessStories />
      <Features />
      <Footer />
    </div>
  );
}