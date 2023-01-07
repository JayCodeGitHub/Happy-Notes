import { Action } from '../actions'
import { ActionType } from '../action-types'

const initialState = {
  sites: [
    {
      title: '',
      body: '',
      _id: '',
      itemType: 'site',
    },
  ],
}

const SitesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADDITEM:
      if (action.itemType == 'sites') {
        return {
          ...state,
          [action.itemType]: [
            ...state.sites,
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
      if (action.itemType == 'sites') {
        return {
          ...state,
          [action.itemType]: [...state.sites.filter((item) => item._id !== action._id)],
        }
      } else {
        return state
      }
    default:
      return state
  }
}

export default SitesReducer
