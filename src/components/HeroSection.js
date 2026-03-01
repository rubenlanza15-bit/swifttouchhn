import React from 'react';
import Logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* company logo - replace src/assets/logo.svg with your own image file (PNG, SVG, etc.)
          you can also update the import at the top if you change the filename
      */}
      <img src={Logo} alt="SwiftTouch logo" className="h-16 mb-8" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      
      <motion.h1 
        initial="hidden" animate="visible" variants={fadeUp}
        className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6"
      >
        Soluciones digitales <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
          para cada necesidad 
        </span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg lg:text-xl text-gray-400 max-w-2xl mb-12 font-light"
      >
        {/* Tecnología con visión empresarial. Desde Honduras, desarrollamos infraestructura 
        y cimientos tecnológicos para los desafíos del mañana. */}
        Expertos en Tecnología Brindamos soluciones tecnológicas profesionales para hogares y empresas.
      </motion.p>
      
      <motion.a 
        href="#identidad"
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
        className="group flex items-center gap-2 bg-white text-[#050B14] px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all"
      >
        Conoce más
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </motion.a>
    </section>
  );
}
