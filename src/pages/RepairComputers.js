import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function RepairComputers() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate('/#contacto');
    setTimeout(() => {
      const contactElement = document.querySelector('#contacto');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <Helmet>
        <title>Reparación y Soporte de Computadoras – SwiftTouchHn</title>
        <meta name="description" content="Detalle del servicio de reparación y soporte de computadoras ofrecido por SwiftTouchHn." />
      </Helmet>
      
      {/* Header */}
      <div className="mb-12">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
        >
          <ArrowLeft size={18} />
          Volver
        </Link>
      </div>

      {/* Main Content - Two Column Layout */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={require('../assets/full_final_postreppc.png')}
            alt="Reparación de computadoras"
            className="w-full max-w-md h-auto rounded-2xl shadow-2xl border border-blue-500/20"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Reparación y Soporte de Computadoras</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Nuestro equipo técnico está afinando cada aspecto de este servicio para que recibas 
            una atención profesional y eficaz. Muy pronto podrás disfrutar de asistencia 
            personalizada y diagnósticos detallados para tu computadora.
          </p>

          {/* Features List */}
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Lo que ofrecemos:</h3>
            <div className="space-y-3">
              {[
                'Diagnóstico completo de hardware y software',
                'Reparación de componentes defectuosos',
                'Optimización del rendimiento y limpieza de virus',
                'Instalación y actualización de software fiable',
                'Asesoría sobre mantenimiento preventivo'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contáctanos
          </button>
        </div>
      </motion.div>
    </section>
  );
}
