import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
function AuthRequired() {
    const {isAutenticaded,isLoading} = useAuth()
    if(isLoading) {
        return <h1>Cargando..</h1>
    }

  return (
    <Outlet/>
  )
}

export default AuthRequired