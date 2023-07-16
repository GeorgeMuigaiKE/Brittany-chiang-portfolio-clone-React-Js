'use client'

import React from 'react'
import { motion } from 'framer-motion'

const RightSide = () => {
  return (
    <motion.div className='w-full h-full flex flex-col items-center justify-end gap-4 z-10'
        initial={{x: 100}}
        animate={{x: 0}}
        transition={{duration: 0.9}}
    >
      <a href="mailto:muigaigeorge452@gmail.com">
        <p className='text-sm rotate-90 w-72 tracking-wide text-textGreen'>George@Muigai.me</p>
      </a>
      <div className='w-[2px] h-32 bg-textDark'></div>
    </motion.div> 
  )
}

export default RightSide
