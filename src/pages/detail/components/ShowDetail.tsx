import React from 'react'
import { TypeHairProduct } from '../../../interface'
import { ViewDetail } from '../styled'

interface ShowProps {
  selecter: TypeHairProduct
}

const ShowDetail: React.FC<ShowProps> = (props) => {
  const { selecter } = props
  return (
    <ViewDetail>
      <div className="item items-left">
        <div className="img">
          <img src={selecter?.img} alt={selecter?.style_hair} />
        </div>
      </div>
      <div className="item items-right"></div>
    </ViewDetail>
  )
}

export default ShowDetail
