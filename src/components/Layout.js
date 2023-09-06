import React from 'react'
import Footer from './Footer'

const Layout = ({children , className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-12${className}`}>
        {children}
    </div>
  )
}   

export default Layout