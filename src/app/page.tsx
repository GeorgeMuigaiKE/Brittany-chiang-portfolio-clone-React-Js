import Image from 'next/image'
import Navbar from './components/Navbar'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Archive from './components/Archive'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='w-full h-screen font-montserrat bg-bodyColor text-textLight
                      overflow-x-hidden overflow-y-scroll'>
      <Navbar />
      <div className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
          <LeftSide/>
        </div>
        <div className='h-[88vh] mx-auto p-4 w-full'>
          <Intro/>
          <About/> 
          <Experience/>
          <Projects/>
          <Archive/>
          <Contact />
          <Footer />
        </div>
        <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
          <RightSide/>
        </div>
      </div>
    </main>
  )
}
