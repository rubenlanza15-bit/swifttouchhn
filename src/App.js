import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IdentitySection from './components/IdentitySection';
import PhilosophySection from './components/PhilosophySection';
import ComingSoonSection from './components/ComingSoonSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Services from './pages/Services';
import ComingSoonService from './pages/ComingSoonService';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#050B14] text-white font-sans selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <IdentitySection />
                <PhilosophySection />
                <ComingSoonSection />
                <ContactSection />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ComingSoonService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
