import React from 'react'
import { Route, Routes } from 'react-router'

import Home from './Pages/Home'
import Create from './Pages/Create'
import Update from './Pages/Update'
// import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </div>
  )
}

export default App
