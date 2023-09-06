import '@/styles/globals.css'
import {Montserrat} from 'next/font/google'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  return(
  <main className={`${montserrat.variable} font-mont`}>
    <NavBar/>
     <Component {...pageProps}/>    
     <Footer/>
     </main>
  )               
}      
