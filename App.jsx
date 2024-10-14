import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Homepage from './Homepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage></Homepage>}></Route>
          <Route path="/Homepage" element={<Homepage></Homepage>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
