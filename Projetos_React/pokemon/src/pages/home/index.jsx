import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalContext";

const PokemonHome = () => {
    const pokemons = useContext(GlobalStateContext);

    return <main>{pokemons.pokeBase.map((creature) => {
        return <h3>{creature.name}</h3>
    })}</main>;
};

export default PokemonHome;
