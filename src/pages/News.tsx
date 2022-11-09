import React, { useEffect, useState, useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const News = () => {
  const [nav1, nav1Set] = useState()
  const [nav2, nav2Set] = useState()
  const slider1 = useRef<any>()
  const slider2 = useRef<any>()
  useEffect(() => {
    nav1Set(slider1.current)
    nav2Set(slider2.current)
  }, [])
  return (
    <div className="sick-ceo">
      <Slider asNavFor={nav2} ref={slider1}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>

      <Slider asNavFor={nav1} ref={slider2} slidesToShow={5} swipeToSlide={true} focusOnSelect={true}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default News
