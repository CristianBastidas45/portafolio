import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({ username, password }) => {

  if(username === 'Pepito' && password === '123456'){
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes