import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))  //buscame el user en el localstorage

  return {
    logged: !!user, // si existe devuelvemelo 
    user: user,
  }
}

export const AuthProvider = ({children}) => {
    const [authState, dispatch] = useReducer(AuthReducer, {}, init)
    const  login = (name) => {
      
        const user ={id:'ABC', name}
        const action = {type: 'login',payload:user}
        localStorage.setItem('user', JSON.stringify(user) )
        dispatch(action)
      }
      
      const logout = () => {
       
     
        const userRemove = localStorage.removeItem('user')
        dispatch({type: 'logout', payload: userRemove })
      }
      
      

  return (
    <AuthContext.Provider value={{...authState, login: login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}
