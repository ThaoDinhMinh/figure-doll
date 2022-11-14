import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../state/reducers'
import { ViewProduct } from '../styled'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'
import SortHead from './SortHead'
import ListeningProduct from './ListeningProduct'
import Loading from 'react-loading'

const ProductList: React.FC = () => {
  const dispatch = useDispatch()
  const [pagePro, pageProSet] = useState<number>(1)
  const { loading, hairProduct } = useSelector((state: RootState) => state.hair)
  const { page } = useSelector((state: RootState) => state.page)
  const [prods, setProds] = useState<string>('')
  const [element, setElement] = useState<any>()
  const { replacePage } = bindActionCreators(actionCreators, dispatch)
  const clien = useRef<any>()

  useEffect(() => {
    setElement(clien.current)
  }, [])
  return (
    <ViewProduct className="g-product">
      <SortHead setProds={setProds} hairProduct={hairProduct} loading={loading} />
      <div ref={clien} className="g-hair">
        {loading ? (
          <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Loading type="spinningBubbles" color="#d3ad69"></Loading>
          </div>
        ) : (
          hairProduct?.map((a) => <ListeningProduct key={a.id} item={a} />)
        )}
      </div>
      {page.category === '' ? (
        <div className="g-butbtn">
          <button
            onClick={() => {
              pageProSet(1)
              replacePage({ page: `?orderBy="id"&endAt=11`, category: '' })
              window.scrollTo(0, 0)
            }}
            style={pagePro === 1 ? { backgroundColor: '#d3ad69' } : { backgroundColor: 'black' }}
          >
            1
          </button>
          <button
            style={pagePro === 2 ? { backgroundColor: '#d3ad69' } : { backgroundColor: 'black' }}
            onClick={() => {
              pageProSet(2)
              replacePage({ page: `?orderBy="id"&startAt=12`, category: '' })
              window.scrollTo(0, 0)
            }}
          >
            2
          </button>
        </div>
      ) : (
        <div className="g-butbtn">
          <button style={{ backgroundColor: '#d3ad69' }}>1</button>
        </div>
      )}
    </ViewProduct>
  )
}

export default ProductList
