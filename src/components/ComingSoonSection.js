import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ComingSoonSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[#080E1A] to-[#050B14]">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="max-w-3xl mx-auto text-center bg-[#0A111F] border border-white/5 rounded-3xl p-12 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        <h3 className="text-2xl font-semibold mb-4">El futuro está en desarrollo</h3>
        <p className="text-gray-400 text-lg mb-8">
          Estamos construyendo nuevas soluciones tecnológicas que redefinirán los estándares empresariales. 
          Pronto compartiremos nuestros próximos pasos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3 min-h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Visita nuestros servicios
          </Link>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-3 min-h-12 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Únete a nuestra comunidad
          </a>
        </div>
      </motion.div>
    </section>
  );
}
