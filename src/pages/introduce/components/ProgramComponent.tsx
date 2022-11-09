import React from 'react'
import { Text, ViewDiv, Image } from './Programs'
import { TypeProgram } from '../../../interface'
interface ProgramProps {
  item: TypeProgram
}
const ProgramComponent: React.FC<ProgramProps> = (props) => {
  const { item } = props
  return (
    <ViewDiv className="container-item">
      <ViewDiv className="image-item">
        <ViewDiv className="image-scalc">
          <Image className="image-radios" src={item.img} alt="toc dep" />
          <ViewDiv className="g-text-g">
            <Text className="text-sale">{item.sale}</Text>
            <Text className="text-on">Trên sản phẩm</Text>
          </ViewDiv>
          <ViewDiv className="line-garen"></ViewDiv>
        </ViewDiv>
      </ViewDiv>
      <ViewDiv className="text-mean">
        <Text className="t-mean-head">{item.title}</Text>
        <Text className="t-mean-foot">{item.content}</Text>
      </ViewDiv>
    </ViewDiv>
  )
}

export default ProgramComponent
