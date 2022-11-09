import { TypeMission } from '../../../interface'
import { ViewDiv, Text, Image } from './Mission'
import ScrollView from 'react-animate-on-scroll'

import React from 'react'
interface MissionProps {
  item: TypeMission
}

const MissionComponent: React.FC<MissionProps> = (props) => {
  const { item } = props
  return (
    <ViewDiv className="animate">
      <ScrollView animateIn={item.animate} duration={item.duration} animateOnce={true}>
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
      </ScrollView>
    </ViewDiv>
  )
}

export default MissionComponent
