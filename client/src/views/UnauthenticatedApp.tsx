import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useAuth } from '../hooks/useAuth'

function UnauthenticatedApp() {
  const [newUser, setNewUser] = useState(false)
  const newUserToggle = () => setNewUser(!newUser)

  const { logIn, register } = useAuth()
  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-green-900 auto-rows-min 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 flex justify-center items-center'>
      {newUser ? (
        <div className=' w-72 h-96 bg-blue-50 rounded-lg border-2 border-green-500'>
          <div className='w-full h-full  flex flex-col items-center justify-around '>
            <Form
              onSubmit={() => {
                register()
              }}
              render={({ handleSubmit }) => (
                <form
                  onSubmit={handleSubmit}
                  className='w-full h-1/3 flex justify-around items-center flex-col'
                >
                  <div className='w-full flex justify-center items-center flex-col'>
                    <Field name='email'>
                      {({ input }) => (
                        <input placeholder='email' type='text' className='w-4/5 mb-2' {...input} />
                      )}
                    </Field>
                    <Field name='password'>
                      {({ input }) => (
                        <input
                          placeholder='password'
                          type='text'
                          className='w-4/5 mb-2'
                          {...input}
                        />
                      )}
                    </Field>
                  </div>
                  <button
                    type='submit'
                    className='bg-green-500 hover:bg-green-600 duration-100 transition-all ease-in-out text-white w-36 md:w-20 h-8 rounded-lg flex justify-center items-center'
                  >
                    Register
                  </button>
                </form>
              )}
            />
            <button
              onClick={newUserToggle}
              className='pt-4 hover:text-gray-600 duration-100 transition-all ease-in-ou'
            >
              I want to Login
            </button>
          </div>
        </div>
      ) : (
        <div className=' w-72 h-96 bg-blue-50 rounded-lg border-2 border-green-500'>
          <div className='w-full h-full  flex flex-col items-center justify-around '>
            <Form
              onSubmit={() => {
                logIn()
              }}
              render={({ handleSubmit }) => (
                <form
                  onSubmit={handleSubmit}
                  className='w-full h-1/3 flex justify-around items-center flex-col'
                >
                  <div className='w-full flex justify-center items-center flex-col'>
                    <Field name='email'>
                      {({ input }) => (
                        <input placeholder='email' type='text' className='w-4/5 mb-2' {...input} />
                      )}
                    </Field>
                    <Field name='password'>
                      {({ input }) => (
                        <input
                          placeholder='password'
                          type='text'
                          className='w-4/5 mb-2'
                          {...input}
                        />
                      )}
                    </Field>
                  </div>
                  <button
                    type='submit'
                    className='bg-green-500 hover:bg-green-600 duration-100 transition-all ease-in-out text-white w-36 md:w-20 h-8 rounded-lg flex justify-center items-center'
                  >
                    Login
                  </button>
                </form>
              )}
            />
            <button
              onClick={newUserToggle}
              className='pt-4 hover:text-gray-600 duration-100 transition-all ease-in-out'
            >
              I want to Register
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UnauthenticatedApp
