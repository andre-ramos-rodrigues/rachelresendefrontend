import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Mentoring from './pages/Mentoring'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={Home} path='/' exact/>
        <Route component={Resume} path='/resume' />
        <Route component={Contact} path='/contact' />
        <Route component={Mentoring} path='/mentoring' />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent