import React from 'react'
import { TypeFeatureProduct } from '../../../interface'
import { ViewDiv, Text, Image } from '../Introduce'
import ScrollView from 'react-animate-on-scroll'

interface Props {
  featureProduct: TypeFeatureProduct
}

const FeatureProduct: React.FC<Props> = (props) => {
  const { featureProduct } = props
  return (
    <ViewDiv className="g-items-scroll">
      <ScrollView animateOnce={true} animateIn="animate__fadeInDown" duration={featureProduct.duration}>
        <ViewDiv className="card-item">
          <ViewDiv className="img-g-item">
            <Image src={featureProduct.img} alt={featureProduct.title} />
          </ViewDiv>
          <ViewDiv className="g-text-scoll">
            <ViewDiv className="text-number">
              <Text className="number-radius">{featureProduct.count}</Text>
            </ViewDiv>
            <ViewDiv className="text-number">
              <Text className="text-head-card">{featureProduct.title}</Text>
            </ViewDiv>

            <ViewDiv className="text-number">
              <Text className="text-card-mean">{featureProduct.content}</Text>
            </ViewDiv>

            <ViewDiv className="text-number">
              <Text className="btn-see-more">Xem thêm</Text>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ScrollView>
    </ViewDiv>
  )
}

export default FeatureProduct
