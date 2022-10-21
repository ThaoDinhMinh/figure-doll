import React from 'react'
import { TypeListImage } from '../interface'
import styled from 'styled-components'
interface Props {
  imgls: TypeListImage[]
}

const Image = styled.img`
  width: 100%;
`
const Col = styled.div`
  width: 30%;
`
const ColGrup = styled.div`
  display: flex;
`

const ListingGallery: React.FC<Props> = (props) => {
  const { imgls } = props
  return (
    <ColGrup>
      {imgls.map((a, i) => (
        <Col key={i}>
          <Image src={a.img} alt={a.parenId} />
        </Col>
      ))}
    </ColGrup>
  )
}

export default ListingGallery
