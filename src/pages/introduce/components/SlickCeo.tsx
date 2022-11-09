import React, { useEffect, useState, useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'
import { TypeCeo } from '../../../interface'

const ViewDiv = styled.div`
  background-image: url('/img/back-slick.jpg');
  background-repeat: no-repeat;
  background-attachment: scroll;
  text-align: center;
  padding: 72px 0;
  .slick-ceo {
    padding: 0 100px;
  }
  .text-listen {
    color: white;
    width: 700px;
    margin: auto;
    line-height: 36px;
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 12px;
  }
  .item-slick {
    padding: 15px;
  }
  .text-name {
    color: white;
    font-weight: 300;
    font-size: 1.2rem;
  }
  .text-job {
    color: #d3ad69;
    margin-left: 4px;
    font-weight: 300;
    font-size: 1rem;
  }
  .img {
    width: 100%;
    border-radius: 50%;
    cursor: pointer;
  }
  .text-name-job {
    padding-top: 16px;
  }
  .head {
    color: white;
    font-size: 2.5rem;
    font-weight: 300;
    padding-bottom: 32px;
  }
  .slick-slide:not(.slick-center.slick-current) {
    .text-name-job {
      display: none;
    }
    .img {
      opacity: 0.3;
      transform: scale(0.8);
    }
  }
`

interface Props {
  ceos: TypeCeo[] | null
}

const SlickCeo: React.FC<Props> = (props) => {
  const { ceos } = props
  const [nav1, nav1Set] = useState()
  const [nav2, nav2Set] = useState()
  const slider1 = useRef<any>()
  const slider2 = useRef<any>()

  useEffect(() => {
    nav1Set(slider1.current)
    nav2Set(slider2.current)
  }, [])
  return (
    <ViewDiv>
      <h1 className="head">Nhân viên của chúng tôi</h1>
      <div className="slick-ceo">
        <Slider asNavFor={nav2} ref={slider1} arrows={false}>
          {ceos?.map((a) => (
            <div key={a.id}>
              <p className="text-listen">{a.listen}</p>
            </div>
          ))}
        </Slider>

        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
          arrows={false}
          centerPadding="10px"
        >
          {ceos?.map((a) => (
            <div key={a.id} className="item-slick">
              <div>
                <img className="img" src={a.img} alt={a.name} />
                <div className="text-name-job">
                  <span className="text-name">{a.name},</span>
                  <span className="text-job">{a.job}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </ViewDiv>
  )
}

export default SlickCeo
