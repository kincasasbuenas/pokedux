import React from 'react'
import {Col, Card, AutoComplete} from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

const PokemonCard = ({name, image}) => {
  return (
    <Col span={6} xs={24} sm={12} md={8} lg={6} xl={6}>
      <Card 
          title={name}
          style={{width:250, margin: '0 auto'}}
          cover={<img src={image} alt={name} />}
          extra={<StarOutlined/>}>
              <Meta description="fire" />
      </Card>
    </Col>
  )
}

export default PokemonCard