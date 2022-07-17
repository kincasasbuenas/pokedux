
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from './components/Search';
import { Col, Spin, Row } from 'antd';
import './App.css';
import PokemonList from './components/PokemonList';
import logo from './assets/logo.svg'
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading  } from './actions';

function App() {

  const pokemons = useSelector((state) => state.get('pokemons')).toJS();
  const loading = useSelector((state) => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fecthPokemons = async () => {
      dispatch(setLoading(true));
      const resultPokemons = await getPokemon();
      dispatch(getPokemonsWithDetails(resultPokemons));
      dispatch(setLoading(false));
    }
    fecthPokemons();
  }, [])
  
  return (
    <div className="App">
      <Row justify={'center'}>
        <Col xs={12} md={12} >
          <img src={logo} className="logo" alt='Pokedux' />
        </Col>
      </Row>
      <Row justify={'center'} >
        <Col xs={12} md={12}>
          <Search/>
        </Col>
      </Row>
      <Row justify={'center'} gutter={[15, 15]} style={{marginTop:30}}>
        {loading ? (
          <Col xs={12} md={12}>
            <Spin spinning size='large' />
          </Col>
        ) : (
          <PokemonList pokemons={pokemons} />
        )}
      </Row>
    </div>
  );
}


export default App;
