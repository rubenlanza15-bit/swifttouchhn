import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function IdentitySection() {
  const handleScrollToPhilosophy = () => {
    const philosophySection = document.getElementById('filosofia');
    if (philosophySection) {
      philosophySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="identidad" className="py-24 px-6 lg:px-12 bg-[#080E1A]">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Nuestra Identidad</h2>
        <h3 className="text-3xl lg:text-4xl font-semibold mb-8">Evolución mediante excelencia</h3>
        <p className="text-gray-400 text-lg leading-relaxed font-light mb-8">
          En SwiftTouchHn, transformamos la tecnología en soluciones reales. Ofrecemos servicios tecnológicos para empresas, hogares y personas, diseñados para mejorar la seguridad, optimizar procesos y facilitar la vida digital. Trabajamos con visión estratégica, adaptándonos a cada necesidad para convertirnos en tu aliado tecnológico de confianza.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollToPhilosophy}
          className="inline-flex items-center justify-center px-8 py-3 min-h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#080E1A]"
          aria-label="Ir a nuestra filosofía"
        >
          Conoce más sobre nuestra visión
        </motion.button>
      </motion.div>
    </section>
  );
}
