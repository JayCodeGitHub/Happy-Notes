import { combineReducers } from 'redux'
import notesReducer from './NotesReducer'
import todoReducer from './ToDoReducer'
import sidesReducer from './SitesReducer'

const reducers = combineReducers({
  notes: notesReducer,
  todos: todoReducer,
  sites: sidesReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>
