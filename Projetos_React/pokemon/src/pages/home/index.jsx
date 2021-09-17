import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalContext";
import { PokeMain } from "./style";

const PokemonHome = () => {
  const pokemons = useContext(GlobalStateContext);
  const { setQuantity, setStart } = useContext(GlobalStateContext);

  const perPage = (value) => {
    setQuantity(value);
  };

  const page = (value) => {
    setStart(value);
  };

  return (
    <PokeMain>
      <div>
        {pokemons.pokeBase.map((creature) => {
          return <h3 key={creature.name}>{creature.name}</h3>;
        })}
      </div>

      <footer>
        <label>Pokemons por página:</label>

        <select onChange={(e) => perPage(e.target.value)}>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>

        <ul>
          <li onClick={() => page(0)}>1</li>
          <li onClick={() => page(10)}>2</li>
          <li onClick={() => page(20)}>3</li>
          <li onClick={() => page(30)}>4</li>
          <li onClick={() => page(40)}>5</li>
        </ul>
      </footer>
    </PokeMain>
  );
};

export default PokemonHome;
