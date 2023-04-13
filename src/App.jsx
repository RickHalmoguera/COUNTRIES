import { useState, useRef } from 'react'
import { Cards } from './components/Cards'
import { MoreInfo } from './components/MoreInfo'
import './Css/App.css' 
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="header">
            <h1 className="header__title">Where in the world?</h1>
      </header>
      
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='country/:country' element={<MoreInfo/>}/>
      </Routes>
    </>
  )
}

export default App
