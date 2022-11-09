import React from 'react'
import { TypeOur } from '../../../interface'
import { ViewDiv, Text, Image } from './OurProgram'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

interface OurProps {
  item: TypeOur
}

const OurProgramComponent: React.FC<OurProps> = (props) => {
  const { item } = props
  return (
    <ViewDiv className="g-our-items">
      <ViewDiv className="g-our-item">
        <ViewDiv className="g-our-content">
          <ViewDiv className="opaci"></ViewDiv>
          <Image src={item.img} alt="anh girl toc dai" />
          <ViewDiv className="text-tranfrom">
            <ViewDiv className="text-transfrom-top">
              <Text className="text-on-tranfrom">{item.content}</Text>
              <MoreHorizIcon sx={{ color: '#d3ad60', fontSize: 40 }} />
            </ViewDiv>
          </ViewDiv>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default OurProgramComponent
