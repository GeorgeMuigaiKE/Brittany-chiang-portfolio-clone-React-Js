import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { amd, fashion, sports } from '../../../public/assets'
import { FiGithub } from 'react-icons/fi'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <div id='projects' className='max-w-contentContainer mx-auto py-10'>
      <Title title="Some things I have built" titleNo='03'/>

      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        {/* Project 1 */}
        <div className='flex flex-col xl:flex-row gap-6'>
          <a href="#" target='_blank' className='w-full xl:w-1/2 relative'>
            <div className='h-[400px] w-full overflow-hidden'>
              <Image className='w-full object-contain cursor-pointer translate-y-0 hover:-translate-y-[calc(100%-410px)] duration-[4000ms]' 
                  src={sports}
                  alt='Sports website'
              />
            </div>
          </a>
        <div className='w-full xl:w-1/2 flex flex-col gap-6 items-end text-left xl:-ml-16 z-10'>
          <p className='text-textGreen font-inter text-sm tracking-wide'>Featured Project</p>
          <h3 className='text-2xl font-bold'>Sports Wear</h3>
          <p className='bg-[#112240] md:text-base text-sm p-2 md:p-6 rounded-md'>An e-commerce sports wear website for visualizing personalized Amazon website. 
             View your products, Add your account with O-auth and then make the purchase 
             using stripe.
          </p>
          <ul className='text-xs md:text-sm font-inter tracking-wide flex justify-between text-textDark gap-2 md:gap-5'>
            <li>Next js</li>
            <li>React</li>
            <li>typescript</li>
            <li>Stripe</li>
            <li>tailwind css</li>
          </ul>
          <div className='text-2xl flex gap-3'>
            <a href="https://github.com/GeorgeMuigai" target='_blank' className='hover:text-textGreen '>
              <FiGithub />
            </a>
            <a href="https://github.com/GeorgeMuigai" target='_blank' className='hover:text-textGreen group relative w-auto'>
              <RxOpenInNewWindow />
              {/* <span className='group-hover:-right-20 -z-10 group-hover:opacity-100 opacity-0 text-textGreen bg-[#112240] p-2 rounded-sm absolute -top-2 -right-52 duration-200'>Demo</span> */}
            </a>
          </div>
        </div>
        </div>
        {/* project 2 */}
        <div className='flex flex-col xl:flex-row-reverse gap-6'>
          <a href="#" target='_blank' className='w-full xl:w-1/2 relative'>
            <div className='h-[400px] w-full overflow-hidden'>
              <Image className='w-full object-contain cursor-pointer translate-y-0 hover:-translate-y-[calc(100%-410px)] duration-[6000ms]' 
                  src={amd}
                  alt='Sports website'
              />
            </div>
          </a>
        <div className='w-full xl:w-1/2 flex flex-col gap-6 items-end text-left  z-10'>
          <p className='text-textGreen font-inter text-sm tracking-wide'>Featured Project</p>
          <h3 className='text-2xl font-bold'>Amd Eats</h3>
          <p className='bg-[#112240] md:text-base text-sm p-2 md:p-6 rounded-md xl:-mr-16'>
            An android food delivery app where restaurant owners can add new food items to their cuisine and can see the food items users have ordered. 
            users can see all the restaurants and can see their cuisines and the prices. users can add the food to their cart.
          </p>
          <ul className='text-xs md:text-sm font-inter tracking-wide flex justify-between text-textDark gap-2 md:gap-5'>
            <li>Java</li>
            <li>retrofit</li>
            <li>Firebase</li>
            <li>google maps</li>
          </ul>
          <div className='text-2xl flex gap-3'>
            <a href="https://github.com/GeorgeMuigai" target='_blank' className='hover:text-textGreen '>
              <FiGithub />
            </a>
            <a href="https://github.com/GeorgeMuigai" target='_blank' className='hover:text-textGreen group relative w-auto'>
              <RxOpenInNewWindow />
              {/* <span className='group-hover:-right-20 -z-10 group-hover:opacity-100 opacity-0 text-textGreen bg-[#112240] p-2 rounded-sm absolute -top-2 -right-52 duration-200'>Demo</span> */}
            </a>
          </div>
        </div>
        </div>
        {/* Project 3 */}
        <div className='flex flex-col xl:flex-row gap-6'>
          <a href="#" target='_blank' className='w-full xl:w-1/2 relative'>
            <div className='h-[400px] w-full overflow-hidden'>
              <Image className='w-full object-contain cursor-pointer translate-y-0 hover:-translate-y-[calc(100%-410px)] duration-[4000ms]' 
                  src={fashion}
                  alt='Fashion Wear website'
              />
            </div>
          </a>
        <div className='w-full xl:w-1/2 flex flex-col gap-6 items-end text-left xl:-ml-16 z-10'>
          <p className='text-textGreen font-inter text-sm tracking-wide'>Featured Project</p>
          <h3 className='text-2xl font-bold'>Fashion Wear</h3>
          <p className='bg-[#112240] md:text-base text-sm p-2 md:p-6 rounded-md'>An e-commerce sports wear website for visualizing personalized Amazon website. 
             View your products, Add your account with O-auth and then make the purchase 
             using stripe.
          </p>
          <ul className='text-xs md:text-sm font-inter tracking-wide flex justify-between text-textDark gap-2 md:gap-5'>
            <li>Next js</li>
            <li>React</li>
            <li>typescript</li>
            <li>Stripe</li>
            <li>tailwind css</li>
          </ul>
          <div className='text-2xl flex gap-3'>
            <a href="https://github.com/GeorgeMuigai" target='_blank' className='hover:text-textGreen '>
              <FiGithub />
            </a>
            <a href="https://github.com/GeorgeMuigai" target='_blank' className='hover:text-textGreen group relative w-auto'>
              <RxOpenInNewWindow />
              {/* <span className='group-hover:-right-20 -z-10 group-hover:opacity-100 opacity-0 text-textGreen bg-[#112240] p-2 rounded-sm absolute -top-2 -right-52 duration-200'>Demo</span> */}
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
