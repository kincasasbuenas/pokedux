import React from 'react'
import PokemonCard from './PokemonCard'
import '../styles/PokemonList.css'

const PokemonList = ({pokemons}) => {
  return (
    <>
        {pokemons.map((pokemon)=>{
            return <PokemonCard  
              name={pokemon.name} 
              image={pokemon.sprites.front_default}
              key={pokemon.name}/>
        })}
    </>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}
export default PokemonList
