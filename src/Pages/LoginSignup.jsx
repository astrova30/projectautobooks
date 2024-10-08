import React, { useState } from 'react';
import '../Pages/CSS/LoginSignup.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Asegúrate de que la ruta sea correcta

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Usa el contexto de autenticación

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Inicio de sesión con', email, password);
    login(); // Actualiza el estado de autenticación
    window.location.href = '/'; // Redirige al usuario a la página principal
  };

  const fontStyle = { 
    fontFamily: 'Cursive', 
    fontWeight: 'bold', 
    fontStyle: 'oblique', 
    fontSize: '16px', 
    marginBottom: '15px'
  };

  const inputStyle = {
    ...fontStyle, 
    padding: '12px', 
    borderRadius: '8px', 
    border: '1px solid #a1887f', 
    backgroundColor: '#f9f4ef',
  };

  const buttonStyle = {
    ...fontStyle,
    padding: '12px 20px',
    backgroundColor: '#8b5e3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(83, 53, 28, 0.2)',
    marginTop: '20px'
    

  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#6e4227',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 12px rgba(83, 53, 28, 0.3)'
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Correo SoySena" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
          style={inputStyle} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
          style={inputStyle} 
        />
        <button 
          type="submit" 
          className="login-button" 
          style={buttonStyle}
          onMouseOver={(e) => e.currentTarget.style = buttonHoverStyle}
          onMouseOut={(e) => e.currentTarget.style = buttonStyle}
        >
          Iniciar Sesión
        </button>
        <div className='link'>
          <Link to="/forgot-password">Recuperar contraseña</Link>  
          <br />o
          <br />
          <Link to="/register">Crear cuenta</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;