import React from 'react';
import whatsapp from "../assets/whatsapp.png";
import "./footer.css";

function Footer() {
  return (
    <div className='footerContainer'>
        <section className='footerText'>
        <h4>Gonzalez Negocios Inmobiliarios</h4>
        <p>Montevideo-Ciudad de la Costa</p>
        <p><img id='logoWhatsapp' src={whatsapp} alt="whatsappLogo"/> <span className='phoneNumber'>099877643</span></p>
        <p>gonzaleznegociosinmobiliiarios@gmail.com</p>
        </section>
    </div>
  )
}

export default Footer