import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import NavBar from './components/navbar/NavBar'
import Contact from './pages/contact/Contact'
import Project from './pages/project/Project'
import Experience from './pages/experience/Experience'
import Skill from './pages/skill/Skill'
import About from './pages/about/About'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project' element={<Project />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App