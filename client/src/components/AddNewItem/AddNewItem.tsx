import React, { useState } from 'react'
import AddIcon from '../../assets/icons/plus.svg'
import FormSection from '../FormSection/FormSection'

interface AddNewItemProps {
  setItems: (title: string, type: string, body: string) => void
  type: string
}

function AddNewItem({ setItems, type }: AddNewItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const setVisible = () => setIsVisible(!isVisible)
  return (
    <>
      <button
        className='fixed right-5 bottom-5 w-16 h-16 dark:bg-green-400 bg-white border-2 border-green-500 dark:border-0 rounded-full z-0 flex justify-center items-center'
        onClick={setVisible}
      >
        <img src={AddIcon} />
      </button>
      <FormSection
        setItems={setItems}
        type={type}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </>
  )
}

export default AddNewItem
