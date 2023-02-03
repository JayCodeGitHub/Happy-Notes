import React from 'react'
import GitHubIcon from '../../assets/icons/githubicon.svg'
import GitHubIconDark from '../../assets/icons/githubicondark.png'

function GitHubButton() {
  return (
    <a
      className='border-2 dark:border-white dark:hover:border-gray-400 hover:border-gray-300 border-black rounded-lg p-2 cursor-pointer duration-100 transition-all ease-in-out'
      href='https://github.com/JayCodeGitHub/Happy-Notes'
      target='_blank'
      rel='noreferrer'
    >
      <img className='h-6 w-6 dark:flex hidden ' src={GitHubIcon} />
      <img className='h-6 w-6 dark:hidden flex' src={GitHubIconDark} />
    </a>
  )
}

export default GitHubButton
