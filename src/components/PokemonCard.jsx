import React from 'react'
import {Card} from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

const PokemonCard = ({name}) => {
  return (
    <Card 
        title={name}
        style={{width:250}}
        cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='charizar'/>} 
        extra={<StarOutlined/>}>
            <Meta description="fire" />
    </Card>
  )
}

export default PokemonCard