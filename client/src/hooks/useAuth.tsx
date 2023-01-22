import React, { useContext, useState } from 'react'
import axios from 'axios'

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextProps {
  user: boolean
  logIn: () => void
  logOut: () => void
  register: (email: string, password: string) => void
}

const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(false)

  const logIn = async () => {
    setUser(true)
  }

  const logOut = () => {
    setUser(false)
  }

  const register = async (email: string, password: string) => {
    try {
      await axios.post('http://localhost:8080/api/auth/register/', {
        email,
        password,
      })
      setUser(true)
    } catch (err) {
      console.log(err)
    }
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
