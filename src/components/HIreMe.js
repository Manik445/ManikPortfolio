import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HIreMe = () => {
  return (
    <div className='fixed left-4 bottom-4 items-center justify-center overflow-hidden'>
         <div className='w-48 h-auto flex items-center justify-center relative '>
            <CircularText className={'fill-dark animate-spin animate-spin-slow'}/>
            <Link href="mailto:manikgupta919@gmail.com" className='flex items-center justify-center absolute left-1/2 
            top-1/2 -translate-x-1/2 -translate-y-1/2 text-bold text-2xl bg-dark text-light shadow-md 
            border boder-solid border-dark w-20 h-20 rounded-full text-center
            font-semibold hover:bg-light hover:text-dark'>Hire Me</Link>
         </div>   
    </div>   
  )  
}
 
export default HIreMe         