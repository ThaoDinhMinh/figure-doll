import { TypeMission } from '../../../interface'
import { ViewDiv, Text, Image } from './Mission'
import ScrollView from 'react-animate-on-scroll'

import React from 'react'
import { Link } from 'react-router-dom'
interface MissionProps {
  item: TypeMission
}

const MissionComponent: React.FC<MissionProps> = (props) => {
  const { item } = props
  return (
    <ViewDiv className="animate col-md-6 col-sm-6 col-12">
      <ScrollView animateIn={item.animate} duration={item.duration} animateOnce={true}>
        <Link to={'/aboutus'} onClick={() => window.scrollTo(0, 135)}>
          <ViewDiv className="animate-container">
            <ViewDiv className="card-animate">
              <ViewDiv className="card-image card-img">
                <Image src={item.img} alt={item.title} />
              </ViewDiv>
              <ViewDiv className="card-image card-text">
                <Text className="text-card">{item.title}</Text>
                <Text className="text-color">{item.content}</Text>
                <Text className="text-time">{item.time}</Text>
              </ViewDiv>
            </ViewDiv>
          </ViewDiv>
        </Link>
      </ScrollView>
    </ViewDiv>
  )
}

export default MissionComponent
