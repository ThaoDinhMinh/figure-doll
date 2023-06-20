import React from 'react'
import { Text, ViewDiv, Image } from './Programs'
import { TypeProgram } from '../../../interface'
import { Link } from 'react-router-dom'
interface ProgramProps {
  item: TypeProgram
}
const ProgramComponent: React.FC<ProgramProps> = (props) => {
  const { item } = props
  return (
    <ViewDiv className="col-lg-4 col-md-6 col-12">
      <div className="container-item">
        <Link to={'/shop'} onClick={() => window.scrollTo(0, 135)}>
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
        </Link>
        <ViewDiv className="text-mean">
          <Text className="t-mean-head">{item.title}</Text>
          <Text className="t-mean-foot">{item.content}</Text>
        </ViewDiv>
      </div>
    </ViewDiv>
  )
}

export default ProgramComponent
