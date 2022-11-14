import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../../state'
import { RootState } from '../../state/reducers'
import { ViewDetail } from './styled'
import Loading from 'react-loading'
import ShowDetail from './components/ShowDetail'

const DetailProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { getSelectProduct, replacePage } = bindActionCreators(actionCreators, dispatch)
  useEffect(() => {
    getSelectProduct(Number(id))
  }, [])
  const { loading, selecter } = useSelector((state: RootState) => state.selecter)

  if (loading)
    return (
      <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Loading type="spinningBubbles" color="#d3ad69"></Loading>
      </div>
    )
  return (
    <ViewDetail>
      <div className="header">
        <div className="header-item">
          <h1 className="text-head">Chi Tiết</h1>
          <div className="g-span">
            <Link className="link-home" to={'/'}>
              Trang chủ
            </Link>

            <span className="span">/</span>
            <Link
              className="link-home"
              onClick={() =>
                replacePage({
                  page: `?orderBy="category"&equalTo="${selecter!.category!}"`,
                  category: selecter!.category!,
                })
              }
              to={'/shop'}
            >
              <span className="span">{selecter?.category}</span>
            </Link>
            <span className="span">/</span>
            <span className="span">{selecter?.style_hair}</span>
          </div>
        </div>
      </div>
      <div className="container-detail">
        <div className="show-detail">
          <ShowDetail selecter={selecter!} />
        </div>
      </div>
    </ViewDetail>
  )
}

export default DetailProduct
