import React,{useContext} from 'react'
import { AuthContext } from '../Context/Authcontext'
import { useLocation } from 'react-router-dom'

export const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext)
    const {pathname, search} = useLocation()

    localStorage.setItem('lastPath',`${pathname}${search}`)
  return (
    user ? children : <> Error 403 </>
  )
}
