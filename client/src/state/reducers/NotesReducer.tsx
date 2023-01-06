import { Action } from '../actions'
import { ActionType } from '../action-types'

const initialState = {
  notes: [
    {
      title: '',
      body: '',
      _id: '',
      itemType: 'note',
    },
  ],
}

const NotesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADDNOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: action.title, body: action.body, _id: action.title, itemType: action.itemType },
        ],
      }
    default:
      return state
  }
}

export default NotesReducer
