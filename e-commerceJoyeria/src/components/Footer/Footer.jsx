// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer alt">
      <div className="footer__wrap">
        <Link to="/" className="footer__brand">MERCAUCA</Link>

        <hr className="footer__divider" />

        <nav className="footer__nav">
          <Link to="/nosotros" className="chip">Nosotros</Link>
          <Link to="/contacto" className="chip">Contacto</Link>
          <Link to="/terminos" className="chip">Términos</Link>
        </nav>

        <div className="footer__social" aria-label="Redes sociales">
          <a href="#" aria-label="Instagram" className="icon">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM17.75 6a.75.75 0 1 1-.75.75A.75.75 0 0 1 17.75 6Z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="icon">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor"
                d="M13 22v-8h3l.5-3H13V9.5A1.5 1.5 0 0 1 14.5 8H17V5h-2.5A4.5 4.5 0 0 0 10 9.5V11H7v3h3v8z"/>
            </svg>
          </a>
          <a href="#" aria-label="X" className="icon">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="currentColor"
                d="M3 3h3.7l5 6.9L16.6 3H21l-7.7 9.9L21 21h-3.7l-5.3-7.3L7.4 21H3l7.9-10.1z"/>
            </svg>
          </a>
        </div>

        <p className="footer__copy">© 2025 MercaUca — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;