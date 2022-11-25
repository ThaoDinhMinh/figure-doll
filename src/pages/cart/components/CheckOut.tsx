import React from 'react'
import { FormValue } from '../CartShow'
import { Link } from 'react-router-dom'

interface PropsCheck {
  formValue: FormValue
}
const CheckOut: React.FC<PropsCheck> = (props) => {
  const { formValue } = props
  return (
    <div className="show-check-out">
      <div>
        <Link to={'/'}>
          <p className="back-home"> Trở về trang chủ</p>
        </Link>
      </div>
      <div className="show-checkout-items">
        <strong style={{ textAlign: 'center' }}>
          Xin trân thành cảm ơn đã tin tưởng và đặt hàng tại webside của chúng tôi
        </strong>
        <div className="all-form-value">
          <p className="form-value">
            <strong>Chúng tôi sẽ gửi hàng đến địa chỉ này</strong>
          </p>
          {formValue.street === '' ? (
            ''
          ) : (
            <p className="form-value">
              <strong>Đường : </strong>
              {formValue.street}
            </p>
          )}
          <p className="form-value">
            <strong>Xã : </strong>
            {formValue.commune}
          </p>
          <p className="form-value">
            <strong>Huyện : </strong>
            {formValue.district}
          </p>
          <p className="form-value">
            <strong>Tỉnh / Thành phố : </strong>
            {formValue.city}
          </p>
          <p className="form-value">
            <strong>Phone : </strong>
            {formValue.phone}
          </p>
        </div>
      </div>
      <div>
        <Link to={'/shop'}>
          <p className="back-shop"> Tiếp tục mua hàng</p>
        </Link>
      </div>
    </div>
  )
}

export default CheckOut
