/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ContactSection() {
  /* eslint-disable-next-line no-unused-vars */
  const [name, setName] = useState('');
  /* eslint-disable-next-line no-unused-vars */
  const [email, setEmail] = useState('');
  /* eslint-disable-next-line no-unused-vars */
  const [message, setMessage] = useState('');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  /* eslint-disable-next-line no-unused-vars */
  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);
    // use correct email address
    window.location.href = `mailto:swifttouchhn@gmail.com?subject=${subject}&body=${body}`;
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (subscribeEmail) {
      setSubscribed(true);
      setSubscribeEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section id="contacto" className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-3xl font-semibold mb-8">Iniciemos una conversación</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
          {/* clickable email like WhatsApp link */}
          <a href="mailto:swifttouchhn@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <Mail className="text-blue-500" size={20} />
            <span>swifttouchhn@gmail.com</span>
          </a>
          <a href="https://wa.me/50433140796" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            {/* official WhatsApp icon from simple-icons */}
            <svg className="text-green-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor">
              <title>WhatsApp</title>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>+504 3314‑0796</span>
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

        {/* Subscription section */}
        <div className="bg-[#0A111F] rounded-lg p-8 border border-white/5 mt-12">
          <h3 className="text-white font-medium mb-4">Suscribete para actualizaciones</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
              placeholder="Tu correo"
              required
              className="flex-1 min-h-11 px-4 py-2 bg-[#050B14] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              aria-label="Correo para suscripcion"
            />
            <button
              type="submit"
              className="min-h-11 px-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center gap-2"
              aria-label="Suscribirse"
            >
              <Send size={18} /> Suscribir
            </button>
          </form>
          {subscribed && <p className="text-green-400 text-sm mt-3">¡Gracias por suscribirse!</p>}
        </div>

        {/* <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left flex flex-col gap-4">
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
        </form> */}
      </motion.div>
    </section>
  );
}
