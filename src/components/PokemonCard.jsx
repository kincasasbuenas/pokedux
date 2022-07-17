import React from 'react'
import {Col, Card} from 'antd'
import Meta from 'antd/lib/card/Meta'
import StarButton from './SartButton'
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

const PokemonCard = ({name, image, types, id, favorite}) => {

  const dispatch = useDispatch();
  const metaTypes = types.map( item => item.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Col span={6} xs={24} sm={12} md={8} lg={6} xl={6}>
      <Card 
          title={name}
          style={{width:250, margin: '0 auto'}}
          cover={<img src={image} alt={name} />}
          extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}>
              <Meta description={metaTypes} />
      </Card>
    </Col>
  )
}

export default PokemonCard