import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../state/reducers'
import LittingProduct from './LittingProduct'

const Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;
`

const ListProducts = () => {
  const { products, loading } = useSelector((state: RootState) => state.products)
  if (loading) return <h1 style={{ height: '370px', width: '100%' }}>Loadding ...</h1>
  return (
    <Items>
      {products?.map((a) => (
        <LittingProduct key={a.id} prods={a} />
      ))}
    </Items>
  )
}

export default ListProducts
