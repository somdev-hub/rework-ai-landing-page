import './App.css'
import AmazingFeatures from './components/AmazingFeatures/AmazingFeatures'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Jumbotron from './components/Jumbotron/Jumbotron'
import Navbar from './components/Navbar/Navbar'
import PrioritizingProgress from './components/PrioritizingProgress/PrioritizingProgress'
import Testimonials from './components/Testimonials/Testimonials'


function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Header/>
      <PrioritizingProgress/>
      <AmazingFeatures/>
      <HowItWorks/>
      <Testimonials/>
      <Jumbotron/>
      <Footer/>
    </>
  )
}

export default App
