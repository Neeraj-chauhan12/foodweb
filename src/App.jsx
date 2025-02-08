import React from 'react'
import Mealdata from './components/Mainpage'
import { Route, Routes } from 'react-router-dom'
import Mealinfo from './components/Mealinfo'

 

const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Mealdata/>}></Route>
      <Route path='/:mealid' element={<Mealinfo />}></Route>

    </Routes>

    
    
  )
}

export default App
