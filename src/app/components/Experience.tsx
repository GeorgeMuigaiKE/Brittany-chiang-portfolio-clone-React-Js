'use client'

import {useState} from 'react'
import Title from './Title'
import Work from './works/Work'
import Zetech from './works/Zetech'
import Lorem from './works/Lorem'

const Experience = () => {
  const [workZetech, setWorkZetech] = useState(true)
    const [workTest, setWorkTest] = useState(false)
    const [workLorem, setWorkLorem] = useState(false)

    const handleZetech = () => {
        setWorkZetech(true)
        setWorkTest(false)
        setWorkLorem(false)
    }
    const handleTest = () => {
        setWorkZetech(false)
        setWorkTest(true)
        setWorkLorem(false)
    }
    const handleLorem = () => {
        setWorkZetech(false)
        setWorkTest(false)
        setWorkLorem(true)
    }
  return (
    <div id="experience" className='max-w-containerXs mx-auto pb-10 pt-10'>
      <Title title="Where i have worked" titleNo="02"/>
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          <li onClick={handleZetech} className={`${workZetech ? "border-textGreen": "border-hoverColor"} border-l-2  text-sm cursor-pointer text-textDark font-medium py-3 px-6 hover:bg-[#112240]`}>Zetech</li>
          <li onClick={handleTest} className={`${workTest ? "border-textGreen": "border-hoverColor"} border-l-2  text-sm cursor-pointer text-textDark font-medium py-3 px-6 hover:bg-[#112240]`}>React</li>
          <li onClick={handleLorem} className={`${workLorem ? "border-textGreen": "border-hoverColor"} border-l-2  text-sm cursor-pointer text-textDark font-medium py-3 px-6 hover:bg-[#112240]`}>Lorem</li>
        </ul>
        { workZetech && <Zetech/> }
        { workTest && <Work/> }
        { workLorem && <Lorem/> }
      </div>
    </div>
  )
}

export default Experience
