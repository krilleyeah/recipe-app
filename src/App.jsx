import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Content from './components/Content'

function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <Content />
      <Footer />
    </>
  )
}

export default App
