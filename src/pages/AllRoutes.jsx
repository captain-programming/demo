import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Tasks from './Tasks'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/tasks' element={<Tasks />}/>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
  )
}

export default AllRoutes