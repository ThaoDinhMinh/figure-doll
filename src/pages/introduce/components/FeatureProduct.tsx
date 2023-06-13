import React from 'react'
import { TypeFeatureProduct } from '../../../interface'
import { ViewDiv, Text, Image } from '../Introduce'
import ScrollView from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import { Action } from '../../../state/actions'

interface Props {
  featureProduct: TypeFeatureProduct
  changeLinkColor: (color: number) => (dispatch: Dispatch<Action>) => void
}

const FeatureProduct: React.FC<Props> = (props) => {
  const { featureProduct, changeLinkColor } = props
  return (
    <ViewDiv className="g-items-scroll col-12 col-lg-4 col-md-6">
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
              <Link
                to={'/aboutus'}
                onClick={() => {
                  window.scrollTo(0, 135)
                  changeLinkColor(5)
                }}
              >
                <Text className="btn-see-more">Xem thêm</Text>
              </Link>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ScrollView>
    </ViewDiv>
  )
}

export default FeatureProduct
