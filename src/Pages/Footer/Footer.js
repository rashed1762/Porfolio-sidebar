import React from 'react'
import image2 from"../../assests/cropped-rs-logo-golden-round-01-1-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBuildingColumns, faCar,  faGlobe,  faPlateWheat,  faWaveSquare } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img className='footerlogo' src={image2} alt="" />
    <h1 className='text-1xl font-bold'>Highly Expert SEO Specialist</h1>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">On-Page SEO</a> 
    <a className="link link-hover">Off-Page SEO</a> 
    <a className="link link-hover">Local SEO</a> 
    <a className="link link-hover">Technical SEO</a>
  </nav> 
  <nav>
    <header className="footer-title">Links</header> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">About Us</a> 
    <a className="link link-hover">Portfolio</a> 
    <a className="link link-hover">Contact</a>
  </nav> 
  <nav>
    <header className="footer-title">Social</header> 
    <div>
    <FontAwesomeIcon className='icon mr-4' icon={faFacebook} />
    <FontAwesomeIcon className='icon mr-4' icon={faLinkedin} />
    <FontAwesomeIcon className='icon mr-4' icon={faWhatsapp} />
    <FontAwesomeIcon className='icon' icon={faGlobe} />
    </div>
    
    
  </nav>
</footer>
    </div>
  )
}

export default Footer