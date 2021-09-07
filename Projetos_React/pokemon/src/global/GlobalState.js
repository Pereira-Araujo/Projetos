import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalContext";
import axios from "axios";
import { pokemonList } from "../server/endpoints";
import { BASE_URL } from "../server/URL";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeBase, setPokeBase] = useState([]);

  const pokeBaseList = () => {
    axios
      .get(`${BASE_URL}${pokemonList}`)
      .then((replication) => setPokeBase(replication.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    pokeBaseList();
  }, []);

  useEffect(() => {
    let pokemonData = [];

    pokeBase.forEach((creature) => {
      axios.get(creature.url).then((replication) => {
        pokemonData.push(replication.data);
        if (pokemonData.length === 24) {
          setPokemons(pokemonData);
        }
      });
    });
  }, [pokeBase]);

  const dataPokemon = { pokemons, setPokemons, pokeBase, setPokeBase };

  return (
    <GlobalStateContext.Provider value={dataPokemon}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
