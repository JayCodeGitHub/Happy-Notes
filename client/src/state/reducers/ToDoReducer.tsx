import { Action } from '../actions'

const initialState = {
  todos: [
    {
      creator: '',
      title: '',
      type: '',
      _id: '',
      _v: '',
    },
  ],
}

const ToDoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'addnote':
      return console.log(action), state
    default:
      return state
  }
}

export default ToDoReducer
