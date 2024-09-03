import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoadingPage from './Components/LoadingPage/LoadingPage'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import HeroSection from './Components/HeroSection/HeroSection';
import BookPreview from './Components/BookPreview/BookPreview';
import Footer from './Components/Footer/Footer';
import AboutUs from './Pages/AboutUs';
import CardGrid from './Components/CardGrid/CardGrid';
import LoginRegister from './Pages/LoginRegister';
import ForgotPassword from './Pages/ForgotPassword';
import { AuthProvider } from './Context/AuthContext'; // Cambiar importación

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthProvider> {/* Cambiado de AuthContext a AuthProvider */}
      <div>
        {loading ? (
          <LoadingPage />
        ) : (
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<><HeroSection /><BookPreview /><CardGrid /></>} />
              <Route path="/catalogo" element={<LoginSignup />} />
              <Route path="/quienes_somos" element={<AboutUs />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/register" element={<LoginRegister />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
