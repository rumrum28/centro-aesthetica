import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Footer from './components/footer'
import Services from './pages/services'

function App() {
  return (
    <div className="font-quicksand">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login display="full-login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
