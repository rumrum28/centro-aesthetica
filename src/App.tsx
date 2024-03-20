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
        <Route path="/centro-aesthetica/" element={<Home />} />
        <Route path="/centro-aesthetica/about" element={<About />} />
        <Route
          path="/centro-aesthetica/login"
          element={<Login display="full-login" />}
        />
        <Route path="/centro-aesthetica/register" element={<Register />} />
        <Route path="/centro-aesthetica/book-services" element={<Services />} />
        <Route
          path="/centro-aesthetica/book-services/service"
          element={<SoloService />}
        />
        <Route path="/centro-aesthetica/contact" element={<Contact />} />
        <Route path="/centro-aesthetica/faq" element={<Faq />} />
        <Route
          path="/centro-aesthetica/our-locations"
          element={<Locations />}
        />
        <Route
          path="/centro-aesthetica/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/centro-aesthetica/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="/centro-aesthetica/cart" element={<Cart />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <SnackBar />
    </div>
  )
}

export default App
