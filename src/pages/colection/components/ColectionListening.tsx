import React from 'react'
import { TypeCategory } from '../../../interface'
import styled from 'styled-components'

const ViewDiv = styled.div`
  &.card-category {
    width: 33.333333%;
    padding: 15px;
  }
  img {
    width: 100%;
    display: block;
  }
  .item {
    text-align: center;
    box-shadow: 1px 1px 5px #0a05052c;
    cursor: pointer;
  }
  p {
    padding-top: 12px;
  }
  .p-bot {
    padding-bottom: 24px;
    font-weight: 300;
    font-size: 1rem;
  }
  .name-category {
    font-size: 1.2rem;
    font-weight: 500;
    transition: all 0.3s linear;
    &:hover {
      color: #d3ad69;
    }
  }
`

interface CategoryProps {
  item: TypeCategory
}

const ColectionListening: React.FC<CategoryProps> = (props) => {
  const { item } = props
  return (
    <ViewDiv className="card-category">
      <div className="item">
        <img src={item.img} alt={item.text} />
        <p className="name-category">{item.text}</p>
        <p className="p-bot">{item.qty} Loại</p>
      </div>
    </ViewDiv>
  )
}

export default ColectionListening
