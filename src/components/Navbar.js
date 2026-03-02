import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050B14]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">
          <Link to="/" className="flex items-center">
            Swift<span className="text-blue-500">TouchHn</span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Servicios
          </Link>
          <a href="#contacto" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
