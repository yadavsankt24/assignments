import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Admin } from './admin'
import { Customer } from './customer'
import { Login } from './login'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/customer" element={<Customer />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  )
}
