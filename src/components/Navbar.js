import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Inicio', href: '/', isLink: true },
    { label: 'Identidad', href: '#identidad', isLink: false },
    { label: 'Filosofía', href: '#filosofia', isLink: false },
    { label: 'Contacto', href: '#contacto', isLink: false },
    { label: 'Servicios', href: '/services', isService: true },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle Inicio button - scroll to top if on home, navigate if on other page
  const handleInicio = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMenu();
    } else {
      closeMenu();
    }
  };

  // Handle section links - if on /services, navigate to home with anchor
  const handleSectionLink = (href) => {
    if (location.pathname !== '/') {
      window.location.href = href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#050B14]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            Swift<span className="text-blue-500">TouchHn</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, href, isLink, isService }) => {
            if (isService) {
              return (
                <Link
                  key={label}
                  to={href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors h-10 flex items-center"
                >
                  {label}
                </Link>
              );
            }
            if (isLink) {
              return (
                <Link
                  key={label}
                  to={href}
                  onClick={handleInicio}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors h-10 flex items-center"
                >
                  {label}
                </Link>
              );
            }
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionLink(href);
                }}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors h-10 flex items-center cursor-pointer"
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-3 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#050B14]/98 border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href, isLink, isService }) => {
            if (isService) {
              return (
                <Link
                  key={label}
                  to={href}
                  onClick={closeMenu}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-3 min-h-11 flex items-center"
                >
                  {label}
                </Link>
              );
            }
            if (isLink) {
              return (
                <Link
                  key={label}
                  to={href}
                  onClick={handleInicio}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-3 min-h-11 flex items-center"
                >
                  {label}
                </Link>
              );
            }
            return (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionLink(href);
                }}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-3 min-h-11 flex items-center cursor-pointer"
              >
                {label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
