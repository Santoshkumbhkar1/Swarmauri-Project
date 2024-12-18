import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/header.css';
const Header = () => {
  return (
    <header>
     <nav className ="navbar">
      <ul className="nav-links">
       <li> <Link to= "/"> Home page</Link> </li> 
       <li><Link to= "/about"> About</Link></li>
       <li><Link to= "/contact"> Contact</Link></li>
       
      </ul>
       

     </nav>
    </header>
  )
}

export default Header