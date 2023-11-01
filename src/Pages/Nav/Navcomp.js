import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './nav.css'

const Navcomp = ({children}) => {
  return (
    <div>
  
      <div className="navbar navcolor">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          
          
        <li><a>

<NavLink to="/" as={Link}>
<div className="tooltip w-10 rounded-full" data-tip="home">
<h1>Home</h1>
</div>
</NavLink>
  
  </a></li>


  <li><a>

      <NavLink to="/about" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="home">
  <h1>About</h1>
    </div>
    </NavLink>
        
        </a></li>


        <li><a>

      <NavLink to="/service" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="home">
  <h1>Service</h1>
    </div>
    </NavLink>
        
        </a></li>



        <li><a>

      <NavLink to="/portfolio" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="home">
  <h1>portfolio</h1>
    </div>
    </NavLink>
        
        </a></li>



        <li><a>

      <NavLink to="/contact" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="home">
  <h1>contact</h1>
    </div>
    </NavLink>
        
        </a></li>
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><a>

      <NavLink to="/" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="home">
  <h1>Home</h1>
    </div>
    </NavLink>
        
        </a></li>
        <li><a>

      <NavLink to="/about" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="About">
  <h1>About</h1>
    </div>
    </NavLink>
        
        </a></li>
        <li><a>

      <NavLink to="/service" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="service">
  <h1>Service</h1>
    </div>
    
    </NavLink>
    
        
        </a></li>

        <li><a>
        <NavLink to="/portfolio" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="service">
  <h1>Portfolio</h1>
    </div>
    </NavLink>

    </a></li>
        <li><a>

      <NavLink to="/contact" as={Link}>
  <div className="tooltip w-10 rounded-full" data-tip="home">
  <h1>Contact</h1>
    </div>
    </NavLink>
        
        </a></li>

        
        
      </ul>
    </div>
    <div className="navbar-end">
      
    </div>
  </div>
  </div>
  )
}

export default Navcomp;