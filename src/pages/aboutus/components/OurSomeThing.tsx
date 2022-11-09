import React from 'react'
import { TypeUplate } from '../../../interface'
import { ViewDiv, Text, Button, Image } from '../AboutUs'

interface OurProps {
  item: TypeUplate
}

const OurSomeThing: React.FC<OurProps> = (props) => {
  const { item } = props
  return (
    <ViewDiv className={'offer-card ' + `${item.class}`}>
      <ViewDiv className="offer-img">
        <Image className="offer-img-item" src={item.img} alt="anh chuyen gia" />
      </ViewDiv>
      <ViewDiv className="offer-text">
        <Text className="offer-text-head">{item.title}</Text>
        <Text className="offer-text-mean">{item.content}</Text>
        <ViewDiv className="offer-btn">
          <Button>Cửa hàng</Button>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default OurSomeThing
