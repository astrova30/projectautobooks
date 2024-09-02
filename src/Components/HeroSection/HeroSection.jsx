import React from 'react';
import './HeroSection.css'; // Estilos específicos para HeroSection

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bienvenido a AutobookS</h1>
        <p>Descubre una amplia colección de libros, realiza préstamos fácilmente y accede a recursos exclusivos en línea.</p>
        <a href="#explorar" className="btn">Explorar Libros</a>
        <a href="#acceso" className="btn">Acceder a mi Cuenta</a>
      </div>
    </section>
  );
};

export default HeroSection;