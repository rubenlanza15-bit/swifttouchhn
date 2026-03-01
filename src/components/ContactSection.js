/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);
    window.location.href = `mailto:contacto@swifttouch.hn?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contacto" className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-3xl font-semibold mb-8">Iniciemos una conversación</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
          <a href="mailto:contacto@swifttouch.hn" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <Mail className="text-blue-500" size={20} />
            <span>swifttouchhn@gmail.com</span>
          </a>
        </div>
        {/* redes sociales */}
        <p className="text-gray-400 mb-4">Síguenos en nuestras redes sociales</p>
        <div className="flex items-center justify-center gap-6 mb-12">
          {/* enlaces a redes sociales */}
          <a
            href="https://www.facebook.com/SwiftTouchhn"
            className="text-gray-500 hover:text-white transition-colors"
            target="_blank" rel="noopener noreferrer"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/swifttouch_hn/"
            className="text-gray-500 hover:text-white transition-colors"
            target="_blank" rel="noopener noreferrer"
          >
            <Instagram size={24} />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Nombre</label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              required
              className="w-full bg-[#0A111F] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Correo electrónico</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              required
              className="w-full bg-[#0A111F] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="ejemplo@empresa.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Escribe tu consulta</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full bg-[#0A111F] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Déjanos tu mensaje aquí"
            />
          </div>
          <button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors">
            Enviar mensaje
          </button>
        </form>
      </motion.div>
    </section>
  );
}
