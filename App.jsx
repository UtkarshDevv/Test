import './App.css'
import Navebar from './components/Navbar/Navebar'
import Homepage from './components/pages/Homepage'
import ScheduleCard from './components/pages/ScheduleCard'
import About from './components/pages/About'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
    <div>
      <Navebar></Navebar>
      <Homepage></Homepage>
      <ScheduleCard>
      </ScheduleCard>
      <About></About>
      <Footer></Footer>
      </div>
      
    </>
  )
}

export default App
