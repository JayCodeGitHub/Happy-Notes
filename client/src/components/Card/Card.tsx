import React from 'react'

interface CardProps {
  type: string
  title: string
  body?: string
}

function Card({ type, title, body }: CardProps) {
  return (
    <>
      {type === 'note' ? (
        <div>
          <div className='w-4/5 h-96 border-2 border-green-500 dark:bg-gray-700 bg-white rounded-lg dark:text-white text-black m-auto my-5'>
            <div className=' w-full h-1/5 bg-green-500 p-4 text-2xl'>
              <h1 className='h-2/3 overflow-hidden'>{title}</h1>
            </div>
            <div className='w-full h-4/5 p-4 flex flex-col items-left justify-between'>
              <div className='w-full h-full overflow-hidden'>
                <h2>{body}</h2>
              </div>
              <button className=' bg-gray-400 rounded-xl p-2 text-xs w-24 hover:bg-gray-500 duration-100 transition-all ease-in-out'>
                REMOVE
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='w-4/5 h-24 border-2 border-green-500 rounded-lg dark:text-white text-black m-auto my-5 dark:bg-transparent bg-white'>
            <div className='h-1/2 flex justify-content items-center p-2'>
              <h1 className=' overflow-hidden h-2/3'>{title}</h1>
            </div>
            <div className='h-1/2 flex justify-around items-center p-1'>
              <button className=' bg-gray-400 rounded-xl p-2 text-xs w-24 hover:bg-gray-500 duration-100 transition-all ease-in-out'>
                REMOVE
              </button>
              {type === 'site' ? (
                <a target='_blank' href={title} rel='noopener noreferrer'>
                  <button className=' bg-green-500 text-xs w-40 rounded-xl p-2 hover:bg-green-600 duration-100 transition-all ease-in-out'>
                    Go to site
                  </button>
                </a>
              ) : null}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Card
