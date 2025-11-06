// src/components/Navigation/Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'navegacion__enlace navegacion__enlace--activo' : 'navegacion__enlace';
  };

  return (
    <nav className="navegacion">
      <Link className={isActive('/')} to="/">novedades</Link>
      <Link className={isActive('/vender')} to="/vender">Vender</Link>
      <Link className={isActive('/vendedores')} to="/vendedores">Nosotros</Link>
    </nav>
  );
};

export default Navigation;