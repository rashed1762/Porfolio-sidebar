import React from 'react'
import img9 from '../../assests/1ddd.png'
import img8 from '../../assests/ddsad.png'
import img7 from '../../assests/Screenshot 2023-09-14 114345.png'
import img6 from '../../assests/Screenshot 2023-09-14 114556.png'
import './portfolio.css'

const Portfolios = () => {
  return (
    <div>

<h1 className='text-5xl font-bold mb-16 mt-16'><span className="border-b-4 border-indigo-500"> Portfolios</span></h1>

      <div className='sm:grid grid-cols-1  lg:grid-cols-2 gap-4  ml-24'>
        
      <div className='container'>
        <img className=' image' src={img8} alt="" />

        <div className='overlay overlayleft'>

          <div className='tex'>
            <h1 className='text-6xl'>Dom-Inno</h1>
            <p>Dom-Inno Development Ltd., a leading property developer in Bangladesh, specializes in developing cutting-edge and eco-friendly residential and business areas. They are conspicuously mentioned on Google for terms such as "real estate developer business in Bangladesh" and "developer business in Bangladesh," indicating their significance in the field. Dom-Inno's dedication to excellence establishes them as a reliable property firm in BD and Bangladesh.</p>
            
          </div>

        </div>

      </div>

      <div className='container2'>
        <img className='image2' src={img9} alt="" />

        <div className='overlay2 overlayleft2'>

        <div className='tex'>
            <h1 className='text-6xl'>Generic Perfumes</h1>
            <p> Generic Perfumes is a leading competitor in the realm of scents, recognized for its outstanding selection of specialized perfume extracts and aroma extracts. Their online visibility is emphasized by strong positions on Google for important terms such as "specialty scented oils" and "unique fragrance oils." With a dedication to excellence and a wide range of exclusive aromas, Generic Perfumes has become a favored choice for perfume enthusiasts searching for special and enduring scents. Their commitment to creating top-notch, oil-based fragrances has established their standing in the specialized scent sector, positioning them as the preferred option for individuals in search of a remarkable scent encounter.</p>
            
          </div>

        </div>

      </div>
       



      </div>


      <div className='sm:grid grid-cols-1  lg:grid-cols-2 gap-4  ml-24 mt-16'>
        
      <div className='container3'>
        <img className='image3' src={img7} alt="" />

        <div className='overlay3 overlayleft3'>

        <div className='tex'>
            <h1 className='text-6xl'>Blade 6%</h1>
            <p> Blade 6% Fitness Studio is a well-known gym in Bangladesh, focused on encouraging top-notch health and fitness. With advanced facilities and skilled instructors, we offer a complete fitness journey. Our dedication to personalized training programs guarantees that members successfully reach their fitness objectives. Blade 6% Fitness Studio is not only a gym but also a social group that promotes a way of life centered on healthiness, encouraging people to achieve their complete physical fitness capacity. Come with us on the path towards a better, more physically active, and more content way of living.</p>
            
          </div>

        </div>

      </div>

      <div className='container4'>
        <img className='image4' src={img6} alt="" />

        <div className='overlay4 overlayleft4'>

        <div className='tex'>
            <h1 className='text-6xl'>Cover Me VPN</h1>
            <p> Cover Me VPN is a well-known brand in internet security and confidentiality. With a dedication to safeguarding your online existence, our virtual private network (VPN) service guarantees the confidentiality and reliability of your internet actions. We provide a strong network of servers all over the globe, offering quick and dependable connections. No matter if you're surfing, watching videos, or doing work away from the office, Cover Me VPN ensures that your information stays protected and your personal details remain unknown. We provide assurance in the modern era with easy-to-use applications and excellent customer assistance. Become part of a vast community of content individuals who rely on Cover Me VPN for their internet safety requirements. Protecting your personal information is our main concern.</p>
            
          </div>

        </div>

      </div>
       



      </div>
      
     
    </div>
  )
}

export default Portfolios