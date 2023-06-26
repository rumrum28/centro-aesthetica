import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Services from './pages/services'
import Error404 from './pages/error404'
import SnackBar from './components/snackbar'
import Faq from './pages/faq'
import PrivacyPolicy from './pages/privacyPolicy'
import TermsAndConditions from './pages/termsAndConditions'
import Cart from './pages/cart'
import Locations from './pages/locations'
import SoloService from './pages/service'

function App() {
  return (
    <div className="font-quicksand bg-[#e7ebf0] dark:bg-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login display="full-login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book-services" element={<Services />} />
        <Route path="/book-services/service" element={<SoloService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/our-locations" element={<Locations />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <SnackBar />
    </div>
  )
}

export default App
