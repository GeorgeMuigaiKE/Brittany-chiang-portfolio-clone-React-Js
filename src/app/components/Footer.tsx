import React from 'react'
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden py-6 items-center justify-center gap-4 w-full'>
    <a href="https://github.com/GeorgeMuigai" target='_blank'>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
        justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300'><FiGithub/></span>
    </a>
    <a href="https://github.com/GeorgeMuigai" target='_blank'>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
        justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300'><FiLinkedin/></span>
    </a>
    <a href="https://github.com/GeorgeMuigai" target='_blank'>
        <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
        justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300'><FiInstagram/></span>
    </a>
    </div>
  )
}

export default Footer
