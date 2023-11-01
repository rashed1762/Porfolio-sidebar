import React from 'react'
import './Work.css'

const Workservice = () => {
  return (
    <div>
         <div className='mt-36 '>
        <h1 className='text-5xl font-bold mb-16'><span className="border-b-4 border-indigo-500"> My Services</span></h1>
        <div className='sm:grid grid-cols-1 lg:grid-cols-3 gap-4  ml-24'>
            <div className='card'>
            <div className=' face front bg-slate-900'>

                <h1 className='serviceinfofront p-8 '> On-Page SEO</h1>
            </div>

            <div className='face back bg-red-900'>
                <h1 className='serviceinfoback text-start p-4'>As an SEO Specialist I provide expert On-Page SEO services, meticulously analyzing web pages to optimize for search engines. This includes precise keyword research, content optimization & meta tag refinement. I focus on enhancing user experience, improving page load times & implementing technical SEO strategies. With a keen eye on every detail, as an SEO Specialist I ensure that websites rank higher, attract organic traffic & remain competitive in the digital landscape.
</h1>
            </div>
            </div>

            <div className='card'>
            <div className='face front bg-slate-900'>
                <h1 className='serviceinfofront p-8'>Off-Page SEO</h1>
            </div>

            <div className='face back back bg-red-900'>
                <h1 className='serviceinfoback text-start p-4'>As an SEO Specialist I offer top-tier Off-Page SEO services, driving impactful external factors to boost website authority. These services involve strategic link building, influencer outreach & social media engagement. By securing high-quality backlinks, social signals & brand mentions, as an SEO Specialist I enhance a website's credibility, trustworthiness & search engine rankings. These efforts are crucial for sustained online visibility & competitive advantage in the ever-evolving digital sphere.
</h1>
            </div>
            </div>


            <div className='card'>
            <div className='face front bg-slate-900'>
                <h1 className='serviceinfofront p-8'>Local SEO</h1>
            </div>

            <div className='face back back bg-red-900'>
                <h1 className='serviceinfoback text-start p-4'>As an SEO Specialist I excel in Local SEO services, tailoring strategies to elevate businesses' regional online presence. With precision, I optimize Google My Business listings, enhance NAP consistency & curate location-specific content. These efforts maximize local search visibility, attract nearby customers & establish trust in the community. As an SEO Specialist I expertise in local SEO ensures businesses dominate local search results, fostering growth & success in their target markets.
</h1>
            </div>
            </div>
           

        </div>  



        <div className='sm:grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8 ml-24 '>
            <div className='card'>
            <div className=' face front bg-slate-900'>

                <h1 className='serviceinfofront p-8 '>Technical SEO</h1>
            </div>

            <div className='face back bg-red-900'>
                <h1 className='serviceinfoback text-start p-4'>Technical SEO services provided by an SEO Specialist I  involve a meticulous examination of a website's architecture and infrastructure. These include optimizing site speed, mobile-friendliness & schema markup implementation. By resolving technical issues, enhancing crawlability & ensuring search engine compatibility, an SEO Specialist I ensure that a website ranks higher & performs optimally. My expertise in technical SEO leads to improved user experience, faster load times & higher search engine rankings, laying a strong foundation for online success.
</h1>
            </div>
            </div>

            <div className='card'>
            <div className='face front bg-slate-900'>
                <h1 className='serviceinfofront p-8'>Article Writing</h1>
            </div>

            <div className='face back back bg-red-900'>
                <h1 className='serviceinfoback text-start p-4'>SEO-friendly Article Writing services by an SEO Specialist I involve crafting engaging, informative & keyword-optimized content. These include thorough keyword research, strategic placement & natural integration within the article. By aligning content with SEO best practices, as an SEO Specialist I ensure that articles rank higher in search results, attract organic traffic & engage readers effectively. My expertise in SEO-friendly article writing contributes to improved online visibility & credibility, driving success in the digital landscape.
</h1>
            </div>
            </div>

            <div className='card'>
            <div className='face front bg-slate-900'>
                <h1 className='serviceinfofront p-8'>SEO Audit</h1>
            </div>

            <div className='face back back bg-red-900'>
                <h1 className='serviceinfoback text-start p-4'>SEO Audit services, I offer as an SEO Specialist, involve a comprehensive evaluation of a website's performance. This includes analyzing on-page & off-page elements, technical aspects, content quality & backlink profile. Through meticulous assessment & data-driven insights, an SEO Specialist identifies issues, I provide actionable recommendations & creates a roadmap for optimization. This service empowers businesses to enhance their online presence, improve search engine rankings & achieve sustainable digital success.</h1>
            </div>
            </div>


            
           

        </div>


        
    </div>
    </div>
  )
}

export default Workservice