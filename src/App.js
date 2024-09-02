import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoadingPage from './Components/LoadingPage/LoadingPage'; // Importa el componente de carga
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import HeroSection from './Components/HeroSection/HeroSection';
import BookPreview from './Components/BookPreview/BookPreview';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs';
import CardGrid from './Components/CardGrid/CardGrid';
// Componente principal de la aplicación
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos o una operación asíncrona
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); // Ajusta el tiempo según la duración de tu carga

    // Limpia el timer cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <Navbar />
          <HeroSection />
          <Routes>
            <Route path="/" element={<><BookPreview />
            <CardGrid /> {/*CardGrid solo se muestra en la página de inicio*/}</>} />
            <Route path="/catalogo" element={<LoginSignup />} />
            <Route path="/quienes_somos" element={<AboutUs />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;