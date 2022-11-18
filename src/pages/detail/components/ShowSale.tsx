import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../../../state'
import { RootState } from '../../../state/reducers'
import { SlickView } from '../styled'
import ListeningProduct from '../../shop/components/ListeningProduct'
import Slider, { Settings } from 'react-slick'
import { Link } from 'react-router-dom'

interface Props {
  idtingSet: React.Dispatch<React.SetStateAction<number>>
}

const ShowSale: React.FC<Props> = (props) => {
  const { idtingSet } = props
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  }
  const dispatch = useDispatch()
  const { getMinMax } = bindActionCreators(actionCreators, dispatch)
  const { maxmin, loading } = useSelector((state: RootState) => state.maxmin)

  useEffect(() => {
    getMinMax(`/?orderBy="sale"&limitToLast=4`)
  }, [])
  if (loading) return <p>Loading</p>
  return (
    <SlickView className="rank-sale">
      <div>
        <h4>Sản phẩm được sale cao </h4>
      </div>
      <Slider {...settings}>
        {maxmin?.map((a) => (
          <div
            onClick={(e) => e.target.addEventListener('click', () => idtingSet(a.id))}
            key={a.id}
            className="item-slider"
          >
            <ListeningProduct item={a} />
          </div>
        ))}
      </Slider>
    </SlickView>
  )
}

export default ShowSale
