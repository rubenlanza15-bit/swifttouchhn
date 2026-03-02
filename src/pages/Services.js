import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

// Header/cover image for the services section (add your file to src/assets)
import coverImg from '../assets/Post ST3.png';

// // image for the "Desarrollo Web" service
// import webImg from '../assets/full_final_postreppc.png';

// Example imports – replace these with the actual image files you add to
// src/assets (or wherever you prefer). You can import as many as you need.
// import webImg from '../assets/web-service.png';
// import infraImg from '../assets/infra-service.png';
// import supportImg from '../assets/support-service.png';

export default function Services() {
  // Define your services as objects so you can associate an image,
  // title, description, etc.  After importing actual image files above,
  // update the `image` property accordingly.
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Estamos trabajando fuertemente para ofrecerte este servicio.',
    //   image: webImg,
    },
    {
      title: 'Infraestructura',
      description: 'Implementación y administración de servidores y redes.',
      // image: infraImg,
    },
    {
      title: 'Soporte Técnico',
      description: 'Asistencia 24/7 para resolver incidencias y dudas.',
      // image: supportImg,
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      {coverImg && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <img
            src={coverImg}
            alt="Portada servicios"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      )}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-4xl font-semibold text-center mb-12"
      >
        Nuestros Servicios
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map(({ title, description, image }) => (
          <div
            key={title}
            className="bg-[#0A111F] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
            )}
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
