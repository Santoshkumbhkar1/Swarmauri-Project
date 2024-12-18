import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
const App = () => {
  return (
    
    <Router>
      <div className="app-container">
      <Header/>
      
      <main className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/about" element ={<About/>} />
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>

   
      </main>
      

      </div>
      

     <Footer/>
    </Router>
  

  )
}

export default App