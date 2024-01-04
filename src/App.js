import React from 'react'
import Homepage from './Pages/Homepage'
import Packages from './Pages/Packages'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/packages" element={<Packages/>}/>
        </Routes>
      </BrowserRouter>
        </>
  )
}
