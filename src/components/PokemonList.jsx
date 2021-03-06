import React from 'react'
import PokemonCard from './PokemonCard'
import '../styles/PokemonList.css'

const PokemonList = ({pokemons}) => {
  return (
    <>
        {
          pokemons.length === 0 ?
           (
            <p> no se encontraron resultados</p>
           )
           :
           (
            <>
              {pokemons.map((pokemon)=>{
                return <PokemonCard  
                  name={pokemon.name} 
                  image={pokemon.sprites.front_default}
                  types={pokemon.types}
                  id={pokemon.id}
                  favorite={pokemon.favorite}
                  key={pokemon.name}/>
            })}
            </>
           )
        }
        
    </>
  )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}
export default PokemonList
