import React, { useState, useEffect, useRef } from 'react'
import { TypeListImage } from '../../interface'
import { SideBySideMagnifier, MagnifierContainer } from 'react-image-magnifiers'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
const Items = styled.div`
  &.grup-slick {
    display: flex;
    flex-direction: row-reverse;
    margin: 10px 10px 0 20px;
  }
  &.slict-left {
    width: 5%;
  }
  &.slict-right {
    width: 95%;
    padding-left: 10px;
  }
`
const Image = styled.img`
  width: 100%;
`

interface Props {
  images: TypeListImage[]
}

const UseSlickBook: React.FC<Props> = (props) => {
  const { images } = props
  const [nav1, nav1Set] = useState<Slider>()
  const [nav2, nav2Set] = useState<Slider>()
  const slider1 = useRef<any>()
  const slider2 = useRef<any>()
  useEffect(() => {
    nav1Set(slider1.current)
    nav2Set(slider2.current)
  }, [])

  return (
    <Items className="grup-all-slick">
      <MagnifierContainer>
        <Items className="grup-slick">
          <Items className="slict-right">
            <Slider asNavFor={nav2} ref={slider1} draggable={false}>
              {images &&
                images.map((a) => (
                  <Items key={a.parenId}>
                    <SideBySideMagnifier
                      className="input-position"
                      imageSrc={a.img}
                      imageAlt={a.parenId}
                      alwaysInPlace={false}
                      overlayOpacity={0.6}
                      switchSides={false}
                      fillAvailableSpace={false}
                      fillAlignTop={true}
                      fillGapLeft={0}
                      fillGapRight={10}
                      fillGapTop={10}
                      fillGapBottom={10}
                      inPlaceMinBreakpoint={641}
                      zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
                    />
                  </Items>
                ))}
            </Slider>
          </Items>
          <Items className="slict-left">
            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={1}
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={true}
              arrows={false}
              centerMode={true}
              centerPadding={'50%'}
            >
              {images &&
                images.map((a) => (
                  <Items key={a.parenId}>
                    <Image src={a.img} alt={a.parenId} />
                  </Items>
                ))}
            </Slider>
          </Items>
        </Items>
      </MagnifierContainer>
    </Items>
  )
}

export default UseSlickBook
