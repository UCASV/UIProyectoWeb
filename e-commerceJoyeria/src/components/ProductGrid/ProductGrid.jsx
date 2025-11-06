import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';


const ProductGrid = () => {
 const [filter, setFilter] = useState('todos');
 const [sortBy, setSortBy] = useState('nombre');

 const products = [
  { id: 1, name: "Anillo de oro", price: 25, image: "images/AnilloOro.jpg", link: "/producto/1", category: "joyeria", isNew: true },
  { id: 2, name: "Collar de oro", price: 55, image: "images/CollarOro.jpg", link: "/producto/2", category: "joyeria", isNew: false },
  { id: 3, name: "pulsera", price: 35, image: "images/Pulseras.jpg", link: "/producto/3", category: "joyeria", isNew: true },
  { id: 4, name: "Aritos", price: 15, image: "images/Arete.jpg", link: "/producto/4", category: "joyeria", isNew: false },
  { id: 5, name: "Reloj", price: 125, image: "imagenes/reloj.jpg", link: "/producto/5", category: "accesorios", isNew: true },
  { id: 6, name: "Lentes", price: 30, image: "imagenes/lentes.jpg", link: "/producto/6", category: "accesorios", isNew: false },
  { id: 7, name: "Pulseras Variadas", price: 12, image: "imagenes/pulseras.png", link: "/producto/7", category: "accesorios", isNew: false },
  { id: 8, name: "Arito de oro", price: 40, image: "images/AreteOro.jpg", link: "/producto/8", category: "joyeria", isNew: true },
  { id: 9, name: "Arito Tanjiro", price: 18, image: "imagenes/aritosTanjiro.jpg", link: "/producto/9", category: "accesorios", isNew: true },
  { id: 10, name: "Collar Negro", price: 38, image: "imagenes/CollarNegro.webp", link: "/producto/10", category: "joyeria", isNew: false },
  { id: 11, name: "Collar Verde", price: 55, image: "imagenes/CollarVerde.jpg", link: "/producto/11", category: "joyeria", isNew: true },
  { id: 12, name: "Pulsera cubana Cristal", price: 100, image: "imagenes/pulseraCubadaCristales.webp", link: "/producto/12", category: "joyeria", isNew: true },
  { id: 13, name: "Pulsera cubana", price: 75, image: "imagenes/pulseraCubana.jpg", link: "/producto/13", category: "joyeria", isNew: false }
 ];

  // Filtrar productos
  const filteredProducts = filter === 'todos' 
    ? products 
    : products.filter(product => product.category === filter);

  // Ordenar productos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'precio-asc':
        return a.price - b.price;
      case 'precio-desc':
        return b.price - a.price;
      case 'nombre':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const categories = [
    { id: 'todos', name: 'Todos los productos' },
    { id: 'joyeria', name: 'Joyeria' },
    { id: 'accesorios', name: 'Accesorios' }
  ];

  return (
    <div className="product-grid">
      {/* Filtros y ordenamiento */}
      <div className="product-grid__filtros">
        <div className="product-grid__filtros-izquierda">
          {categories.map(category => (
            <button
              key={category.id}
              className={`product-grid__filtro ${filter === category.id ? 'product-grid__filtro--activo' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="product-grid__filtros-derecha">
          <div className="product-grid__ordenamiento">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Ordenar productos"
            >
              <option value="nombre">Ordenar por nombre</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Gráficos decorativos */}
      <div className="grafico grafico--Logo1"></div>
      <div className="grafico grafico--Logo2"></div>

      {/* Mensaje si no hay productos */}
      {sortedProducts.length === 0 && (
        <div className="product-grid__vacio">
          <h3>No se encontraron productos</h3>
          <p>Intenta con otros filtros o categorías</p>
          <button 
            className="product-grid__filtro product-grid__filtro--activo"
            onClick={() => setFilter('todos')}
          >
            Mostrar todos los productos
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;