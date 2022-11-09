import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { TypeUplate } from '../../../interface'
import { ViewDiv, Text, Image } from './UpdateType'

interface UplateProps {
  item: TypeUplate
}

const UplateComponent: React.FC<UplateProps> = (props) => {
  const { item } = props
  return (
    <ViewDiv className={'news-items ' + `${item.class}`}>
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
          <Text className="btn-tect">Đọc thêm</Text>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default UplateComponent
