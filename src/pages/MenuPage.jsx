import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function MenuPage() {
    const {logout} = useAuth()
  return (
    <div>
        <button onClick={()=>logout()} className='bg-gray-600 px-5 rounded mt-5 text-center' type='button' >Cerrar Sesion</button>
    </div>
  )
}
