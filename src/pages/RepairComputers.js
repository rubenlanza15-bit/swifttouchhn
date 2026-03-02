import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function RepairComputers() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-24">
      <Helmet>
        <title>Reparación y Soporte de Computadoras – SwiftTouchHn</title>
        <meta name="description" content="Detalle del servicio de reparación y soporte de computadoras ofrecido por SwiftTouchHn." />
      </Helmet>
      <div className="max-w-3xl text-center">
        <img
          src={require('../assets/full_final_postreppc.png')}
          alt="Reparación de computadoras"
          className="w-full h-auto mb-8 rounded-lg shadow-lg"
        />
        <h1 className="text-3xl font-semibold mb-4">Reparación y Soporte de Computadoras</h1>
        <p className="text-gray-400 mb-8">
          Nuestro equipo técnico está afinando cada aspecto de este servicio para que recibas 
          una atención profesional y eficaz. Muy pronto podrás disfrutar de asistencia 
          personalizada y diagnósticos detallados para tu computadora.
        </p>
        {/* <ul className="text-gray-400 text-left list-disc list-inside mb-8 space-y-2">
          <li>Diagnóstico completo de hardware y software.</li>
          <li>Reparación de componentes defectuosos.</li>
          <li>Optimización del rendimiento y limpieza de virus.</li>
          <li>Instalación y actualización de software fiable.</li>
          <li>Asesoría sobre mantenimiento preventivo.</li>
        </ul> */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Volver a Servicios
        </Link>
      </div>
    </section>
  );
}
