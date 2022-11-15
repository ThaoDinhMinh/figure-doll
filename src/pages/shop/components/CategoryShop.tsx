import React from 'react'
import { ViewCategory } from '../styled'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../state/reducers'
import CategoryListning from './CategoryListning'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'

interface CategoryProps {
  setCateg: React.Dispatch<React.SetStateAction<string>>
  style: number | undefined
  setStyle: React.Dispatch<React.SetStateAction<number | undefined>>
}

const CategoryShop: React.FC<CategoryProps> = (props) => {
  const dispatch = useDispatch()

  const { replacePage } = bindActionCreators(actionCreators, dispatch)
  const { setCateg, style, setStyle } = props
  const { loading, categorys } = useSelector((state: RootState) => state.category)

  if (loading) return null
  return (
    <ViewCategory>
      <div className="category-left-top">
        <h3>Phân loại</h3>
        <div>
          <div
            className="cate-item"
            onClick={() => {
              setCateg('')
              replacePage({ page: `?orderBy="id"&endAt=11`, category: '' })
              setStyle(10000)
            }}
          >
            <FiberManualRecordIcon sx={{ color: '#d3ad69', fontSize: 12 }} />
            <span className="span">Tất cả</span>
          </div>
          {categorys?.map((a, i) => (
            <CategoryListning key={a.id} item={a} count={i} setCateg={setCateg} style={style} setStyle={setStyle} />
          ))}
        </div>
      </div>
    </ViewCategory>
  )
}

export default CategoryShop
