import { ActionType } from '../action-types'

interface IAddItemAction {
  type: ActionType.ADDITEM
  itemType: string
  _id: string
  title: string
  body: string
}

interface IRemoveItemAction {
  type: ActionType.REMOVEITEM
  _id: string
  itemType: string
}

interface IClearStoreAction {
  type: ActionType.CLEARSTORE
}

export type Action = IAddItemAction | IRemoveItemAction | IClearStoreAction
