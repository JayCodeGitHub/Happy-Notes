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
        <>
          <div>
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              <p>{body}</p>
              <button>REMOVE</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              <button>REMOVE</button>
              {type === 'site' ? (
                <a target='_blank' href={title} rel='noopener noreferrer'>
                  <button>Go to side</button>
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
