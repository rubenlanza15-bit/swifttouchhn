import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function ComingSoonService() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 pt-32 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Estamos desarrollando este apartado para ti
        </h1>

        <p className="text-lg lg:text-xl text-gray-400 mb-12 font-light">
          Nuestro equipo está trabajando constantemente para traerte las mejores soluciones. 
          Este servicio estará disponible muy pronto. ¡Gracias por tu paciencia!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 min-h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <ArrowLeft size={18} />
            Volver a Servicios
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 min-h-12 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Ir al Inicio
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
