import './Search.css';
import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import data from './Data'

function Search() {
 /*  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [selectedPriceOption, setSelectedPriceOption] = useState("");
  const [estatesList, setEstatesList] = useState(data);
  const [searchValue, setSearchValue] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };
  const togglePriceDropdown = () => {
    setShowPriceDropdown(!showPriceDropdown);
  };

  const handlePriceOptionClick = (priceOptions) => {
    setSelectedPriceOption(priceOptions);
    setShowPriceDropdown(false);
  };

  const filteredEstateList = estatesList.filter((estate) =>
    estate.tipo_de_propiedad.toLowerCase().includes(searchValue.toLowerCase())
  );

  const options = ["Ventas", "Alquiler"];
  const priceOptions = ["U$S", "$U"]; */

  return (
    <div className='searchContainer'>
      <form className="searchForm">
        {/* <div className="dropdown-input-container">
          <input
            type="text"
            name="transactionInput"
            id="transactionInput"
            placeholder="Ventas"
            onClick={toggleDropdown}
            value={selectedOption}
          />
          {showDropdown && (
            <div className="dropdown">
              <ul className='lista'>
                {options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
<<<<<<< HEAD
          )}</div>

        <div>
          <input
=======
          )}</div> */}
          {/* <div>
           <input
>>>>>>> 09b8606386247ecfcb40b999cb3d2a38249ab962
            type="text"
            name="priceInput"
            id="priceInput"
            placeholder="U$S"
            onClick={togglePriceDropdown}
            value={selectedPriceOption}
          />
          {showPriceDropdown && (
            <div className="dropdown">
              <ul className='lista'>
                {priceOptions.map((priceOption, index) => (
                  <li key={index} onClick={() => handlePriceOptionClick(priceOption)}>
                    {priceOption}
                  </li>
                ))}
              </ul>
            </div>
          )}
<<<<<<< HEAD
        </div>
        <input
          type="text"
          name="PrMinInput"
          id="PrMinInput"
          placeholder="Precio mínimo" />
        <input
          type="text"
          name="PrMaxInput"
          id="PrMaxInput"
          placeholder="Precio máximo" />
        <select
          type="text"
          name="tipoPropInput"
          id="tipoPropInput"
          placeholder="Tipo de propiedad" />
        <input
          type="text"
          name="zonaInput"
          id="zonaInput"
          placeholder="Zonas" />
        <input
          type="text"
          name="habInput"
          id="habInput"
          placeholder="Habitaciones" />
        <input
          type="text"
          name="bañoInput"
          id="bañoInput"
          placeholder="Baños" />
        <input
          type="text"
          name="refInput"
          id="refInput"
          placeholder="Referencia" />
        <button>Buscar</button>
        <button><CiHeart className='heart' /></button>
=======
          </div> */}
          <select id="transaccionSelect">
             <option value="ventas" selected>Ventas</option>
             <option value="alquileres">Alquileres</option>
        </select>
        <select id="tipoMonedaSelect">
             <option value="U$S" selected>U$S</option>
             <option value="$U">$U</option>
        </select>
          <input
            type="text"
            name="PrMinInput"
            id="PrMinInput"
            placeholder="Precio mínimo"/>
            <input
            type="text"
            name="PrMaxInput"
            id="PrMaxInput"
            placeholder="Precio máximo"/>
        <select id="tipoPropSelect">
             <option value="" disabled selected hidden>Tipo de propiedad</option>
             <option value="casas">Casas</option>
             <option value="apartamentos">Apartamentos</option>
             <option value="terrenos">Terrenos</option>
        </select>
             <input
            type="text"
            name="zonaInput"
            id="zonaInput"
            placeholder="Zonas"/>
            <select id="habSelect">
             <option value="" disabled selected hidden>Habitaciones</option>
             <option value="monoambiebte">Monoambiente</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5omas">5 o más</option>
        </select>
        <select id="bañoSelect">
             <option value="" disabled selected hidden>Baños</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5omas">5 o más</option>
        </select>
            <input
            type="text"
            name="refInput"
            id="refInput"
            placeholder="Referencia"/>
            <button className='buscarButton'>Buscar</button>
            <button className='heartButton'><CiHeart className='heart'/></button>
>>>>>>> 09b8606386247ecfcb40b999cb3d2a38249ab962
      </form>
      <div className='estates-list-container'>
        {filteredEstateList.map((estate) => (
          <div className='container' key={estate.id}>

            <div className="estate">

              <img src={estate.foto} />

              <div className="bg"></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;



