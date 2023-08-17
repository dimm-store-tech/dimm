import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Outlet } from 'react-router-dom'

function IsLoading() {
    const {isLoading} = useAuth()
    if(isLoading) return <h1>Cargando...</h1>
  return (
    <Outlet/>
  )
}

export default IsLoading