import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  )
}

export default App
