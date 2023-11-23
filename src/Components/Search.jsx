/* import React from 'react';
import './Search.css';

function Search() {

  return (
    <div>
        <form action=""className='searchForm' >
            <select name="transaccion" id="transaccion">
                <option id="opciones" value="Ventas">Ventas</option>
                <option id="opciones" value="Alquiler">Alquiler</option>
            </select>
            <select name="precio" id="precio">
                <option value="U$S">U$S</option>
                <option value="$U">$U</option>
            </select>
            <input type="text" name="precioMin" id="precioMIn" placeholder="Precio mínimo"/>
            <input type="text" name="precioMax" id="precioMax" placeholder="Precio máximo"/>
        </form>
    </div>
  )
}

export default Search */
import './Search.css';
import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import data from './Data'

function Search() {
  const [showDropdown, setShowDropdown] = useState(false);
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
  const priceOptions = ["U$S", "$U"];

  return (
    <div className='searchContainer'>
      <form className="searchForm">
        <div className="dropdown-input-container">
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
          )}</div>

        <div>
          <input
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



