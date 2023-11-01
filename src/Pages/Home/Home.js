import React from 'react'
import img1 from "../../assests/IMG_9616-removebg-preview (1).png";
import img2 from "../../assests/IMG_20230808_171522-removebg-preview.png";
import Typewriter from "typewriter-effect";
import About from '../About/About';
import './Home.css'
import Workservice from '../WorkService/Workservice';
import Client from '../Client Review/Client';
import Footer from '../Footer/Footer';
import Portfolios from '../Portfolios/Portfolios';
import Contact, { ContactUs } from '../Contact/Contact';




const Home = () => {
  return (
    <div className='bgg'>
      <div>
        <div className="grid justify-items-center items-center relative banner">
          <img src={img2} alt="" />
          <h1 className="text-6xl text-shuvo  absolute bottom-0  ">
            Rash Kanto (Shuvo)
          </h1>
        </div>
      </div>
      <div></div>
      <div className="grid tagline  gap-4 mr-64 ml-64 bg-gradient-to-r from-slate-800 h-44 flex items-center border-b-4 border-indigo-500 justify-items-center items-center">
      <div className="typerighter grid justify-items-center items-center text-4xl ">
        
        <Typewriter
          options={{
            strings: ["Highly expert in SEO", "3+ Year Work Experiance"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
        
      </div>

     
      
    <p className="mr-56 ml-56 mt-8 tag text-xl">SEO Specialist Virtuoso: Elevate Your Online Presence | Enhance Your Brand with SEO Mastery | Crafting Digital Triumphs</p>

<div className='mt-16'>
  <About></About>
</div>
<div className='mt-48'>
  <Workservice></Workservice>
</div>

<div>
  <Portfolios></Portfolios>
</div>

{/* <div className='mt-32'>
  <Client></Client>
</div> */}
<div className='mt-48'>
  <Contact></Contact>
</div>
<div className='mt-48'>
  <h1 className='text-5xl'>If you want make your website SEO Friendly</h1>
  <h1 className='text-6xl'>i will be your right choice</h1>
</div>
<div className='mt-48'>
  <Footer></Footer>
</div>
    </div>
    
  )
}

export default Home