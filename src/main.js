import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigate from './pages/navigate'
import Inicio from './pages/inicio'
import Data from './pages/data'
import React from 'react'

const App=()=>{
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Inicio/>}/>
            <Route exact path="/data" element={<Data/>}/>
            <Route exact path="/data/form" element={<Navigate/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App 