import { log } from 'console'
import React from 'react'
import { TypeListImage } from '../interface'
import styled from 'styled-components'
import { DivColThree } from '../styled'

const Image = styled.img`
  width: 100%;
`

interface Props {
  images: TypeListImage
}

const ListtingIntro: React.FC<Props> = (props) => {
  const { images } = props

  return (
    <>
      <DivColThree>
        <Image src={images.img} alt={images.parenId} />
      </DivColThree>
    </>
  )
}

export default ListtingIntro
