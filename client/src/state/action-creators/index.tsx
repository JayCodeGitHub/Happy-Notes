import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'

export const addItem = (itemType: string, title: string, body?: string) => {
  const creator = localStorage.getItem('token')
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/api/note', {
        headers: {
          authorization: creator,
        },
        itemType,
        creator,
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

export const removeItem = (_id: string, itemType: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/api/note/${_id}`)
      dispatch({
        type: ActionType.REMOVEITEM,
        _id,
        itemType,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchItems = () => {
  const creator = localStorage.getItem('token')
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('http://localhost:8080/api/note/', {
        headers: {
          authorization: creator,
        },
      })
      const notes = response.data.filter((item: { itemType: string }) => item.itemType == 'notes')
      const todos = response.data.filter((item: { itemType: string }) => item.itemType == 'todos')
      const sites = response.data.filter((item: { itemType: string }) => item.itemType == 'sites')
      dispatch({
        type: ActionType.FETCHITEMS,
        notes,
        todos,
        sites,
      })
    } catch (err) {
      console.log(err)
    }
  }
}
