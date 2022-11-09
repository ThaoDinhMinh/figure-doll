import React from 'react'
import { TypeUiProduct } from '../../../interface'
import { ViewDiv, Text, Image } from './ProductFeatured'
interface Props {
  item: TypeUiProduct
}

const ProductUiFeature: React.FC<Props> = (props) => {
  const { item } = props
  return (
    <ViewDiv className="item-wid">
      <ViewDiv className="item">
        <ViewDiv className="product-show">
          <Image className="img-product" src={item.img} />
        </ViewDiv>
        <ViewDiv className="product-hilden">
          <Image className="img-hilden" src={item.img_hide} />
        </ViewDiv>
        <ViewDiv className="hilden-div-opa"></ViewDiv>
      </ViewDiv>
      <ViewDiv className="text-background">
        <ViewDiv className="text-name">
          <Text className="text">{item.title}</Text>
        </ViewDiv>
        <ViewDiv className="g-price">
          <Text className="price-nomal">{Number(item.price).toLocaleString('en-US')} đ</Text>
          <Text className="price-new">
            {(Number(item.price) - (Number(item.price) * item.sale) / 100).toLocaleString('en-US')} đ
          </Text>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default ProductUiFeature
