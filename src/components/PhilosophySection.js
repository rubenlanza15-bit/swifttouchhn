import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, Activity, Target } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function PhilosophySection() {
  return (
    <section id="filosofia" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold">Nuestra Filosofía</h2>
      </div>
      
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {/* Tarjeta 1 */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
          className="bg-[#0A111F] border border-white/5 hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
        >
          <Lightbulb className="text-blue-500 mb-6 group-hover:text-blue-400 transition-colors" size={32} />
          <h4 className="text-xl font-medium mb-3 group-hover:text-blue-400 transition-colors">Innovación</h4>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            Diseñamos hoy pensando en los ecosistemas tecnológicos de la próxima década.
          </p>
        </motion.div>

        {/* Tarjeta 2 */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
          className="bg-[#0A111F] border border-white/5 hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
        >
          <ShieldCheck className="text-blue-500 mb-6 group-hover:text-blue-400 transition-colors" size={32} />
          <h4 className="text-xl font-medium mb-3 group-hover:text-blue-400 transition-colors">Confianza</h4>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            Cimientos basados en la seguridad, la ética corporativa y la transparencia absoluta.
          </p>
        </motion.div>

        {/* Tarjeta 3 */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
          className="bg-[#0A111F] border border-white/5 hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
        >
          <Activity className="text-blue-500 mb-6 group-hover:text-blue-400 transition-colors" size={32} />
          <h4 className="text-xl font-medium mb-3 group-hover:text-blue-400 transition-colors">Evolución</h4>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            Crecimiento ágil y estructurado para adaptarnos a los entornos más exigentes.
          </p>
        </motion.div>

        {/* Tarjeta 4 */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
          className="bg-[#0A111F] border border-white/5 hover:border-blue-500/50 p-8 rounded-2xl transition-all duration-300 cursor-pointer group"
        >
          <Target className="text-blue-500 mb-6 group-hover:text-blue-400 transition-colors" size={32} />
          <h4 className="text-xl font-medium mb-3 group-hover:text-blue-400 transition-colors">Compromiso</h4>
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
            Dedicación inquebrantable hacia la excelencia técnica y operativa en cada paso.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
