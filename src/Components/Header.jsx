import React from 'react';
import './Header.css';
import logo from "../assets/logo.jpg";
import whatsapp from "../assets/whatsapp.png";
import menuHamb from "../assets/hamb.png";
import { useState } from 'react';

function Header() {



  return (
    <div className='header'>
        <section className='headerCompanyName'>
        <img id="logo" src={logo} alt="logo" />
        <article className='headerName' >
        <h2>Gonzalez</h2>
        <h6>Negocios Inmobiliarios</h6>
        </article>
        </section>
        <section className='navbar' >
            <article className='navBarContact'>
                <img id='logoWhatsapp' src={whatsapp} alt="whatsappLogo" />
                <span className='phoneNumber'>099877643</span></article>
        <nav>
            <img id='menuHamb' src={menuHamb} alt="menuHamburguesa" />
            <button className='headerButton'>Venta</button>
            <button className='headerButton'>Alquiler</button>
            <button className='headerButton'>Sobre Nosotros</button>
            <button className='headerButton'>Contacto</button>
        </nav>  
        </section>  
    </div>
  )
}

export default Header