import React, { useState } from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { TypeColor } from '../../../interface'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'
import { useDispatch } from 'react-redux'

interface ColorProps {
  color: TypeColor
  count: number
  setStyle: React.Dispatch<React.SetStateAction<number>>
  style: number
}

const ColorListening: React.FC<ColorProps> = (props) => {
  const dispatch = useDispatch()
  const { replacePage } = bindActionCreators(actionCreators, dispatch)
  const { color, count, setStyle, style } = props
  return (
    <div
      className="cate-item"
      onClick={() => {
        replacePage({ page: `?orderBy="main/color"&equalTo="${color.text}"`, category: color.text })
        window.scrollTo(0, 135)
        setStyle(count)
      }}
    >
      <FiberManualRecordIcon sx={{ color: color.clor, fontSize: 20 }} />
      <span className="span-color" style={count === style ? { color: '#d3ad69' } : { color: '#000000' }}>
        {color.text}
      </span>
    </div>
  )
}

export default ColorListening
