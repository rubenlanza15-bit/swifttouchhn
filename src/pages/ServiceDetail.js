import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ServiceDetail() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl lg:text-5xl font-semibold mb-6">
          Estamos desarrollando <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
            este apartado para ti
          </span>
        </h1>
        <p className="text-gray-400 text-lg mb-12 font-light">
          Nuestro equipo está trabajando constantemente para traerte nuevas y mejores soluciones. 
          Pronto tendremos más información disponible.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-8 py-3 min-h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <ArrowLeft size={18} />
          Volver a Servicios
        </Link>
      </motion.div>
    </section>
  );
}
