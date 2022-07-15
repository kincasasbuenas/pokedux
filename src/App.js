
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from './components/Search';
import { Col } from 'antd/lib/grid';
import './App.css';
import PokemonList from './components/PokemonList';
import logo from './assets/logo.svg'
import { getPokemon } from './api';
import { setPokemons } from './actions';

function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fecthPokemons = async () => {
      const resultPokemons = await getPokemon();
      dispatch(setPokemons(resultPokemons));
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


export default App;
