import React from 'react'
import Admin_Header from '../Components/Admin_Header'
import { Outlet } from 'react-router-dom'

const Admin_Layout = () => {
  return (
    <div>
        <Admin_Header />
        <Outlet/>
    </div>
  )
}

export default Admin_Layout
