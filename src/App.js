import React from 'react'
import './App.css'
import Home from './Component/Home'
import Students from './Component/Students'
import Contact from './Component/Contact' 
import {Route, Routes , Link} from "react-router-dom"

export default function handson4() {
  return (
    <div className='back'>
    <div className='nav-bar'>
      <div className='links'>
      <Link className='link' to='/home'>Home</Link>
      <Link className='link' to='/students'>Students</Link>
      <Link className='link' to='contact us'>Contact Us</Link>
      </div>
    </div>
    
    <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/students' element={<Students/>} />
    <Route path='/contact us' element={<Contact/>} />
    </Routes>
    
    </div>
  )
}
