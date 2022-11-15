import React from 'react'
import { TypeCategory } from '../../../interface'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { ViewCatItem } from '../styled'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../../state'

interface Props {
  item: TypeCategory
  setCateg: React.Dispatch<React.SetStateAction<string>>
  style: number | undefined
  setStyle: React.Dispatch<React.SetStateAction<number | undefined>>
  count: number
}

const CategoryListning: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const { replacePage } = bindActionCreators(actionCreators, dispatch)
  const { item, setCateg, style, setStyle, count } = props
  return (
    <ViewCatItem>
      <div
        className="cate-item"
        onClick={() => {
          setCateg(item.text)
          replacePage({ page: `?orderBy="category"&equalTo="${item.text}"`, category: item.text })
          setStyle(count)
        }}
      >
        <FiberManualRecordIcon sx={{ color: '#d3ad69', fontSize: 12 }} />
        <span className="span" style={count === style ? { color: '#d3ad69' } : { color: '#000000' }}>
          {item.text}
        </span>
      </div>
    </ViewCatItem>
  )
}

export default CategoryListning
