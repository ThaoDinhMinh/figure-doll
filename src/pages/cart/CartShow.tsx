import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartView } from './style'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import { RootState } from '../../state/reducers'
import CheckOut from './components/CheckOut'
export interface FormValue {
  street?: string
  commune: string
  district: string
  city: string
  phone: string
}

const CartShow = () => {
  const dispatch = useDispatch()
  const { removeHart, icreMent, decreMent, clearCarts } = bindActionCreators(actionCreators, dispatch)
  const { carts } = useSelector((state: RootState) => state.carts)
  const [codeD, setCodeD] = useState<number>(1)
  const [inptValue, setInptValue] = useState<string>('')
  const [isNone, isNoneSet] = useState<boolean>(true)
  const [formValue, setFormValue] = useState<FormValue>({
    street: '',
    commune: '',
    district: '',
    city: '',
    phone: '',
  })
  const CODE: string = 'GIAMGIA'

  let total: number = carts.reduce((a, b) => a + (Number(b.price) - (Number(b.price) * b.sale) / 100) * b.qty, 0)

  const handleOnchane: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  return (
    <CartView className="cart-page">
      <div className="head-cart">
        <h1 className="h1">Giỏ hàng</h1>
        <div className="link-nv">
          <Link to={'/'}>
            <p className="t-link t-link-hover">Trang chủ</p>
          </Link>
          <p className="t-link-center"> /</p>
          <p className="t-link">Giỏ hàng</p>
        </div>
      </div>
      <div className="show-cart-items">
        <div className="shop-cart">
          <div className="tab-left">
            {carts.length === 0 ? (
              <div className="no-item">
                <p className="cart-message">Giỏ hàng không có sản phẩm nào</p>
              </div>
            ) : (
              <div className="have-item">
                <div className="head-tab">
                  <div className="name-img">
                    <p className="text-name-img te-left">({carts.length}) Sản phẩm</p>
                  </div>
                  <div className="qty-product te-left">
                    <p>Số lượng</p>
                  </div>
                  <div className="total-product te-left">Số tiền</div>
                  <div className="noname"></div>
                </div>
                {carts.map((a) => (
                  <div key={a.id}>
                    <div className="item">
                      <div className="img-cart-card">
                        <div className="box-img">
                          <img className="img" src={a.img} alt={a.style_hair} />
                        </div>
                        <p className="text-mean">{a.style_hair}</p>
                      </div>
                      <div className="qty-ID">
                        <button className="btn-qty" onClick={() => decreMent(a)}>
                          -
                        </button>
                        <p className="qty-resut">{a.qty}</p>
                        <button className="btn-qty" onClick={() => icreMent(a)}>
                          +
                        </button>
                      </div>
                      <div className="total-coin">
                        <p className="coin">
                          {((Number(a.price) - (Number(a.price) * a.sale) / 100) * a.qty).toLocaleString('en-US')} đ
                        </p>
                      </div>
                      <div className="btn-remover" onClick={() => removeHart(a.id)}>
                        <button className="btn-remo">Xóa</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="tab-right">
            <div className="head-right">
              <p className="t-right text-ingor">Đơn hàng của bạn</p>
            </div>
            {carts.length === 0 ? (
              <p style={{ padding: '12px 16px', textAlign: 'center' }}>Không có sản phẩm nào</p>
            ) : (
              <div className="font-infor">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault()
                    isNoneSet(false)
                    clearCarts()
                    window.scrollTo(0, 135)
                  }}
                >
                  <div className="icre-coin">
                    <div>
                      <p className="text">Tổng số tiền {carts.length} sản phẩm :</p>
                    </div>
                    <p>
                      {carts
                        .reduce((a, b) => a + (Number(b.price) - (Number(b.price) * b.sale) / 100) * b.qty, 0)
                        .toLocaleString('en-US')}{' '}
                      đ
                    </p>
                  </div>
                  <div className="localtion">
                    <p className="text text-local">Vị trí của bạn : </p>
                    <div className="form-addrees">
                      <label className="label" htmlFor="street">
                        Số đường (Nếu có)
                      </label>
                      <input
                        value={formValue.street}
                        onChange={handleOnchane}
                        className="input-address"
                        type="text"
                        name="street"
                        placeholder="Đường"
                        id="street"
                      />
                      <label className="label" htmlFor="commune">
                        Xã
                      </label>
                      <input
                        required
                        id="commune"
                        value={formValue.commune}
                        onChange={handleOnchane}
                        className="input-address"
                        type="text"
                        name="commune"
                        placeholder="Xã"
                      />
                      <label className="label" htmlFor="district">
                        Huyện
                      </label>
                      <input
                        required
                        id="district"
                        value={formValue.district}
                        onChange={handleOnchane}
                        className="input-address"
                        type="text"
                        name="district"
                        placeholder="Huyện"
                      />
                      <label className="label" htmlFor="city">
                        Tỉnh / Thành phố
                      </label>
                      <input
                        required
                        id="city"
                        value={formValue.city}
                        onChange={handleOnchane}
                        className="input-address"
                        type="text"
                        name="city"
                        placeholder="Tỉnh / Thành phố"
                      />
                      <label className="label" htmlFor="phone">
                        Số điện thoại
                      </label>
                      <input
                        required
                        id="phone"
                        value={formValue.phone}
                        onChange={handleOnchane}
                        className="input-address"
                        type="number"
                        name="phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                  <div className="shiping">
                    <p className="text-shiping text">Vận chuyển :</p>
                    <p className="price-shiping">+ 50,000 đ</p>
                  </div>
                  <div className="code-sale">
                    <p className="code text">Mã giảm giá :</p>
                    <div className="form">
                      <input
                        className="input-code"
                        onChange={(e) => setInptValue(e.target.value)}
                        type={'text'}
                        placeholder="Mã giảm"
                        value={inptValue}
                      />
                      <button
                        onClick={() => {
                          if (inptValue === CODE) {
                            setCodeD(10)
                            setInptValue('')
                          }
                        }}
                        className="btn-code"
                        type={'button'}
                      >
                        Nhận
                      </button>
                    </div>
                  </div>
                  <div className="dcre-pice">
                    {codeD > 1 ? (
                      <div>
                        <p className="text-dre">Bạn đã áp dụng mã 'GIAMGIA', giảm 10% toàn bộ sản phẩm :</p>
                        <p>- {((total * codeD) / 100).toLocaleString('en-US')} đ</p>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="total-cost">
                    <p className="text-cost text">Tổng chi phí :</p>
                    <p>
                      {codeD > 1
                        ? (total - (total * codeD) / 100 + 50000).toLocaleString('en-US')
                        : (total + 50000).toLocaleString('en-US')}{' '}
                      đ
                    </p>
                  </div>
                  <div className="checkout">
                    <button type={'submit'} className="btn-code">
                      Gửi yêu cầu
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <Link to={'/'} onClick={() => window.scrollTo(0, 0)}>
          <p className="return-home">Trở về trang chủ</p>
        </Link>
      </div>
      <div className="show-checkout">{isNone ? '' : <CheckOut formValue={formValue} />}</div>
    </CartView>
  )
}

export default CartShow
