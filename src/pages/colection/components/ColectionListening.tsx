import React from 'react'
import { Link } from 'react-router-dom'
import { TypeCategory } from '../../../interface'
import { ViewDiv } from '../styled'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'

interface CategoryProps {
  item: TypeCategory
}

const ColectionListening: React.FC<CategoryProps> = (props) => {
  const dispatch = useDispatch()
  const { item } = props
  const { replacePage } = bindActionCreators(actionCreators, dispatch)
  return (
    <ViewDiv className="card-category">
      <Link
        onClick={() => {
          replacePage({ page: `?orderBy="category"&equalTo="${item.text}"`, category: item.text })
          window.scrollTo(0, 0)
        }}
        to={'/shop'}
      >
        <div className="item">
          <img src={item.img} alt={item.text} />
          <p className="name-category">{item.text}</p>
          <p className="p-bot">{item.qty} Loại</p>
        </div>
      </Link>
    </ViewDiv>
  )
}

export default ColectionListening
