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
    position: relative;
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
  &.text-price {
    color: #b7282e;
    margin-top: 20px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
`

const Text = styled.p`
  padding: 0 10px;
  &.money-format {
    text-decoration: line-through;
    padding: 0;
    padding-right: 4px;
  }

  &.text-name {
    font-size: 1rem;
    color: #333;
  }
  &.newer {
    padding: 8px 4px;
    background-color: #c7c746;
    border-radius: 50%;
    color: white;
    display: inline-block;
    font-weight: 400;
    position: absolute;
    font-size: 0.8rem;
    top: 5px;
    left: 5px;
    transform: rotate(-35deg);
    text-shadow: 1px 1px 3px white;
  }
`
const Image = styled.img`
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const ListBooks = () => {
  const { books, loading } = useSelector((state: RootState) => state.books)
  console.log(books)

  if (loading) return <h1 style={{ height: '370px', width: '100%' }}>Loadding...</h1>
  return (
    <ItemBooks>
      {books?.map((a) => (
        <Items key={a.id} className="grup-item">
          <Link to={`/detailbooks/${a.id}`}>
            <Items className="item">
              <Image src={a.img} alt={a.read_text} />
              <Text className="text-name">{a.name}</Text>
              <Items className="text-price">
                <Text className="money-format">O</Text>
                {a.price} OtaCoin
              </Items>
              <Items> {a.new ? <Text className="newer">New</Text> : ''}</Items>
            </Items>
          </Link>
        </Items>
      ))}
    </ItemBooks>
  )
}

export default ListBooks
