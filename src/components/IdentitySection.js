import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function IdentitySection() {
  return (
    <section id="identidad" className="py-24 px-6 lg:px-12 bg-[#080E1A]">
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-4">Nuestra Identidad</h2>
        <h3 className="text-3xl lg:text-4xl font-semibold mb-8">Evolución mediante excelencia</h3>
        <p className="text-gray-400 text-lg leading-relaxed font-light">
          {/* En SwiftTouch, creemos en el poder transformador de la estructura corporativa. 
          Somos una empresa tecnológica enfocada en sentar las bases de la innovación. 
          Nuestra visión es impulsar el ecosistema empresarial con una perspectiva a largo plazo, 
          combinando rigor analítico con una adaptabilidad excepcional. No solo seguimos las 
          tendencias; nos preparamos para ser el pilar sobre el que se construyan. */}
          En SwiftTouchHn, transformamos la tecnología en soluciones reales. Ofrecemos servicios tecnológicos para empresas, hogares y personas, diseñados para mejorar la seguridad, optimizar procesos y facilitar la vida digital. Trabajamos con visión estratégica, adaptándonos a cada necesidad para convertirnos en tu aliado tecnológico de confianza.
        </p>
      </motion.div>
    </section>
  );
}
