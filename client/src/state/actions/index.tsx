interface IAddNoteAction {
  type: 'addnote'
  itemType: string
  _id: string
  title: string
  body: string
}

interface IAddToDoAction {
  type: 'addtodo'
  itemType: string
  _id: string
  title: string
  body: string
}

interface IAddSiteAction {
  type: 'addsite'
  itemType: string
  _id: string
  title: string
  body: string
}

export type Action = IAddNoteAction | IAddSiteAction | IAddToDoAction
