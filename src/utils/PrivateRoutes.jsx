import React from 'react'

// Libraries
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
  const jwt = localStorage.getItem('TaskManagerjwt');

  return(
    jwt ? <Outlet /> : <Navigate to="/login" />
  )
}