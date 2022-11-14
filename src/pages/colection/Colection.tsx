import React, { useEffect } from 'react'
import { actionCreators } from '../../state'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../state/reducers'
import { Link } from 'react-router-dom'
import ColectionListening from './components/ColectionListening'
import Loading from 'react-loading'
import { ViewDivColection } from './styled'

const Colection = () => {
  const dispatch = useDispatch()
  const { getCategory } = bindActionCreators(actionCreators, dispatch)
  const { loading, categorys } = useSelector((state: RootState) => state.category)
  useEffect(() => {
    getCategory()
  }, [])

  return (
    <ViewDivColection>
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
        {loading ? (
          <div style={{ height: '80vh', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '56px' }}>
            <Loading type="spinningBubbles" color="#d3ad69"></Loading>
          </div>
        ) : (
          categorys?.map((a) => <ColectionListening key={a.id} item={a} />)
        )}
      </div>
    </ViewDivColection>
  )
}

export default Colection
