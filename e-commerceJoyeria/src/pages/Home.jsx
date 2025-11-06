// src/pages/Home.jsx
import React from 'react';
import ProductSlider from '../components/ProductSlider/ProductSlider';
import ProductGrid from '../components/ProductGrid/ProductGrid';

const Home = () => {
  return (
    <main className="contenedor">
      <h1>Nuestros Productos</h1>
      <ProductSlider />
      <ProductGrid />
    </main>
  );
};

export default Home;