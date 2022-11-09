import React, { useEffect } from 'react'
import { actionCreators } from '../../state'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../state/reducers'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ColectionListening from './components/ColectionListening'

const ViewDiv = styled.div`
  .header {
    background-image: url('/img/img-back.jpg');
    background-repeat: repeat-x;
  }
  .header-items {
    text-align: center;
    padding-top: 32px;
  }
  h1 {
    font-size: 3rem;
    line-height: 72px;
    letter-spacing: 4px;
  }
  .header-bot {
    padding-top: 12px;
  }
  .link-home {
    color: #000000;
  }
  span {
    padding-left: 8px;
  }
  .contain {
    padding: 32px 0;
    display: flex;
    flex-wrap: wrap;
    margin: 0 54px;
  }
`

const Colection = () => {
  const dispatch = useDispatch()
  const { getCategory } = bindActionCreators(actionCreators, dispatch)
  const { loading, categorys } = useSelector((state: RootState) => state.category)
  console.log(categorys)
  useEffect(() => {
    getCategory()
  }, [])

  return (
    <ViewDiv>
      <div className="header">
        <div className="header-items">
          <h1>Bộ sưu tập</h1>
          <div className="header-bot">
            <Link className="link-home" to={'/'}>
              Trang chủ
            </Link>
            <span>/</span>
            <span>Bộ sưu tập</span>
          </div>
        </div>
      </div>
      <div className="contain">
        {loading ? <p>Loadding...</p> : categorys?.map((a) => <ColectionListening key={a.id} item={a} />)}
      </div>
    </ViewDiv>
  )
}

export default Colection
