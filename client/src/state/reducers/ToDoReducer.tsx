import { Action } from '../actions'
import { ActionType } from '../action-types'

const initialState = {
  todos: [
    {
      title: '',
      body: '',
      _id: '',
      itemType: 'todo',
    },
  ],
}

const ToDoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADDITEM:
      if (action.itemType == 'todos') {
        return {
          ...state,
          [action.itemType]: [
            ...state.todos,
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
    case ActionType.REMOVEITEM:
      if (action.itemType == 'todos') {
        return {
          ...state,
          [action.itemType]: [...state.todos.filter((item) => item._id !== action._id)],
        }
      } else {
        return state
      }
    case ActionType.CLEARSTORE:
      return {
        ...state,
        todos: [],
      }
    default:
      return state
  }
}

export default ToDoReducer
