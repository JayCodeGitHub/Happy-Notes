import { Action } from '../actions'

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
    case 'addnote':
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
