import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="sm:grid grid-cols-1  lg:grid-cols-2  gap-4 abt">
        <div>
          <p>
          As a seasoned Digital Marketer with a specialization in SEO, my career  ideal is to  constantly elevate online visibility & drive substantial growth for associations. My focus is on casting & executing data- driven SEO strategies, optimizing websites & staying at the  van of assiduity trends. I'm committed to delivering top hunt rankings, enhancing  stoner  gests & maximizing  transformations. My  goal is to  unite with cross-functional  brigades, partake in my moxie & contribute to the holistic success of digital marketing  juggernauts. By continually  conforming to the evolving digital  geography, I aim to deliver measurable results & add significant value to the brands I work with.
          </p>

            
          


          <div className="grid grid-cols-3 gap-4 mt-24 aboutinfo ">
            <div className="">
              <h1 className="text-6xl aboouttext font-bold infopoint ">3 </h1>
              <p className="font-bold text-white"> Years Experience</p>
            </div>

            <div>
              <h1 className="text-6xl aboouttext font-bold infopoint">4 </h1>
              <p className="font-bold text-white">Projects Work</p>
            </div>
            <div>
              <h1 className="text-6xl aboouttext font-bold infopoint">2 </h1>
              <p className="font-bold text-white">Companies Website</p>
            </div>
          </div>
        </div>

        



        <div className="grid grid-cols-2">

       <div>
       <ul className="steps steps-vertical">
  <li  data-content="★" className="step step-primary">Date of Birth: 17th Nov. 1997</li>
  <li data-content="★" className="step step-primary">Educations: B.Sc in CSE</li>
  <li data-content="★" className="step step-primary">Freelancing: Available</li>
  <li data-content="★" className="step step-primary">Interest: Cooking & Photography</li>
</ul>
       </div>


       <div>
       <ul className="steps steps-vertical">
  <li data-content="★" className="step step-primary">Address: Kalachandpur, Gulshan- 2, Dhaka- 1212</li>
  <li data-content="★" className="step step-primary">Mobile: (+880) 130 508 0194</li>
  <li data-content="★" className="step step-primary">WhatsApp: (+880) 195 632 2838</li>
  <li data-content="★" className="step step-primary">Email: rk.shuvo209@gmail.com</li>
</ul>
       </div>

          
        </div>
      </div>

      <div>
        
      </div>

      <div className="skill mt-48">
      <h1 className='text-5xl font-bold mb-16'>Expertise</h1>

          <div className="sm:grid grid-cols-3  lg:grid-cols-6 gap-4  ml-24" >
          
          <div className="radial-progress" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}><span className="radial-progress-title" >On-Page SEO</span> </div>
          <div className="radial-progress" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}><span className="radial-progress-title" >Off-page SEO</span></div>
          <div className="radial-progress" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}><span className="radial-progress-title" >Local SEO</span> </div>
          <div className="radial-progress" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}><span className="radial-progress-title" >On-Page SEO</span> </div>
          <div className="radial-progress" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}><span className="radial-progress-title" >On-Page SEO</span></div>
          <div className="radial-progress" style={{ "--value": "70", "--size": "10rem", "--thickness": "1rem" }}><span className="radial-progress-title" >On-Page SEO</span></div>
          

          

          </div>
      </div>
    </div>
  );
};

export default About;
