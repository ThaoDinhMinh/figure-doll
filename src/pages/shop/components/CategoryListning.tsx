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
}

const CategoryListning: React.FC<Props> = (props) => {
  const dispatch = useDispatch()
  const { replacePage } = bindActionCreators(actionCreators, dispatch)
  const { item, setCateg } = props
  return (
    <ViewCatItem>
      <div
        className="cate-item"
        onClick={() => {
          setCateg(item.text)
          replacePage({ page: `?orderBy="category"&equalTo="${item.text}"`, category: item.text })
        }}
      >
        <FiberManualRecordIcon sx={{ color: '#d3ad69', fontSize: 12 }} />
        <span className="span">{item.text}</span>
      </div>
    </ViewCatItem>
  )
}

export default CategoryListning
