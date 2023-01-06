import { Action } from '../actions'

const initialState = {
  sides: [
    {
      creator: '',
      title: '',
      type: '',
      _id: '',
      _v: '',
    },
  ],
}

const SitesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'addnote':
      return console.log(action), state
    default:
      return state
  }
}

export default SitesReducer
