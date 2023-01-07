interface IAddItemAction {
  type: 'additem'
  itemType: string
  _id: string
  title: string
  body: string
}

export type Action = IAddItemAction
