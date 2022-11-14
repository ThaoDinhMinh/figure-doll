import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../state/reducers'
import ColorListening from './ColorListening'
import { ViewCategory } from '../styled'
interface PropsColor {}

const ColorHair: React.FC<PropsColor> = (props) => {
  const { color, loading } = useSelector((state: RootState) => state.color)

  return (
    <ViewCategory>
      <h3 className="color-head-color">Màu nhuộm</h3>
      {loading ? <p>Loadding</p> : color?.map((a) => <ColorListening key={a.text} color={a} />)}
    </ViewCategory>
  )
}

export default ColorHair
