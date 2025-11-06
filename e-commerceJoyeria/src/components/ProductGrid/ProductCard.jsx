import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Lógica para agregar al carrito
    console.log('Agregar al carrito:', product);
  };

  return (
    <div className="producto">
      {/* Badge de estado */}
      {product.isNew && (
        <span className="producto__badge producto__badge--nuevo">Nuevo</span>
      )}
      
      {/* Botones de acción rápida */}
      <div className="producto__acciones">
        <button 
          className={`producto__btn ${isFavorite ? 'producto__btn--favorito active' : ''}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
        <button 
          className="producto__btn"
          onClick={addToCart}
          aria-label="Agregar al carrito"
        >
          🛒
        </button>
      </div>

      <Link to={product.link}>
        <img 
          className="producto__imagen" 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
        />
        <div className="producto__informacion">
          <p className="producto__nombre">{product.name}</p>
          <p className="producto__precio">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;