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
    case ActionType.ADDITEM:
      if (action.itemType == 'notes') {
        return {
          ...state,
          [action.itemType]: [
            ...state.notes,
            {
              title: action.title,
              body: action.body,
              _id: action.title,
              itemType: action.itemType,
            },
          ],
        }
      } else {
        return state
      }
    default:
      return state
  }
}

export default NotesReducer
