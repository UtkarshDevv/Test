import './App.css'
import Navebar from './components/Navbar/Navebar'
import Homepage from './components/pages/Homepage'
import ScheduleCard from './components/pages/ScheduleCard'
import About from './components/pages/About'
import Footer from './components/Footer/Footer'
import ContactPage from './components/pages/ContactPage'
import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
    <div>
    <Navebar />
        <Routes>
          <Route path="*" element={[<Homepage/>,<ScheduleCard/>,<Footer/>]} />

          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<ContactPage/>} />

        </Routes>
    </div>
    
    </>
  )
}

export default App ;
