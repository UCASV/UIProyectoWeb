import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="contenedor">
      <h1>Nosotros</h1>

      <div className="nosotros">
        <div className="nosotros__contenido">
          <p>
            En <strong>MercaUca</strong> nos dedicamos a ofrecer productos de la más alta calidad 
            a precios accesibles. Nuestra misión es conectar a compradores y vendedores en una 
            plataforma confiable y fácil de usar.
          </p>

          <p>
            Fundada en 2025, MercaUca nació con la visión de crear un espacio donde la comunidad 
            universitaria y local pueda comprar y vender artículos de manera segura y eficiente. 
            Creemos en el comercio justo y en construir relaciones duraderas con nuestros clientes.
          </p>

          <p>
            Todos nuestros productos pasan por un riguroso proceso de verificación para garantizar 
            su autenticidad y calidad. Trabajamos directamente con artesanos y proveedores 
            confiables para brindarte lo mejor.
          </p>

          <div className="mt-4">
            <h3>Nuestros Valores</h3>
            <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: '#980404' }}>
              <li>Calidad garantizada en todos los productos</li>
              <li>Precios justos y transparentes</li>
              <li>Atención al cliente excepcional</li>
              <li>Compromiso con la comunidad</li>
              <li>Innovación constante</li>
            </ul>
          </div>
        </div>
        
        <img 
          className="nosotros__imagen" 
          src="imagenes/uca.jpg" 
          alt="Universidad MercaUca" 
        />
      </div>

      <section className="comprar mt-5">
        <h2 className="comprar__titulo">¿Porqué Comprar con nosotros?</h2>

        <div className="bloques">
          <div className="bloque">
            <img 
              className="bloque__imagen" 
              src="imagenes/precio.png" 
              alt="El mejor precio" 
            />
            <h3 className="bloque__titulo">El Mejor Precio</h3>
            <p>
              Ofrecemos precios competitivos sin comprometer la calidad. 
              Garantizamos que encontrarás las mejores ofertas del mercado.
            </p>
          </div>

          <div className="bloque">
            <img 
              className="bloque__imagen" 
              src="imagenes/inclusion.png" 
              alt="Para todos" 
            />
            <h3 className="bloque__titulo">Para todos</h3>
            <p>
              Nuestra plataforma está diseñada para ser accesible para todos. 
              Desde estudiantes hasta profesionales, todos son bienvenidos.
            </p>
          </div>

          <div className="bloque">
            <img 
              className="bloque__imagen" 
              src="imagenes/envio.png" 
              alt="Envío gratis" 
            />
            <h3 className="bloque__titulo">Envío Gratis</h3>
            <p>
              En compras mayores a $50, el envío es completamente gratis. 
              Entregamos en todo el país con los mejores tiempos.
            </p>
          </div>

          <div className="bloque">
            <img 
              className="bloque__imagen" 
              src="imagenes/calidad.png" 
              alt="La mejor calidad" 
            />
            <h3 className="bloque__titulo">La Mejor Calidad</h3>
            <p>
              Cada producto es verificado minuciosamente antes de ser listado. 
              Calidad premium garantizada en cada compra.
            </p>
          </div>
        </div>
      </section>

      {/* Sección adicional de información */}
      <section className="mt-5">
        <div className="bloques">
          <div className="bloque">
            <h3 className="bloque__titulo">📍 Ubicación</h3>
            <p>
              <strong>Universidad MercaUca</strong><br />
              Ciudad Universitaria<br />
              San Salvador, El Salvador<br />
              Tel: (503) 2222-2222
            </p>
          </div>

          <div className="bloque">
            <h3 className="bloque__titulo">🕒 Horarios</h3>
            <p>
              <strong>Lunes a Viernes:</strong><br />
              8:00 AM - 6:00 PM<br />
              <strong>Sábados:</strong><br />
              9:00 AM - 2:00 PM<br />
              <strong>Domingos:</strong> Cerrado
            </p>
          </div>

          <div className="bloque">
            <h3 className="bloque__titulo">💼 Vende con Nosotros</h3>
            <p>
              ¿Quieres vender tus productos?<br />
              Regístrate como vendedor y llega a miles de clientes potenciales.
            </p>
            <Link 
              to="/vender" 
              className="buttonCompra" 
              style={{ display: 'inline-block', width: 'auto', marginTop: '1rem' }}
            >
              <div className="buttonCompra-wrapper">
                <div className="text">Empezar a Vender</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;