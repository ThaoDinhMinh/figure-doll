import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { TypeColor } from '../../../interface'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'
import { useDispatch } from 'react-redux'

interface ColorProps {
  color: TypeColor
}

const ColorListening: React.FC<ColorProps> = (props) => {
  const dispatch = useDispatch()
  const { replacePage } = bindActionCreators(actionCreators, dispatch)
  const { color } = props
  return (
    <div
      className="cate-item"
      onClick={() => {
        replacePage({ page: `?orderBy="main/color"&equalTo="${color.text}"`, category: color.text })
        window.scrollTo(0, 0)
      }}
    >
      <FiberManualRecordIcon sx={{ color: color.clor, fontSize: 20 }} />
      <span className="span-color">{color.text}</span>
    </div>
  )
}

export default ColorListening
