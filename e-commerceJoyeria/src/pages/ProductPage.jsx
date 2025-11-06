import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/ProductDetail';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Simulación de base de datos de productos
  const productsDatabase = {
    1: {
      id: 1,
      name: "Anillo de oro 18k",
      price: 1225.00,
      originalPrice: 1500.00,
      discount: 18,
      image: "imagenes/anillo.jpg",
      description: "Lindas piezas elaboradas en oro 18k. Artesanales, con acabado espejo. Entrega con estuche y paño de limpieza. Perfecto para ocasiones especiales como aniversarios, compromisos o regalos importantes.",
      shortDescription: "Maecenas consectetur ultricies mi vel venenatis. Curabitur risus tellus, congue non tellus, at semper dapibus turpis.",
      isNew: true,
      stock: 5,
      category: "joyeria",
      specifications: {
        material: "Oro 18k",
        peso: "4.2g",
        medida: "Ajustable",
        garantia: "1 año"
      },
      images: [
        "imagenes/anillo.jpg",
        "imagenes/anillo-2.jpg",
        "imagenes/anillo-3.jpg"
      ]
    },
    2: {
      id: 2,
      name: "Collar de oro elegante",
      price: 55.00,
      originalPrice: 70.00,
      discount: 21,
      image: "imagenes/collar.jpg",
      description: "Hermoso collar en oro 14k con diseño elegante y contemporáneo. Ideal para complementar cualquier outfit, ya sea casual o formal. Cadena ajustable de 45-50cm.",
      shortDescription: "Duis convallis tortor eu mi interdum feugiat. Pellentesque diam dolor, dignissim sit amet metus vitae.",
      isNew: false,
      stock: 8,
      category: "joyeria",
      specifications: {
        material: "Oro 14k",
        largo: "45-50cm",
        cierre: "Seguro",
        garantia: "6 meses"
      }
    },
    3: {
      id: 3,
      name: "Pulsera artesanal",
      price: 35.00,
      originalPrice: 45.00,
      discount: 22,
      image: "imagenes/pulsera.jpg",
      description: "Pulsera fabricada con materiales de primera calidad. Diseño único y duradero, perfecta para uso diario. Hecha a mano por artesanos locales.",
      shortDescription: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      isNew: true,
      stock: 3,
      category: "joyeria",
      specifications: {
        material: "Cuero genuino",
        ajuste: "Ajustable",
        origen: "Hecho a mano",
        garantia: "3 meses"
      }
    },
    4: {
      id: 4,
      name: "Aritos de plata 925",
      price: 15.00,
      originalPrice: 25.00,
      discount: 40,
      image: "imagenes/aritos.jpg",
      description: "Aritos de plata 925 con diseño minimalista. Perfectos para uso diario, hipoalergénicos y resistentes al agua. Incluyen estuche de regalo.",
      shortDescription: "Proin porta pretium felis, ac semper nulla pellentesque sed. Morbi condimentum mauris orci.",
      isNew: false,
      stock: 12,
      category: "joyeria",
      specifications: {
        material: "Plata 925",
        tipo: "Hipoalergénico",
        incluye: "Estuche de regalo",
        garantia: "6 meses"
      }
    },
    5: {
      id: 5,
      name: "Reloj clásico premium",
      price: 125.00,
      originalPrice: 150.00,
      discount: 17,
      image: "imagenes/reloj.jpg",
      description: "Reloj analógico con correa de cuero genuino. Resistente al agua hasta 50m, movimiento quartz de precisión y garantía de 2 años. Elegante y funcional.",
      shortDescription: "In blandit et dolor vel consequat. Cras urna odio, euismod sit amet mauris a, varius dignissim neque.",
      isNew: true,
      stock: 6,
      category: "accesorios",
      specifications: {
        movimiento: "Quartz japonés",
        resistencia: "50m",
        correa: "Cuero genuino",
        garantia: "2 años"
      }
    },
    6: {
      id: 6,
      name: "Lentes de sol premium",
      price: 30.00,
      originalPrice: 40.00,
      discount: 25,
      image: "imagenes/lentes.jpg",
      description: "Lentes de sol con protección UV400. Diseño moderno y marco resistente de acetato. Incluyen estuche rígido y paño de limpieza.",
      shortDescription: "Nulla facilisi. Etiam eu urna at arcu dignissim tempor. Vestibulum ultrices ex ante.",
      isNew: false,
      stock: 15,
      category: "accesorios",
      specifications: {
        proteccion: "UV400",
        material: "Acetato",
        incluye: "Estuche y paño",
        garantia: "1 año"
      }
    },
    7: {
      id: 7,
      name: "Set de pulseras artesanales",
      price: 12.00,
      originalPrice: 18.00,
      discount: 33,
      image: "imagenes/pulseras.png",
      description: "Set de pulseras artesanales con diferentes diseños y colores. Pack de 3 unidades, elaboradas con hilos de alta calidad y detalles únicos.",
      shortDescription: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      isNew: false,
      stock: 20,
      category: "accesorios",
      specifications: {
        material: "Hilos de algodón",
        contenido: "Pack de 3",
        ajuste: "Ajustable",
        origen: "Hecho a mano"
      }
    },
    8: {
      id: 8,
      name: "Aritos de oro clásicos",
      price: 40.00,
      originalPrice: 50.00,
      discount: 20,
      image: "imagenes/AritosOro.webp",
      description: "Aritos en oro 18k con diseño clásico. Ideales para regalo o uso personal, disponibles en diferentes tamaños. Incluyen certificado de autenticidad.",
      shortDescription: "Proin porta pretium felis, ac semper nulla pellentesque sed. Morbi condimentum mauris orci.",
      isNew: true,
      stock: 7,
      category: "joyeria",
      specifications: {
        material: "Oro 18k",
        diametro: "10mm",
        cierre: "Tornillo",
        certificado: "Incluido"
      }
    },
    9: {
      id: 9,
      name: "Arito Tanjiro Kamado",
      price: 18.00,
      originalPrice: 25.00,
      discount: 28,
      image: "imagenes/aritosTanjiro.jpg",
      description: "Arito inspirado en Tanjiro de Kimetsu no Yaiba. Diseño único para fans del anime, elaborado en acero inoxidable con detalles esmaltados.",
      shortDescription: "In blandit et dolor vel consequat. Cras urna odio, euismod sit amet mauris a, varius dignissim neque.",
      isNew: true,
      stock: 4,
      category: "accesorios",
      specifications: {
        material: "Acero inoxidable",
        diseño: "Esmaltado",
        coleccion: "Kimetsu no Yaiba",
        garantia: "Contra defectos"
      }
    },
    10: {
      id: 10,
      name: "Collar negro misterioso",
      price: 38.00,
      originalPrice: 48.00,
      discount: 21,
      image: "imagenes/CollarNegro.webp",
      description: "Collar negro con detalles en plata. Elegante y versátil para cualquier ocasión. Dije central con diseño único y cadena ajustable.",
      shortDescription: "Duis convallis tortor eu mi interdum feugiat. Pellentesque diam dolor, dignissim sit amet metus vitae.",
      isNew: false,
      stock: 9,
      category: "joyeria",
      specifications: {
        material: "Acero quirúrgico",
        dije: "Plata ley",
        largo: "40-45cm",
        estilo: "Gótico"
      }
    },
    11: {
      id: 11,
      name: "Collar verde esmeralda",
      price: 55.00,
      originalPrice: 65.00,
      discount: 15,
      image: "imagenes/CollarVerde.jpg",
      description: "Collar con piedras verdes naturales. Diseño bohemio y artesanal, perfecto para looks casuales y especiales. Piedras naturales seleccionadas.",
      shortDescription: "Maecenas consectetur ultricies mi vel venenatis. Curabitur risus tellus, congue non tellus.",
      isNew: true,
      stock: 6,
      category: "joyeria",
      specifications: {
        piedra: "Cuarzo verde",
        material: "Plata esterlina",
        origen: "Artesanal",
        cuidados: "Evitar químicos"
      }
    },
    12: {
      id: 12,
      name: "Pulsera cubana con cristales",
      price: 100.00,
      originalPrice: 130.00,
      discount: 23,
      image: "imagenes/pulseraCubadaCristales.webp",
      description: "Pulsera cubana con cristales Swarovski. Brillo excepcional y máxima calidad. Diseño unisex, ajustable para mayor comodidad.",
      shortDescription: "Viverra dapibus odio. Mauris lobortis odio nisi, ut pulvinar nisl accumsan non.",
      isNew: true,
      stock: 2,
      category: "joyeria",
      specifications: {
        material: "Oro laminado",
        cristales: "Swarovski",
        ajuste: "Ajustable",
        ocasión: "Especial"
      }
    },
    13: {
      id: 13,
      name: "Pulsera cubana clásica",
      price: 75.00,
      originalPrice: 95.00,
      discount: 21,
      image: "imagenes/pulseraCubana.jpg",
      description: "Pulsera cubana en oro laminado. Diseño clásico y duradero, peso equilibrado para comodidad diaria. Acabado premium.",
      shortDescription: "Aliquam vitae diam elementum ipsum gravida mattis. Nulla facilisi. Etiam eu urna at arcu dignissim tempor.",
      isNew: false,
      stock: 11,
      category: "joyeria",
      specifications: {
        material: "Oro laminado 18k",
        peso: "28g",
        cierre: "Seguro",
        garantia: "1 año"
      }
    }
  };

  // Simular carga de datos
  useEffect(() => {
    const loadProductData = async () => {
      setLoading(true);
      
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const foundProduct = productsDatabase[id];
      setProduct(foundProduct);
      
      if (foundProduct) {
        // Encontrar productos relacionados
        const related = Object.values(productsDatabase)
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    };

    loadProductData();
  }, [id]);

  // Si está cargando
  if (loading) {
    return (
      <main className="contenedor">
        <nav className="navegacion" style={{ marginBottom: '2rem' }}>
          <Link className="navegacion__enlace navegacion__enlace--activo" to="/">
            ← Regresar a Tienda
          </Link>
        </nav>
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <div className="skeleton" style={{ width: '200px', height: '24px', margin: '0 auto 2rem' }}></div>
          <div className="skeleton" style={{ width: '100%', height: '400px', borderRadius: '20px', marginBottom: '2rem' }}></div>
          <div className="skeleton" style={{ width: '80%', height: '20px', margin: '1rem auto' }}></div>
          <div className="skeleton" style={{ width: '60%', height: '20px', margin: '1rem auto' }}></div>
        </div>
      </main>
    );
  }

  // Si el producto no existe
  if (!product) {
    return (
      <main className="contenedor">
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h1>Producto no encontrado</h1>
          <p>El producto que buscas no existe o ha sido removido.</p>
          <Link to="/" className="buttonCompra" style={{ display: 'inline-block', width: 'auto', marginTop: '2rem' }}>
            <div className="buttonCompra-wrapper">
              <div className="text">Volver a la tienda</div>
            </div>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="contenedor">
      {/* Navegación de regreso */}
      <nav className="navegacion" style={{ marginBottom: '2rem' }}>
        <Link 
          className="navegacion__enlace navegacion__enlace--activo" 
          to="/"
        >
          ← Regresar a Tienda
        </Link>
      </nav>

      {/* Componente de detalle del producto */}
      <ProductDetail product={product} />

      {/* Especificaciones del producto */}
      {product.specifications && (
        <section style={{ marginTop: '4rem', background: 'var(--blanco)', padding: '3rem', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '2rem', color: 'var(--secundario)' }}>Especificaciones</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid var(--gris-medio)' }}>
                <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span style={{ color: 'var(--gris-oscuro)' }}>{value}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Productos relacionados */}
      {relatedProducts.length > 0 && (
        <section style={{ marginTop: '4rem' }}>
          <h2>Productos Relacionados</h2>
          <div className="grid">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="producto">
                <Link to={`/producto/${relatedProduct.id}`}>
                  <img 
                    className="producto__imagen" 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    loading="lazy"
                  />
                  <div className="producto__informacion">
                    <p className="producto__nombre">{relatedProduct.name}</p>
                    <p className="producto__precio">${relatedProduct.price}</p>
                    {relatedProduct.discount > 0 && (
                      <span style={{ 
                        color: '#c44', 
                        fontSize: '1.2rem', 
                        textDecoration: 'line-through',
                        marginRight: '0.5rem'
                      }}>
                        ${relatedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Información adicional de envío y garantía */}
      <section style={{ marginTop: '4rem', background: 'var(--gris-claro)', padding: '3rem', borderRadius: '20px' }}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚚</div>
            <h3 style={{ color: 'var(--secundario)' }}>Envío Rápido</h3>
            <p>Recibe tu producto en 2-5 días hábiles. Envío gratis en compras mayores a $50.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
            <h3 style={{ color: 'var(--secundario)' }}>Compra Segura</h3>
            <p>Transacciones 100% seguras con encriptación SSL. Tu información está protegida.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>↩️</div>
            <h3 style={{ color: 'var(--secundario)' }}>Devoluciones</h3>
            <p>30 días para devoluciones. Fácil proceso y reembolsos rápidos.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;