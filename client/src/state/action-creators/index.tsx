import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'

export const addItem = (itemType: string, title: string, body?: string) => {
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
  return async (dispatch: Dispatch) => {
    try {
      const responseNotes = await axios.get('http://localhost:8080/api/note/notes')
      const notes = responseNotes.data
      const responseTodos = await axios.get('http://localhost:8080/api/note/todos')
      const todos = responseTodos.data
      const responseSites = await axios.get('http://localhost:8080/api/note/sites')
      const sites = responseSites.data
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
