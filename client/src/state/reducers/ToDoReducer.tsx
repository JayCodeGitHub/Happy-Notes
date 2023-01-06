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
    case ActionType.ADDTODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { title: action.title, body: action.body, _id: action.title, itemType: action.itemType },
        ],
      }
    default:
      return state
  }
}

export default ToDoReducer
