import React from 'react'

type MessageType = { message?: string }

const ErrorMessage = ({ message }: MessageType) => {
  return (
    <>
      <div className='fixed top-2 right-2 bg-red-600 p-6 rounded-md'>{message}</div>
    </>
  )
}

export default ErrorMessage
