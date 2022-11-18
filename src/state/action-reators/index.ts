import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'
import apiBase from '../../api'
import { TypeHairProduct, TypePage } from '../../interface'

export const getHairProducts = (page: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_HAIR_PENDING,
      })
      const respon = await apiBase.get(`hair.json/${page}`)
      let resut: TypeHairProduct[] = []
      for (let key in respon.data) {
        resut.push({ ...respon.data[key], id: key })
      }
      dispatch({
        type: ActionType.GET_HAIR,
        payload: resut,
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_HAIR_FAIL,
        payload: error.message,
      })
    }
  }
}

export const getMinMax = (max: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_MAX_PENDING,
      })
      const respon = await apiBase.get(`hair.json/${max}`)
      let resut: TypeHairProduct[] = []
      for (let key in respon.data) {
        resut.push({ ...respon.data[key], id: key })
      }
      dispatch({
        type: ActionType.GET_MAX,
        payload: resut,
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_MAX_FAIL,
        payload: error.message,
      })
    }
  }
}

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
export const getCategory = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_CATEGORY_PENDING,
      })
      const respon = await apiBase.get('category.json')
      dispatch({
        type: ActionType.GET_CATEGORY,
        payload: respon.data,
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_CATEGORY_FAIL,
        payload: error.message,
      })
    }
  }
}
export const getColor = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_COLOR_PENDING,
      })
      const respon = await apiBase.get('color.json')
      dispatch({
        type: ActionType.GET_COLOR,
        payload: respon.data,
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_COLOR_FAIL,
        payload: error.message,
      })
    }
  }
}

export const replacePage = (page: TypePage) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CHANGE_PAGE,
      payload: page,
    })
  }
}

export const getSelectProduct = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_SELECT_PRODUCT_PENDING,
      })
      const respon = await apiBase.get(`/hair.json?orderBy="id"&equalTo=${id}`)
      dispatch({
        type: ActionType.GET_SELECT_PRODUCT,
        payload: respon.data[id],
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_SELECT_PRODUCT_FAIL,
        payload: error.message,
      })
    }
  }
}
export const getNote = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.GET_NOTE_PENDING,
      })
      const respon = await apiBase.get('/note.json')
      dispatch({
        type: ActionType.GET_NOTE,
        payload: respon.data,
      })
    } catch (error: any) {
      dispatch({
        type: ActionType.GET_NOTE,
        payload: error.message,
      })
    }
  }
}

export const addCart = (product: TypeHairProduct) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_CART,
      payload: product,
    })
  }
}
export const removeHart = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.REMOVER_HAIR,
      payload: id,
    })
  }
}
export const icreMent = (product: TypeHairProduct) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ICREMENT_QTY,
      payload: product,
    })
  }
}
export const decreMent = (product: TypeHairProduct) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.DECREMENT_QTY,
      payload: product,
    })
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
