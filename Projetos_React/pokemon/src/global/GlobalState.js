import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalContext";
import axios from "axios";
import { endpointList } from "../server/endpoints";
import { BASE_URL } from "../server/URL";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeBase, setPokeBase] = useState([]);
  const [start, setStart] = useState(0);
  const [quantity, setQuantity] = useState(10);

  const pokeBaseList = () => {
    axios
    .get(`${BASE_URL}${endpointList(quantity,start)}`)
    .then((replication) => setPokeBase(replication.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    pokeBaseList();

    let pokemonData = [];

    pokeBase.forEach((creature) => {
      axios.get(creature.url).then((replication) => {
        pokemonData.push(replication.data);
          setPokemons(pokemonData);
        
      });
    });
  }, [pokeBase]);

  const dataPokemon = {
    pokemons,
    setPokemons,
    pokeBase,
    setPokeBase,
    quantity,
    setQuantity,
    start,
    setStart,

  };

  return (
    <GlobalStateContext.Provider value={dataPokemon}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;


