import { useState } from 'react'

export function useHamburger() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavigation = () => {
    setIsOpen(!isOpen)
  }
  const setIsOpenFalse = () => {
    setIsOpen(false)
  }
  return { isOpen, toggleNavigation, setIsOpenFalse }
}
