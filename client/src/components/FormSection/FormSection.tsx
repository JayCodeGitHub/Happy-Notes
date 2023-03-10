import React from 'react'
import { Form, Field } from 'react-final-form'

interface FormProps {
  setItems: (title: string, type: string, body: string) => void
  type: string
  isVisible: boolean
  setIsVisible: (IsVisible: boolean) => void
}

function FormSection({ setItems, type, isVisible, setIsVisible }: FormProps) {
  return (
    <>
      {isVisible ? (
        <div className='w-3/4 md:w-2/5 p-4 fixed top-1/2 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-gray-800 bg-gray-200 rounded-lg border-2 border-green-500 flex flex-col justify-center items-center'>
          <Form
            onSubmit={(formObj) => {
              setItems(type, formObj.title, formObj.body)
              formObj.title = ''
              formObj.body = ''
              setIsVisible(false)
            }}
            render={({ handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col items-center justify-center'
              >
                <Field name='title'>
                  {({ input }) => (
                    <input
                      placeholder='title'
                      type='text'
                      className='w-full rounded-md my-2.5'
                      {...input}
                    />
                  )}
                </Field>
                {type === 'notes' ? (
                  <Field name='body'>
                    {({ input }) => (
                      <textarea
                        placeholder='body'
                        type='text'
                        className='w-full h-72 rounded-md my-2.5'
                        {...input}
                      />
                    )}
                  </Field>
                ) : null}
                {type === 'sites' ? (
                  <Field name='body'>
                    {({ input }) => (
                      <input
                        placeholder='URL'
                        type='text'
                        className='w-full rounded-md my-2.5'
                        {...input}
                      />
                    )}
                  </Field>
                ) : null}
                <div className='w-full flex justify-around items-center my-2.5'>
                  <button
                    type='submit'
                    className='border-2 border-green-700 w-36 md:w-20 h-8 rounded-lg flex justify-center items-center dark:text-white text-black hover:bg-green-600 duration-100 transition-all ease-in-out'
                  >
                    Submit
                  </button>
                  <button
                    type='reset'
                    onClick={() => setIsVisible(false)}
                    className='border-2 border-green-700 w-36 md:w-20 h-8 rounded-lg flex justify-center items-center dark:text-white text-black hover:bg-green-600 duration-100 transition-all ease-in-out'
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      ) : null}
    </>
  )
}

export default FormSection
