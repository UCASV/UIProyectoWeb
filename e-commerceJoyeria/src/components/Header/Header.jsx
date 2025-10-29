// src/components/Header/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <section id="topbar">
        <div className="topbar__wrap">
          <a href="/" className="topbar__brand" aria-label="Inicio MERCAUCA">
            MERCAUCA
          </a>

          <form className="topbar__search" role="search" aria-label="Buscar productos">
            <input 
              type="search" 
              name="q" 
              placeholder="Buscar joyas, anillos, collares…" 
              aria-label="Buscar" 
            />
            <button type="submit" className="topbar__btn-search" aria-label="Buscar">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-1.06 1.06l.27.28v.79L20 21.5 21.5 20l-6-6Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z" />
              </svg>
            </button>
          </form>

          <div className="topbar__actions">
            <button className="icon-btn" aria-label="Carrito">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path fill="currentColor"
                  d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 18ZM6.2 6 5 2H2v2h2l3.6 9.59-1.35 3.14A2 2 0 0 0 8.1 19H19v-2H8.42a.25.25 0 0 1-.23-.15l.03-.1L9 15h7.55a2 2 0 0 0 1.85-1.23L21.88 8H19.7l-2.1 5H9.42L7.97 6H6.2Z" />
              </svg>
              <span className="badge" aria-label="Artículos en el carrito">0</span>
            </button>

            <button className="icon-btn" aria-label="Cuenta">
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path fill="currentColor"
                  d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
