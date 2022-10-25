import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../state/reducers'
const ItemBooks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -5px;
  margin-right: -5px;
`
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

const ListBooks = () => {
  const { books, loading } = useSelector((state: RootState) => state.books)

  if (loading) return <h1 style={{ height: '370px', width: '100%' }}>Loadding...</h1>
  return (
    <ItemBooks>
      {books?.map((a) => (
        <Items key={a.id} className="grup-item">
          <Link to={`/detailbooks/${a.id}`}>
            <Items className="item">
              <Image src={a.img} alt={a.read_text} />
              <Text>{a.name}</Text>
              <Text>{a.price} OtaCoin</Text>
            </Items>
          </Link>
        </Items>
      ))}
    </ItemBooks>
  )
}

export default ListBooks
