import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Shared/Navbar'
import Hero from './components/cards/Hero'
import Appointment from './components/Pages/Appointment'
import Blog from './components/Pages/Blog'
import Footer from './components/Shared/Footer'
import Doctors from './components/Pages/Doctors'
import Contact from './components/Pages/Contact'
import Department from './components/Pages/Department'
import Services from './components/cards/Services'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import ComprehensiveServices from './components/cards/ComprehensiveServices'
import HealthcareServices from './components/cards/Healthcare Services/HealthcareServices'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
       <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
             <HealthcareServices/>
             <ComprehensiveServices/>
          </>
        } />

        <Route path="/blog" element={<Blog />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/department" element={<Department />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
