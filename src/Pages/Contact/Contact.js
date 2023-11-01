import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import video from "../../assests/animation_lnmpr0hb.mp4"
import './contact.css'

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_itvx9x8', 'template_kjdl8yw', form.current, 'oYs0fZ-tmSmHuYr2P')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='bg-gray-900'>
        <h1 className='text-5xl font-bold mb-16 mt-16'><span className="border-b-4 border-indigo-500"> Get In Touch</span></h1>
        <div className='sm:grid grid-cols-1  lg:grid-cols-2 gap-4  ml-24'>
        <div className='formarea'>
        <form className='formareas' ref={form} onSubmit={sendEmail}>
     
        <div className='grid justify-items-center formstyle'>
        <div className="form-control w-full max-w-xs">
  <label className="label mt-4">
    <span className="label-text text-white">Name</span>
   
  </label>
  <input type="text" name="user_name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>
     
      <div className="form-control w-full max-w-xs">
  <label className="label mt-4">
    <span className="label-text text-white">Email</span>
   
  </label>
  <input type="email" name="user_email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  
</div>
     

      <div className="form-control w-full max-w-xs">
  <label className="label mt-4">
    <span className="label-text text-white">Massage</span>
   
  </label>
  <input type="text" name="message" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
</div>
      
      <button type="submit" value="Send" className="btn btn-accent mt-8">Accent</button>
        </div>

      
      
    </form>
        </div>

        <div className='formarea text-start mt-20 '>
          <h1 className='text-5xl font-bold'>Rash Kanto Shuvo</h1>
          <h1 className='mt-4'>Address- Kalachandpur, Gulshan- 2, Dhaka- 1212.</h1>
          <h1 className='mt-4'>Mobile No- (+880) 130 508 0194</h1>
          <h1 className='mt-4'>Email- rk.shuvo209@gmail.com </h1>

        </div>
        </div>
       
      

    </div>
  )
}

export default Contact;