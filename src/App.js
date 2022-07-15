
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Search from './components/Search';
import { Col } from 'antd/lib/grid';
import './App.css';
import PokemonList from './components/PokemonList';
import logo from './assets/logo.svg'
import { getPokemon } from './api';
import { setPokemons as setPokemonsActions } from './actions';

function App({ pokemons, setPokemons }) {

  //const [pokemons, setPokemons] = useState([]);

  useEffect(() => {

    const fecthPokemons = async () => {
      const resultPokemons = await getPokemon();
      setPokemons(resultPokemons);
    }

    fecthPokemons();
  }, [])
  
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} className="logo" alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Search/>
      </Col>
      <Col span={14} offset={2}>
        <PokemonList pokemons={pokemons}/>
      </Col>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
