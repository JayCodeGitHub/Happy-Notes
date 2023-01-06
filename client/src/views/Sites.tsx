import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import Card from '../components/Card/Card'
import AddNewItem from '../components/AddNewItem/AddNewItem'
import { State } from '../state/index'
import { actionCreators } from '../state'

function Sites() {
  const dispatch = useDispatch()
  const state = useSelector((state: State) => state.sites)
  const { addsite } = bindActionCreators(actionCreators, dispatch)
  return (
    <>
      {state.sites.map(({ title }) => (
        <Card title={title} type='site' key={title} />
      ))}
      <AddNewItem setItems={addsite} type='site' />
    </>
  )
}

export default Sites
