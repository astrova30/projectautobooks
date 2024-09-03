import React from 'react';
import './HeroSection.css'; // Estilos específicos para HeroSection
//import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bienvenido a AutobookS</h1>
        <p>Descubre una amplia colección de libros, realiza préstamos fácilmente y accede a recursos exclusivos en línea.</p>
        <a href="#catalogo-libros" className="btn">Explorar Libros</a>

        <a href="/login" className="btn">Acceder a mi Cuenta</a>
      </div>
    </section>
  );
};

export default HeroSection;
