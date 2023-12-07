import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NavBar from './components/shared/NavBar'
import MyProjectsPage from './pages/MyProjectsPage'

function App() {

  return (
    <div className='appprincipal-container'>
      <div className='appprincipal__bubbles'>
        <span style={{"--i":"11"}}></span>
        <span style={{"--i":"12"}}></span>
        <span style={{"--i":"24"}}></span>
        <span style={{"--i":"10"}}></span>
        <span style={{"--i":"14"}}></span>
        <span style={{"--i":"23"}}></span>
        <span style={{"--i":"18"}}></span>
        <span style={{"--i":"16"}}></span>
        <span style={{"--i":"19"}}></span>
        <span style={{"--i":"20"}}></span>
        <span style={{"--i":"22"}}></span>
        <span style={{"--i":"25"}}></span>
        <span style={{"--i":"18"}}></span>
        <span style={{"--i":"21"}}></span>
        <span style={{"--i":"15"}}></span>
        <span style={{"--i":"13"}}></span>
        <span style={{"--i":"26"}}></span>
        <span style={{"--i":"17"}}></span>
        <span style={{"--i":"13"}}></span>
        <span style={{"--i":"28"}}></span>
        <span style={{"--i":"30"}}></span>
        <span style={{"--i":"15"}}></span>
        <span style={{"--i":"19"}}></span>
        <span style={{"--i":"22"}}></span>
        <span style={{"--i":"34"}}></span>
        <span style={{"--i":"12"}}></span>
        <span style={{"--i":"24"}}></span>
      </div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/projects' element={<MyProjectsPage /> } />
        <Route path='*' element={<h3>❌ Error 404 - This route does not exist 😵</h3>} />
      </Routes>
    </div>
  )
}

export default App
