import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from '../../assests/245329438_2848689565355987_7222936952074024145_n.jpg'

const Client = () => {var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
return (
<div className="ml-9 mr-8 mt-26">
    <div>
    <h1 className='text-5xl font-bold mb-16 '><span className="border-b-4 border-indigo-500"> Client Review</span> </h1>
    <Slider {...settings}>
        <div>
        <div className='sm:grid grid-cols-1  lg:grid-cols-3 gap-4'>

<div>
<div className="card w-96 bg-slate-900 shadow-xl">
<figure><img className="p-16" src={img} alt="Shoes" /></figure>
<h1></h1>
<div className="card-body">
<h2 className="card-title">Rashedul Islam</h2>
<p></p>
<div className="card-actions justify-end">

</div>
</div>
</div>
</div>

<div className="col-span-2 mt-16 text-start">
<div className="cardstyle  bg-slate-900 shadow-xl">
<div className="card-body">
<h2 className="card-title">Book Keeping</h2>
<h1 className="font-bold">Jan 24,2023</h1>
<div className="card-actions justify-end">
<button className="btn btn-primary">
<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
</button>
</div>


<hr />
<p>Rash kanto is good at seo.</p>

</div>
</div>
</div>
</div>
        </div>

        <div>
        <div className='sm:grid grid-cols-1  lg:grid-cols-3 gap-4'>

<div>
<div className="card w-96 bg-slate-900 shadow-xl">
<figure><img className="p-16" src="https://media.licdn.com/dms/image/C5603AQGrpIZ0O9oh7Q/profile-displayphoto-shrink_800_800/0/1629699894533?e=2147483647&v=beta&t=z8EMmshr2DlB489xDz209UdpnSicmUdJ0vwgybP_q4g" alt="Shoes" /></figure>
<h1>Unknown.com</h1>
<div className="card-body">
<h2 className="card-title">Daniel shams</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions justify-end">

</div>
</div>
</div>
</div>

<div className="col-span-2 mt-16 text-start">
<div className="cardstyle  bg-slate-900 shadow-xl">
<div className="card-body">
<h2 className="card-title">Book Keeping</h2>
<h1 className="font-bold">Jan 24,2023</h1>
<div className="card-actions justify-end">
<button className="btn btn-primary">
<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
</button>
</div>


<hr />
<p>If a dog chews shoes whose shoes does he choose?</p>

</div>
</div>
</div>
</div>
        </div>



        <div>
        <div className='sm:grid grid-cols-1  lg:grid-cols-3 gap-4'>

<div>
<div className="card w-96 bg-slate-900 shadow-xl">
<figure><img className="p-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRCJHDcDJPuCAdGqPEGHALS8vQAA4CXVDcvw&usqp=CAU" alt="Shoes" /></figure>
<h1>Unknown.com</h1>
<div className="card-body">
<h2 className="card-title">Daniel shams</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions justify-end">

</div>
</div>
</div>
</div>

<div className="col-span-2 mt-16 text-start">
<div className="cardstyle  bg-slate-900 shadow-xl">
<div className="card-body">
<h2 className="card-title">Book Keeping</h2>
<h1 className="font-bold">Jan 24,2023</h1>
<div className="card-actions justify-end">
<button className="btn btn-primary">
<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
</button>
</div>


<hr />
<p>If a dog chews shoes whose shoes does he choose?</p>

</div>
</div>
</div>
</div>
        </div>





        <div>
        <div className='sm:grid grid-cols-1  lg:grid-cols-3 gap-4'>

<div>
<div className="card w-96 bg-slate-900 shadow-xl">
<figure><img className="p-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXprHBLHdtKq3Xc_N1G0L292x5N7b9MXCHTA&usqp=CAU" alt="Shoes" /></figure>
<h1>Unknown.com</h1>
<div className="card-body">
<h2 className="card-title">Daniel shams</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions justify-end">

</div>
</div>
</div>
</div>

<div className="col-span-2 mt-16 text-start">
<div className="cardstyle  bg-slate-900 shadow-xl">
<div className="card-body">
<h2 className="card-title">Book Keeping</h2>
<h1 className="font-bold">Jan 24,2023</h1>
<div className="card-actions justify-end">
<button className="btn btn-primary">
<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
</button>
</div>


<hr />
<p>If a dog chews shoes whose shoes does he choose?</p>

</div>
</div>
</div>
</div>
        </div>


        <div>
        <div className='sm:grid grid-cols-1  lg:grid-cols-3 gap-4'>

<div>
<div className="card w-96 bg-slate-900 shadow-xl">
<figure><img className="p-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7KRapEpSGW5DGsTb32tmXuxQin3N4phZ4A&usqp=CAU" alt="Shoes" /></figure>
<h1>Unknown.com</h1>
<div className="card-body">
<h2 className="card-title">Daniel shams</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions justify-end">

</div>
</div>
</div>
</div>

<div className="col-span-2 mt-16 text-start">
<div className="cardstyle  bg-slate-900 shadow-xl">
<div className="card-body">
<h2 className="card-title">Book Keeping</h2>
<h1 className="font-bold">Jan 24,2023</h1>
<div className="card-actions justify-end">
<button className="btn btn-primary">
<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
</button>
</div>


<hr />
<p>If a dog chews shoes whose shoes does he choose?</p>

</div>
</div>
</div>
</div>
        </div>




        <div>
        <div className='sm:grid grid-cols-1  lg:grid-cols-3 gap-4'>

<div>
<div className="card w-96 bg-slate-900 shadow-xl">
<figure><img className="p-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpXZ0CmW6N75Pi19LTsAHLoXjS3rLOPGwpw&usqp=CAU" alt="Shoes" /></figure>
<h1>Unknown.com</h1>
<div className="card-body">
<h2 className="card-title">Daniel shams</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions justify-end">

</div>
</div>
</div>
</div>

<div className="col-span-2 mt-16 text-start">
<div className="cardstyle  bg-slate-900 shadow-xl">
<div className="card-body">
<h2 className="card-title">Book Keeping</h2>
<h1 className="font-bold">Jan 24,2023</h1>
<div className="card-actions justify-end">
<button className="btn btn-primary">
<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
</button>
</div>


<hr />
<p>If a dog chews shoes whose shoes does he choose?</p>

</div>
</div>
</div>
</div>
        </div>







        <div>
        <div className='sm:grid grid-cols-1  lg:grid-cols-3 gap-4'>

<div>
<div className="card w-96 bg-slate-900 shadow-xl">
<figure><img className="p-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVT8uOn_-IGV9pjRB78wIzmqIrXSaqK0lj4A&usqp=CAU" alt="Shoes" /></figure>
<h1>Unknown.com</h1>
<div className="card-body">
<h2 className="card-title">Daniel shams</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions justify-end">

</div>
</div>
</div>
</div>

<div className="col-span-2 mt-16 text-start">
<div className="cardstyle  bg-slate-900 shadow-xl">
<div className="card-body">
<h2 className="card-title">Book Keeping</h2>
<h1 className="font-bold">Jan 24,2023</h1>
<div className="card-actions justify-end">
<button className="btn btn-primary">
<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
</button>
</div>


<hr />
<p>If a dog chews shoes whose shoes does he choose?</p>

</div>
</div>
</div>
</div>
        </div>






        <div>
        <div className='sm:grid grid-cols-1  lg:grid-cols-3 gap-4'>

<div>
<div className="card w-96 bg-slate-900 shadow-xl">
<figure><img className="p-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7lTzkUDE7wfP8zvacasdtXREAdQxo845nw&usqp=CAU" alt="Shoes" /></figure>
<h1>Unknown.com</h1>
<div className="card-body">
<h2 className="card-title">Daniel shams</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions justify-end">

</div>
</div>
</div>
</div>

<div className="col-span-2 mt-16 text-start">
<div className="cardstyle  bg-slate-900 shadow-xl">
<div className="card-body">
<h2 className="card-title">Book Keeping</h2>
<h1 className="font-bold">Jan 24,2023</h1>
<div className="card-actions justify-end">
<button className="btn btn-primary">
<div className="rating">
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
</button>
</div>


<hr />
<p>If a dog chews shoes whose shoes does he choose?</p>

</div>
</div>
</div>
</div>
        </div>


      
     
    </Slider>
  </div>
</div>
)
}

export default Client