
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Search from './components/Search';
import { Col, Spin, Row } from 'antd';
import './App.css';
import PokemonList from './components/PokemonList';
import logo from './assets/logo.svg'
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {

  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
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
