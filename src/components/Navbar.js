import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050B14]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">
          Swift<span className="text-blue-500">TouchHn</span>
        </div>
        <a href="#contacto" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Contacto
        </a>
      </div>
    </nav>
  );
}
