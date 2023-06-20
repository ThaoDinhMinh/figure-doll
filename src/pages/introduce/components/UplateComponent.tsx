import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { TypeUplate } from '../../../interface'
import { ViewDiv, Text, Image } from './UpdateType'
import { Link } from 'react-router-dom'

interface UplateProps {
  item: TypeUplate
}

const UplateComponent: React.FC<UplateProps> = (props) => {
  const { item } = props
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-3">
      <ViewDiv className={'news-items'}>
        <ViewDiv className="g-image">
          <Image src={item.img} alt="news" />
          <ViewDiv className="day-month">
            <ViewDiv className="g-image-child">
              <CalendarMonthIcon sx={{ fontSize: 20 }} />
              <Text className="mean">{item.time}</Text>
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
        <ViewDiv className="t-card">
          <Text className="text-head">{item.title}</Text>
          <Text className="text-view">{item.content}</Text>
          <ViewDiv className="btn">
            <Link onClick={() => window.scrollTo(0, 135)} to={'/aboutus'}>
              <Text className="btn-tect">Đọc thêm</Text>
            </Link>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </div>
  )
}

export default UplateComponent
