import { Dispatch } from 'redux'
import { TypeProduct } from '../../interface'
import { ActionType } from '../action-types'
import { Action } from '../actions'
import apiBase from '../../api'

export const getProducts = (series: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GETPRODUCTS_PENDING,
      })
      const respon = await apiBase.get(`/products.json?orderBy="main/series"&${series}`)
      let resut: TypeProduct[] = []
      for (let key in respon.data) {
        resut.push({ ...respon.data[key], id: key })
      }
      dispatch({
        type: ActionType.GETPRODUCTS,
        payload: resut,
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GETPRODUCTS_FAIL,
        payload: error.message,
      })
    }
  }
}

export const getSeries = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GETSERIES_PENDING,
      })
      const respon = await apiBase.get('/series.json')
      dispatch({
        type: ActionType.GETSERIES,
        payload: respon.data,
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GETSERIES_FAIL,
        payload: error.message,
      })
    }
  }
}

export const getProduct = (idAuther: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GETPRODUCT_PENDING,
      })
      const respon = await apiBase.get(`/products/${idAuther}/.json`)
      dispatch({
        type: ActionType.GETPRODUCT,
        payload: respon.data,
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GETPRODUCT_FAIL,
        payload: error.message,
      })
    }
  }
}

export const removeProduct = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_SELETE,
      payload: null,
    })
  }
}
