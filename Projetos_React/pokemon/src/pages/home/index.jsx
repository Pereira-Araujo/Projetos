import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalContext";

const PokemonHome = () => {
    const pokemons = useContext(GlobalStateContext);
    const {page,setPage} = useContext(GlobalStateContext);
    const { begin, setBegin } = useContext(GlobalStateContext);


    const add = () => {
        setPage(20)
    }

    return (
        <main>
            {pokemons.pokeBase.map((creature) => {
                return <h3 key={creature.id}>{creature.name}</h3>
            })}

            <button onClick={add}>10</button>
        </main>

    )
};

export default PokemonHome;
