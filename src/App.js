import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Register from './pages/Register'
import Trace from './pages/Trace'
import Transfer from './pages/Transfer'
import Receive from './pages/Receive'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <div className='main'>
        <Header />
        <Footer />
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/About' element={<About />} />
            <Route exact path='/Register' element={<Register />} />
            <Route exact path='/Trace' element={<Trace />} />
            <Route exact path='/Transfer' element={<Transfer />} />
            <Route exact path='/Receive' element={<Receive />} />
            <Route path='*' element={<Home />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
