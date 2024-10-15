import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Hero from './components/hero/Hero'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
      <Hero/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App