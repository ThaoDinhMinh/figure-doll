import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'
import apiBase from '../../api'

// export const getProducts = (series: string) => {
//   return async (dispatch: Dispatch<Action>) => {
//     try {
//       dispatch({
//         type: ActionType.GETPRODUCTS_PENDING,
//       })
//       const respon = await apiBase.get('')
//       let resut: TypeProduct[] = []
//       for (let key in respon.data) {
//         resut.push({ ...respon.data[key], id: key })
//       }
//       dispatch({
//         type: ActionType.GETPRODUCTS,
//         payload: resut,
//       })
//     } catch (error: any) {
//       dispatch({
//         type: ActionType.GETPRODUCTS_FAIL,
//         payload: error.message,
//       })
//     }
//   }
// }

export const getCeo = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GETCEO_PENDING,
      })
      const respon = await apiBase.get('ceo.json')
      dispatch({
        type: ActionType.GETCEO,
        payload: respon.data,
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GETCEO_FAIL,
        payload: error.message,
      })
    }
  }
}

// export const removeProduct = () => {
//   return (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.REMOVE_SELETE,
//       payload: null,
//     })
//   }
// }
