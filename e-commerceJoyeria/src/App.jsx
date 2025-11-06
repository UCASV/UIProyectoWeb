// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ProductPage from './pages/ProductPage';
import './styles/normalize.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/producto/:id" element={<ProductPage />} />
          <Route path="/vender" element={<About />} />
          <Route path="/vendedores" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;