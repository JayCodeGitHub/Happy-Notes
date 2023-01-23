import React from 'react'

type MessageType = { message?: string }

const ErrorMessage = ({ message }: MessageType) => {
  return (
    <>
      <p>{message}</p>
    </>
  )
}

export default ErrorMessage
