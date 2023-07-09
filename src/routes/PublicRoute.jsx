import { useContext } from "react"

import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/context"

export const PublicRoute = ({children}) => {
  const navigate = useNavigate()
  const {logged} = useContext(AuthContext)
  
  
  return (!logged) 
  ? children
  : <Navigate to={navigate(-1)}/>
}
