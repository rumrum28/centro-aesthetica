import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Footer from './components/footer'
import Services from './pages/services'
import OurLocations from './pages/ourLocations'
import Error404 from './pages/error404'

function App() {
  return (
    <div className="font-quicksand">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login display="full-login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-locations" element={<OurLocations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
