import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalContext";

const PokemonHome = () => {
  const pokemons = useContext(GlobalStateContext);
  const { setQuantity,setStart } = useContext(GlobalStateContext);

  const perPage = (value) => {
    setQuantity(value);
  };

  const page = (value) => {
    setStart(value);
  };

  return (
    <main>
      {pokemons.pokeBase.map((creature) => {
        return <h3 key={creature.name}>{creature.name}</h3>;
      })}
      <p>Quantidade de pokemons por página</p>
      <select onChange={(e) => perPage(e.target.value)}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>

      <ul>
        <li onClick={() => page(0)}>1</li>
        <li onClick={() => page(10)}>2</li>
        <li onClick={() => page(20)}>3</li>
        <li onClick={() => page(30)}>4</li>
        <li onClick={() => page(40)}>5</li>
      </ul>
    </main>
  );
};

export default PokemonHome;
