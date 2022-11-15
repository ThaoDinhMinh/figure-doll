import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../state/reducers'
import ColorListening from './ColorListening'
import { ViewCategory } from '../styled'
interface PropsColor {
  style: number | undefined
  setStyle: React.Dispatch<React.SetStateAction<number | undefined>>
}

const ColorHair: React.FC<PropsColor> = (props) => {
  const { style, setStyle } = props
  const { color, loading } = useSelector((state: RootState) => state.color)

  return (
    <ViewCategory>
      <h3 className="color-head-color">Màu nhuộm</h3>
      {loading ? (
        <p>Loadding</p>
      ) : (
        color?.map((a, i) => <ColorListening count={i + 6} style={style} setStyle={setStyle} key={a.text} color={a} />)
      )}
    </ViewCategory>
  )
}

export default ColorHair
