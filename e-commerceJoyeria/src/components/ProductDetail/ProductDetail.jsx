import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('Chica');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Datos del producto (en un caso real vendrían por props)
  const productData = product || {
    id: 1,
    name: "Anillo de oro",
    price: 1225.00,
    originalPrice: 1500.00,
    discount: 18,
    image: "imagenes/anillo.jpg",
    description: "Lindas piezas elaboradas en oro 18k. Artesanales, con acabado espejo. Entrega con estuche y paño de limpieza.",
    shortDescription: "Maecenas consectetur ultricies mi vel venenatis. Curabitur risus tellus, congue non tellus, at semper dapibus turpis. Duis pellentesque, risus sit amet placerat porttitor.",
    isNew: true,
    stock: 5
  };

  const handleQuantityChange = (delta) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    // Aquí iría la lógica para agregar al carrito
    console.log('Producto agregado:', {
      ...productData,
      size: selectedSize,
      quantity: quantity
    });
    alert(`¡${productData.name} agregado al carrito!`);
  };

  return (
    <section id="producto">
      <div className="producto__wrap">
        {/* Galería de imágenes */}
        <aside className="galeria">
          <figure className="galeria__principal">
            {productData.isNew && <span className="badge-info">Nuevo</span>}
            <img 
              id="fotoPrincipal" 
              src={productData.image} 
              alt={productData.name} 
            />
            <button 
              className="fav" 
              aria-label="Añadir a favoritos"
              onClick={toggleFavorite}
            >
              {isFavorite ? '♥' : '♡'}
            </button>
          </figure>
        </aside>

        {/* Detalles del producto */}
        <article className="detalle">
          <h1 className="detalle__titulo">{productData.name}</h1>

          <div className="detalle__precios">
            <span className="precio-actual">${productData.price.toFixed(2)}</span>
            <span className="precio-anterior">${productData.originalPrice.toFixed(2)}</span>
            <span className="descuento">{productData.discount}% OFF</span>
          </div>

          <p className="detalle__desc">
            {productData.shortDescription}
          </p>

          <form className="comprar">
            {/* Selector de tallas */}
            <label className="campo campo--full">
              <div className="container">
                <div className="tabs">
                  <input 
                    type="radio" 
                    id="radio-1" 
                    name="tabs" 
                    checked={selectedSize === 'Chica'}
                    onChange={() => handleSizeChange('Chica')}
                  />
                  <label className="tab" htmlFor="radio-1">Chica</label>
                  
                  <input 
                    type="radio" 
                    id="radio-2" 
                    name="tabs" 
                    checked={selectedSize === 'Mediana'}
                    onChange={() => handleSizeChange('Mediana')}
                  />
                  <label className="tab" htmlFor="radio-2">Mediana</label>
                  
                  <input 
                    type="radio" 
                    id="radio-3" 
                    name="tabs" 
                    checked={selectedSize === 'Grande'}
                    onChange={() => handleSizeChange('Grande')}
                  />
                  <label className="tab" htmlFor="radio-3">Grande</label>
                  
                  <span className="glider"></span>
                </div>
              </div>
            </label>

            {/* Selector de cantidad */}
            <label className="campo">
              <div id="numi" className="numi" role="group" aria-label="Selector de cantidad">
                <button 
                  className="numi__btn" 
                  type="button" 
                  aria-label="Disminuir"
                  onClick={() => handleQuantityChange(-1)}
                >
                  −
                </button>
                <input 
                  className="numi__input" 
                  type="number" 
                  inputMode="numeric" 
                  min="1" 
                  max="99" 
                  step="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  aria-live="polite" 
                />
                <button 
                  className="numi__btn" 
                  type="button" 
                  aria-label="Aumentar"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </label>
          </form>

          {/* Descripción completa y botón de compra */}
          <section className="descripcion">
            <h2>Descripción</h2>
            <p>
              {productData.description}
            </p>
            
            {/* Botón de agregar al carrito */}
            <div 
              data-tooltip={productData.stock < 10 ? "Quedan Pocos" : ""} 
              className="buttonCompra"
              onClick={handleAddToCart}
            >
              <div className="buttonCompra-wrapper">
                <div className="text">Agregar al carrito</div>
                <span className="icon">
                  <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </span>
              </div>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default ProductDetail;