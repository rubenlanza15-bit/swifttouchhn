import React from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IdentitySection from './components/IdentitySection';
import PhilosophySection from './components/PhilosophySection';
import ComingSoonSection from './components/ComingSoonSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050B14] text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <IdentitySection />
        <PhilosophySection />
        <ComingSoonSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
