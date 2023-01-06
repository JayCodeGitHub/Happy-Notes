interface IAddNoteAction {
  type: 'addnote'
  itemType: string
  _id: string
  title: string
  body: string
}

interface IRemoveItemAction {
  type: 'removeitem'
  _id: string
  itemType: string
  payload: Array<{
    itemType: string
    _id: string
    title: string
    body?: string
  }>
}

interface IFetchItemsAction {
  type: 'fetchitems'
  itemType: string
  items: Array<{
    _id: string
    title: string
    body: string
    creator: string
    type: string
    _v: string
  }>
  payload: Array<{
    itemType: string
    _id: string
    title: string
    body?: string
  }>
}

export type Action = IAddNoteAction | IRemoveItemAction | IFetchItemsAction
