import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../state/reducers'
import ListtingImage from '../components/ListtingImage'
import styled from 'styled-components'
import ListtingIntro from '../components/ListtingIntro'

const HeadMean = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 47px);
`
const Row = styled.div`
  display: flex;
`

const TextHead = styled.h1`
  cursor: default;
  text-align: center;
  font-size: 14vw;
  position: relative;
  font-weight: 900;
  background: linear-gradient(90deg, #2ca2b4, #5598de 24%, #7f87ff 45%, #f65aad 76%, #ec3d43);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`
const TextProductName = styled.h1`
  font-size: 4vw;
`
const Introduce = () => {
  const { product, loading } = useSelector((state: RootState) => state.product)

  if (loading) return <h1>Loadding...</h1>
  else
    return (
      <div className="container">
        <HeadMean>
          <TextHead>FIGURE</TextHead>
          <p>Giới thiệu sản phẩm mới</p>
          <TextProductName>{product?.name}</TextProductName>
        </HeadMean>
        <h1>{product?.read_text}</h1>
        <div>{product?.images ? <ListtingImage images={product.images} /> : <p>Loadding...</p>}</div>
        <div></div>
        <p>{product?.text_mean}</p>
        <Row>
          {product?.images ? (
            product.images.map((a, i) => {
              if (i > 0) return <ListtingIntro key={a.parenId} images={a} />
            })
          ) : (
            <p>Loadding...</p>
          )}
        </Row>
      </div>
    )
}

export default Introduce
