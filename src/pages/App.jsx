import React from 'react'
import '../scss/App.scss'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Categories from './Categories'
import Home from './Home'
import Products from './Products'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </HashRouter>
  )
}

export default App
