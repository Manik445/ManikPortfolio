import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import PorfilePic from 'public/images/profile/developer-pic-1.png'
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HIreMe from "@/components/HIreMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"; 

export default function Home() {
  return (
    <>    
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
              <div className="w-1/2">
               <Image src={PorfilePic} alt="ManikAvatar" className="w-full h-auto"/>    
              </div>
              <div className="w-1/2 flex flex-col items-center self-center ">  
                <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-5xl !text-left"/>
                <p className="my-2 text-base font-medium">
                  As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                  Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>   
                <div className="flex items-center self-start mt-2">      
                <Link href="Manik_gupta_CV.pdf" target="_blank"
                 className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"  
                  download={true}   
                >Download_Resume <LinkArrow className={"w-6 ml-1"}/></Link>
                <Link href="manikgupta919@gmail.com" target="_blank"
                className="ml-5 text-lg font-medium capitalize text-dark underline"
                >Contact_Me</Link>    
                </div>      
              </div>
          </div>      
        </Layout>     
      <HIreMe/>
      <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightBulb} alt="Icon" className="w-full h-auto"/>    
      </div>
      </main>  
    </>  
  )
}   
          