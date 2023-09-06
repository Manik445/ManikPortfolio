import Link from 'next/link'
import React from 'react'
import Logo from './Logo' 
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'

const CoustomLink = ({href , title , className=""}) => {  // using coustom prop for link  
    const router = useRouter(); 
    return (
        <Link href={href} className={`${className} relative group`}>     
          {title}
          {/* adding underline in links  */}  
          <span className={`h-[1px] inline-block bg-dark 
           absolute left-0 -bottom-0.5
           group-hover:w-full transition-[width] ease duration-300 
           ${router.asPath === href ? 'w-full' :'w-0'} 
           `}></span>
        </Link>  
    )          
}   

const NavBar = () => {     
  return (    
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>   
           <CoustomLink href="/" title="Home" className='mr-4'/>  
           <CoustomLink href="/About" title="About" className='mx-4'/>  
           <CoustomLink href="/Project" title="Project" className='mx-4'/>  
           <CoustomLink href="/Articles" title="Articles" className='ml-4'/>          
        </nav>   
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href='/' target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale : 0.9}}
              className="w-6 mr-4"  
            >
                <TwitterIcon/>
            </motion.a>
            <motion.a href='/' target={"_blank"}
              whileHover={{y:-2}}
              whileTap={{scale : 0.9}}
              className="w-6 mx-4"

            >
                <LinkedInIcon/>        
            </motion.a>   
            <motion.a href='/' target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale : 0.9}}
             className="w-6 mx-4"
            >
                <GithubIcon/> 
            </motion.a>        
            <motion.a href='/' target={"_blank"}
             whileHover={{y:-2}}
             whileTap={{scale : 0.9}}
             className="w-6 ml-4"
            >
                <PinterestIcon/>
            </motion.a>   
        </nav>   

        <div className='absolute left-[50%] top-2 translate-x-[50%]'>    
        <Logo/>
        </div>

    </header>
  )     
}

export default NavBar    