import React from 'react'
import { TypeListImage } from '../interface'
import styled, { keyframes } from 'styled-components'
import LazyLoad from 'react-lazy-load'

interface Props {
  images: TypeListImage[]
}

const Image = styled.img`
  width: 100%;
`
const ImageRo = styled.img`
  width: 100%;
  transform: rotateY(180deg);
`
const GrupImg = styled.div`
  display: block;
  position: relative;
`
const textmoveleft = keyframes`
 0%{
    left: 30%;
    color:transparent;
    }
  40% {
     left: 20%;
     color: transparent;
    }
    70% {
      left: 8%;
      color: transparent;
    }
    100% {
      left: 5%;
      color: #333;
    }

`
const textmoveright = keyframes`
  0%{
    right: 30%;
    color:transparent;
    }
  40% {
     right: 20%;
     color: transparent;
    }
    70% {
      right: 8%;
      color: transparent;
    }
    100% {
      right: 5%;
      color: #333;
    }

`
const TextTranform = styled.h1`
  font-size: 2vw;
  position: absolute;
  width: 110px;
  bottom: 60%;
  left: 5%;
  color: black;
  animation: ${textmoveleft} 2s linear;
  @media (max-width: 1080px) {
    width: 60px;
  }
  @media (max-width: 720px) {
    width: 45px;
  }
`
const TextTranformTwo = styled.h1`
  position: absolute;
  width: 140px;
  font-size: 2vw;
  bottom: 40%;
  right: 5%;
  color: black;
  animation: ${textmoveright} 4s linear;
  @media (max-width: 1080px) {
    width: 70px;
  }
  @media (max-width: 720px) {
    width: 55px;
  }
`
const DFlex = styled.div`
  display: flex;
  justify-content: center;
`
const DivItem = styled.div`
  width: 33.333333%;
  padding: 0 20px;
`

const ListtingImage: React.FC<Props> = (props) => {
  const { images } = props
  return (
    <>
      <GrupImg>
        <LazyLoad height={0}>
          <>
            <TextTranform>Thật đẹp ...</TextTranform>
            <TextTranformTwo>Phải không ?</TextTranformTwo>
          </>
        </LazyLoad>
        <DFlex>
          <DivItem>
            <ImageRo src={images[0].img} alt={images[0].parenId} />
          </DivItem>
          <DivItem>
            <Image src={images[0].img} alt={images[0].parenId} />
          </DivItem>
        </DFlex>
      </GrupImg>
    </>
  )
}

export default ListtingImage
