import { Dispatch } from 'redux'
import { TypeProduct } from '../../interface'
import { ActionType } from '../action-types'
import { Action } from '../actions'
import apiBase from '../../api'

export const getProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const respon = await apiBase.get('/products/.json')
      let resut: TypeProduct[] = []
      for (let key in respon.data) {
        resut.push({ ...respon.data[key], id: key })
      }
      dispatch({
        type: ActionType.GETPRODUCTS,
        payload: resut,
      })
    } catch (error) {
      console.log('==>', error)
    }
  }
}

export const getProduct = (idAuther: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const respon = await apiBase.get(`/products/${idAuther}/.json`)
      dispatch({
        type: ActionType.GETPRODUCT,
        payload: respon.data,
      })
    } catch (error) {
      console.log('==>', error)
    }
  }
}
