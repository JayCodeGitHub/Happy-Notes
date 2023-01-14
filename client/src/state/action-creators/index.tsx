import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'

export const additem = (itemType: string, title: string, body?: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/api/note', {
        itemType,
        title,
        body,
      })
      const _id = response.data._id
      dispatch({
        type: ActionType.ADDITEM,
        _id,
        itemType,
        title,
        body,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const removeitem = (_id: string, itemType: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.REMOVEITEM,
      _id,
      itemType,
    })
  }
}

export const clearstore = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.CLEARSTORE,
    })
  }
}
