import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../state/reducers'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
import { useEffect } from 'react'

const ViewDiv = styled.div`
  &.sick-ceo {
    background-image: url('/img/img-back-5.jpg');
    height: 50vh;
    color: #fff;
  }
`

const SlickCeo = () => {
  const dispatch = useDispatch()
  const { getCeo } = bindActionCreators(actionCreators, dispatch)
  const { ceos } = useSelector((state: RootState) => state.ceos)
  console.log(ceos)
  useEffect(() => {
    getCeo()
  }, [])
  return <ViewDiv className="sick-ceo">Use Slick our API</ViewDiv>
}

export default SlickCeo
