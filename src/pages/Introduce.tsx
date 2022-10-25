import React from 'react'
import ListtingImage from '../components/ListtingImage'
import styled from 'styled-components'
import ListtingIntro from '../components/ListtingIntro'
import { TypeProduct } from '../interface'

const HeadMean = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 47px);
`
const Row = styled.div`
  display: flex;
`

const TextHead = styled.h1`
  cursor: default;
  text-align: center;
  font-size: 14vw;
  position: relative;
  font-weight: 900;
  background: linear-gradient(90deg, #2ca2b4, #5598de 24%, #7f87ff 45%, #f65aad 76%, #ec3d43);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`
const TextProductName = styled.h1`
  font-size: 4vw;
`
const Introduce = () => {
  const product: TypeProduct = {
    id: '20',
    images: [
      {
        img: '/img/image 173.jpg',
        parenId: '1',
      },
      {
        img: '/img/image 170.jpg',
        parenId: '2',
      },
      {
        img: '/img/image 171.jpg',
        parenId: '3',
      },
      {
        img: '/img/image 172.jpg',
        parenId: '4',
      },
      {
        img: '/img/image 169.jpg',
        parenId: '5',
      },
      {
        img: '/img/image 174.jpg',
        parenId: '6',
      },
    ],
    img: '/img/image 168.jpg',
    main: {
      height: '350 x 273 x 273 mm | 13.8 inch x 10.7 inch x 10.7 inch',
      manufacturer: 'Max Factory',
      namePrd: 'War of Underworld Alice Synthesis Thirty',
      series: 'Sword Art Online',
      specifications: 'Hình vẽ ABS & PVC được sơn, có khớp nối, không quy mô với các bộ phận và chân đế tùy chọn.',
    },
    name: 'Sword Art Online Alice: Crystal Dress',
    posts: [
      {
        author: '',
        id: '1',
        title: '',
      },
    ],
    price: 302,
    qty: 1,
    read_text:
      'Nhà thiết kế điêu khắc Coco và eStream tiếp tục gây ấn tượng khi trình làng Alice trong bộ váy pha lê !',
    text_mean:
      'Cao 13,8 inch, Alice đứng trên một chân đế nâng cao công phu khiến bạn liên tưởng đến một phòng khiêu vũ trong truyện cổ tích. Người đấu kiếm phi thường đang mặc một chiếc váy màu xanh nửa đêm trong mờ. Chuyển động của cô ấy khiến chiếc váy của chiếc váy nâng lên 360 độ xung quanh cơ thể cô ấy, giống như một bông hoa màu xanh đang nở! Hai tay của Alice vươn ra sau đầu nắm chặt thanh kiếm mang tính biểu tượng của cô, Fragrant Olive. Nó tạo ra một hiệu ứng màu vàng vàng đầy mê hoặc cuốn quanh cô ấy. Kết quả là cuộc kết hợp hoàn hảo của màu xanh và vàng cho nữ anh hùng cao quý của chúng ta!',
    new: true,
  }
  return (
    <div className="container">
      <HeadMean>
        <TextHead>FIGURE</TextHead>
        <p>Giới thiệu sản phẩm mới</p>
        <TextProductName>{product?.name}</TextProductName>
      </HeadMean>
      <h1>{product?.read_text}</h1>
      <div>{product?.images ? <ListtingImage images={product.images} /> : <p>Loadding...</p>}</div>

      <Row>
        {product.images.map((a, i) => {
          if (i > 0) return <ListtingIntro key={a.parenId} images={a} />
        })}
      </Row>
      <p>{product?.text_mean}</p>
    </div>
  )
}

export default Introduce
