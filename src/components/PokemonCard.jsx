import React from 'react'
import {Card} from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

const PokemonCard = ({name, image}) => {
  return (
    <Card 
        title={name}
        style={{width:250}}
        cover={<img src={image} alt={name} />}
        extra={<StarOutlined/>}>
            <Meta description="fire" />
    </Card>
  )
}

export default PokemonCard