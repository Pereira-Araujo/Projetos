import React, { useState, useEffect } from 'react'
import { list } from '../../server/api'

const PokemonHome = () => {

    useEffect(() => {
        list()
    })

    let pokemon = list()
    return (
        <main>
           {pokemon.map((each)=>{
               return each.name
           })}
        </main>
    )
}

export default PokemonHome