import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Agence from '../pages/Agence'
import Projects from '../pages/Projects'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/agence' element={<Agence />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes