import React, { useState } from 'react';
import data from './Data';
import './PhotoGallery.css';
import previous from '../assets/flechaIzq.png';
import next from '../assets/flechaDerecha.png';
import { FaHouseDamage, FaBed, FaBath } from 'react-icons/fa';

function PhotoGallery() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="photo-gallery">
      <div className="photo-container">
        <img id="photo" src={data[currentPhotoIndex].foto} alt={`Foto ${currentPhotoIndex}`} />
      </div>
      <div className="carousel-buttons">
        <button onClick={goToPreviousPhoto}><img className='previousPhoto' src={previous} alt="previousPhoto" /></button>
        <button onClick={goToNextPhoto}><img className='nextPhoto' src={next} alt="nextPhoto" /></button>
        </div>
       <div className='infoPhoto'>
        <section className='infoSection'>
        <h3><FaHouseDamage className="bigIcon"/> {data[currentPhotoIndex].mts2}</h3>
        <h3><FaBed size={'30px'}/> Dorm: {data[currentPhotoIndex].dormitorios}</h3>
        <h3><FaBath size={'30px'}/> Baños: {data[currentPhotoIndex].baños}</h3>
        </section>
        <section className='priceSection'>
        <h3>{data[currentPhotoIndex].precio}</h3>
        </section>
      </div>
    </div>
  );
}

export default PhotoGallery;
