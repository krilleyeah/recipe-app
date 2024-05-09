import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import DashboardPage from './components/DashboardPage'
import { Routes, Route, Link } from "react-router-dom"
import ItemDetailsPage from './components/ItemDetailsPage'
import AboutPage from './components/AboutPage'
import ErrorPage from './components/ErrorPage'


function App() {

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/details/:detailsId" element={<ItemDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>

  )
}

export default App
