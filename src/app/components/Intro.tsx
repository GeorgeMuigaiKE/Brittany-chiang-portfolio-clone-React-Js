'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <motion.div id='home' className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4
        lgl:gap-8 mdl:px-10 xl:px-4'
          initial={{x: -200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 0.8}}  
      >
      <h3 className='text-lg font-inter text-textGreen tracking-wide'>Hi, my name is</h3>
      <h1 className='text-4xl lgl:text-6xl font-inter font-semibold flex flex-col gap-3'>George Muigai. <span className='text-textDark'>I build web and android apps</span></h1>
      <p className='text-base md:max-w-[650px] font-medium text-textDark flex flex-col'>With expertise in web and android development, I deliver high-quality <br />
        solutions that meet your specific needs and elevate your online presence
        <span className='learn-more text-textGreen'>Learn more</span>
      </p>
      <button className='text-sm text-textGreen border border-textGreen rounded-lg hover:bg-hoverColor w-52 h-14 tracking-wide'>check out my projects!</button>
    </motion.div>
  )
}

export default Intro
