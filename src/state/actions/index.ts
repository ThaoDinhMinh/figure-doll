import { ActionType } from '../action-types'
import { TypeCeo } from '../../interface'

interface GetCeoPending {
  type: ActionType.GETCEO_PENDING
}
interface GetCeo {
  type: ActionType.GETCEO
  payload: TypeCeo[]
}
interface GetCeoFail {
  type: ActionType.GETCEO_FAIL
  payload: string
}

export type Action = GetCeoPending | GetCeo | GetCeoFail
