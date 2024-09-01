import React from 'react'
import './Navbar.css'
import logo from '../Assets/logotipo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src ={logo} height="100px" alt=''/>
        <p>AUTOBOOKS</p>
      </div>

      <ul className='nav-menu'>
        <li>Menú <hr/></li>
        <li>Catálogo</li>
        <li>Inicio de sesion</li>
      </ul>
      <div className='nav-login-cart'>
        <button>Inicia Sesión</button>
      </div>
    </div>
  )
}






export default Navbar