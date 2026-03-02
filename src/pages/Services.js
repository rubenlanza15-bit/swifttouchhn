import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { fadeUp } from '../utils/animations';

// Header/cover image for the services section (add your file to src/assets)
import coverImg from '../assets/Post ST1.png';

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
    },
    {
      title: 'Infraestructura',
      description: 'Implementación y administración de servidores y redes.',
    },
    {
      title: 'Soporte Técnico',
      description: 'Asistencia 24/7 para resolver incidencias y dudas.',
    },
  ];

  const technicalServices = [
    {
      title: 'Reparación y Soporte de Computadoras',
      description: 'Mantenimiento, reparación y diagnóstico de hardware y software.',
    },
    {
      title: 'Reparación y Soporte de Impresoras',
      description: 'Servicio especializado para reparación y mantenimiento de impresoras.',
    },
    {
      title: 'Mantenimientos Preventivos',
      description: 'Planes de mantenimiento regular para optimizar el rendimiento de equipos.',
    },
    {
      title: 'Instalación de Software, Sistemas Operativos y Licencias',
      description: 'Instalación profesional y configuración de software con licencias válidas.',
    },
  ];

  const homeServices = [
    {
      title: 'Instalación y configuración de wifi',
      description: 'Conexión inalámbrica estable y segura en tu hogar.',
    },
    {
      title: 'Instalación básica de cámaras de seguridad',
      description: 'Protege tu hogar con vigilancia confiable.',
    },
    {
      title: 'Configuración de almacenamiento profesional en la nube',
      description: 'Respaldo y acceso a tus archivos desde cualquier lugar.',
    },
    {
      title: 'Seguridad digital para familias',
      description: 'Protege a tu familia con soluciones de ciberseguridad.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Servicios – SwiftTouchHn</title>
        <meta name="description" content="Descubre los servicios que ofrece SwiftTouchHn, desde desarrollo web hasta soporte técnico e infraestructura." />
      </Helmet>
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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

      {/* Technical Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-20"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Servicios Técnicos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {technicalServices.map(({ title, description }, index) => {
            const href = index === 0 ? '/repair-computadoras' : `/service/${index}`;
            return (
              <Link
                key={title}
                to={href}
                className="bg-[#0A111F] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors cursor-pointer transform hover:scale-105 duration-300"
              >
                <h3 className="text-lg font-medium mb-3 text-blue-400">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Home Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-20"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">SwiftTouch Hogar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeServices.map(({ title, description }, idx) => (
            <Link
              key={title}
              to={`/service/${technicalServices.length + idx}`}
              className="bg-[#0A111F] p-8 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-colors cursor-pointer transform hover:scale-105 duration-300"
            >
              <h3 className="text-lg font-medium mb-3 text-blue-400">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
    </>
  );
}
