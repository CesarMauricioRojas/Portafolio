import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Contact from './Pages/Contact'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/users/:id" element={<Detail />} /> */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
