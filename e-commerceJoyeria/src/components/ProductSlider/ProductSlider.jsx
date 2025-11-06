// src/components/ProductSlider/ProductSlider.jsx
import React, { useState, useEffect } from 'react';
import './ProductSlider.css';

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Compra y vende artículos",
      text: "Desde la comodidad de tu casa.",
      cta: "Explora ahora",
      bgClass: "bg-verde",
      image: "images/fondoJoyas.jpg",
      alt: "Chica con bolso"
    },
    {
      id: 2,
      title: "Lujo que habla por ti",
      text: "Joyas únicas en oro y plata.",
      cta: "Ver colección",
      bgClass: "bg-vino",
      image: "images/Elegancia.jpg",
      alt: "Collar dorado"
    },
    {
      id: 3,
      title: "Ofertas de temporada",
      text: "Descuentos limitados.",
      cta: "Aprovecha",
      bgClass: "bg-azul",
      image: "imagenes/OFERTASSLIDER.jpg",
      alt: "Reloj y accesorios"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div id="destacados">
      <div 
        className="slider" 
        id="slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="track" 
          style={{ transform: `translateX(${currentSlide * -100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <div className={`slide__left ${slide.bgClass}`}>
                <h2 className="slide__title">{slide.title}</h2>
                <p className="slide__text">{slide.text}</p>
                <button className="cta">
                  <span>{slide.cta}</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </div>
              <div className="slide__right">
                <img src={slide.image} alt={slide.alt} className="slide__img" />
              </div>
            </div>
          ))}
        </div>

        <div className="nav">
          <button className="prev" onClick={prevSlide}>❮</button>
          <button className="next" onClick={nextSlide}>❯</button>
        </div>
        
        <div className="dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;