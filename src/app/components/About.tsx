import React from 'react'
import Title from './Title'
import { AiFillThunderbolt } from 'react-icons/ai'
import Image from 'next/image'
import { profile } from '../../../public/assets'

const About = () => {
    
  return (
    <div id='about' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 mdl:px-10 xl:px-1'>
        <Title title="About me" titleNo="01"/>
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p> As a junior android and web developer, I excel in designing and maintaining apps and responsive 
                    websites that offer smooth user experience. My expertise lies in crafting, engaging interfaces through
                    writing clean and optimized code. Am also a team player who thrives in collaborating with cross-functional 
                    teams to produce outstanding web and android applications.
                </p>
                <p>
                    here are a few technologies i&apos;ve been working with:
                </p>
                <ul className='max-w-[450px] text-sm font-inter grid grid-cols-2 gap-2'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Javascript
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        React
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Next js
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Java
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Firebase
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        Php
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        MySQL
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt/></span>
                        HTML & CSS
                    </li>
                </ul>
            </div>
            <div className='w-full lgl:w-1/3 relative group h-80 cursor-pointer group'>
                <div className='h-full w-full relative z-20 pl-6 lgl:pl-0 lgl:border-[2px] lgl:border-textGreen rounded-lg'>
                    <div className='rounded-lg w-full h-full absolute -left-6 -top-6 group-hover:-z-10 group-hover:-left-3 group-hover:-top-3 duration-300 z-10 lgl:bg-hoverColor'></div>
                    <Image className='rounded-lg h-full object-cover object-top absolute -left-6 -top-6 lgl:group-hover:-left-3 lgl:group-hover:-top-3 duration-300' src={profile} alt='George Muigai'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
