import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt='40px' width='50px'/>
            <p>ANDINOS</p>
        </div>
        <ul className='footer-links'>
            <li>Compañía</li>
            <li>Aliados</li>
            <li>Acerca de...</li>
            <li>Contacto</li>

        </ul>

        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={instagram_icon} alt='10px' width='30px'/>
            </div>

            <div className='footer-icons-container'>
                <img src={pintester_icon} alt='10px' width='30px'/>
            </div>

            <div className='footer-icons-container'>
                <img src={whatsapp_icon} alt='10px' width='30px'/>
            </div>

        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2024 - Todos los derechos reservados.</p>
        </div>
    </div>
  )
}

export default Footer