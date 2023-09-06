import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'  
import ProfilePic from 'public/images/profile/developer-pic-2.jpg'

   
const about = () => {
  return (   
    <>
    <Head>
        <title>Manik Gupta | About Me  </title>
       <meta name='description' content='anything'>
       </meta>
    </Head>
    <main className='flex w-full flex-col items-center justify-center'>
    <Layout className='pt-16'>
      <AnimatedText text="Bonjour! Developers" className='mb-8'/>
      <div className='grid w-full grid-cols-8 gap-16 '>
        <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/79'>About Me</h2>
        <p className='font-medium'>
        Hi, I am Manik Gupta , a Full Stack Developer with a passion for creating beautiful, functional, 
and user-centered digital experiences.I am always looking for new and innovative ways to bring my clients' visions to life.
</p>

<p className='font-medium'>
I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. 
</p> 

<p className='font-medium'>   
Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
        </p>

        </div>  
        
        <div className='col-span-3 relative h-full rounded-2xl border-2 border-solid
         border-dark bg-light p-8'>
          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%]
           rounded-2xl bg-dark'/>
          <Image src={ProfilePic} alt="There is an Image" className="w-full h-auto rounded-2xl"/>
           
        </div>

        <div className='col-span-2 flex flex-col items-end justify-between'>

          <div>
        <span>
          500+
        </span>
        <h2>DSA Questions</h2>
          </div>

          <div>
        <span>
          2 
        </span>
        <h2>Web Development <br/>
         Internships</h2>
          </div>

          <div>
        <span>
          5 Start
        </span>
        <h2>Hackerrank</h2>
          </div>

        </div>


      </div>      
    </Layout>
    </main>
    </>
  )
}

export default about      