import React from 'react'
import styled from 'styled-components'
import { TypeProduct } from '../interface'
import { Link } from 'react-router-dom'

interface Props {
  prods: TypeProduct
}
const Items = styled.div`
  transition: all 0.2s linear;
  border-radius: 4px;
  &.grup-item {
    width: 20%;
    padding: 5px 5px;
  }
  &.item {
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 12%);
    height: 360px;
    border-radius: 4px;
  }
  &:hover &.item {
    box-shadow: 0 1px 12px 0 rgb(0 0 0 / 40%);
    cursor: pointer;
    border-radius: 4px;
  }
`

const Text = styled.p`
  padding: 0 10px;
`
const Image = styled.img`
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const LittingProduct: React.FC<Props> = (props) => {
  const { prods } = props
  return (
    <Items className="grup-item">
      <Link to={`/detail/${prods.id}`}>
        <Items className="item">
          <Image src={prods.img} alt={prods.read_text} />
          <Text>{prods.name}</Text>
          <Text>{prods.price} OtaCoin</Text>
        </Items>
      </Link>
    </Items>
  )
}

export default LittingProduct
