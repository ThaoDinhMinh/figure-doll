import styled from 'styled-components'

const ViewDiv = styled.div`
  &.sick-ceo {
    background-image: url('/img/img-back-5.jpg');
    height: 50vh;
    color: #fff;
  }
`

const SlickCeo = () => {
  return <ViewDiv className="sick-ceo">Use Slick our API</ViewDiv>
}

export default SlickCeo
