import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Footer from './components/footer'
import Services from './pages/services'
import Error404 from './pages/error404'
import SnackBar from './components/snackbar'

function App() {
  return (
    <div className="font-quicksand bg-[#e7ebf0] dark:bg-slate-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login display="full-login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book-services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <SnackBar />
      <Footer />
    </div>
  )
}

export default App
