import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useError } from './useError'

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextProps {
  user: string | null
  logIn: (email: string, password: string) => void
  logOut: () => void
  register: (email: string, password: string) => void
}

const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null)
  const { dispatchError } = useError()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      ;(async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/me/`, {
            headers: {
              authorization: token,
            },
          })
          setUser(response.data)
        } catch (err) {
          dispatchError(err.response.data)
        }
      })()
    }
  }, [])

  const logIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login/`, {
        email,
        password,
      })
      setUser(response.data)
      localStorage.setItem('token', response.data)
    } catch (err) {
      dispatchError(err.response.data)
    }
  }

  const register = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register/`, {
        email,
        password,
      })
      setUser(response.data)
      localStorage.setItem('token', response.data)
    } catch (err) {
      dispatchError(err.response.data)
    }
  }

  const logOut = () => {
    setUser(null)
    localStorage.removeItem('token')
  }
  return (
    <AuthContext.Provider value={{ user, logIn, logOut, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  return auth
}
