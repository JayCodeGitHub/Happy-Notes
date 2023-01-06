import { ActionType } from '../action-types'
import { Dispatch } from 'redux'

export const addnote = (title: string, itemType: string, body?: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADDNOTE,
      itemType,
      title,
      body,
    })
  }
}
