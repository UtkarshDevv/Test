import './App.css'
import Navebar from './components/Navbar/Navebar'
import Homepage from './components/pages/Homepage'
import ScheduleCard from './components/pages/ScheduleCard'
import About from './components/pages/About'


function App() {
  return (
    <>
    <div>
      <Navebar></Navebar>
      <Homepage></Homepage>
      <ScheduleCard>
      </ScheduleCard>
      <About></About>
      </div>
      
    </>
  )
}

export default App
