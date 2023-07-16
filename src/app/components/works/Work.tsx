import { TiArrowForward } from 'react-icons/ti'


const Work = () => {

  return (
    <div>
      <h3 className="flex gap-1 font-medium text-xl font-inter">Android developer <span className="text-textGreen">@Test</span></h3>
      <p className="text-sm mt-1 font-medium text-textDark">Sept 2022 - Dec 2022</p>
      <ul className='mt-4 flex flex-col gap-2'>
        <li className='flex gap-3 items-center text-textDark text-base mt-1'><span className='text-textGreen'><TiArrowForward/></span>Developed android applications using java, rest api and many other frameworks</li>
        <li className='flex gap-3 items-center text-textDark text-base mt-1'><span className='text-textGreen'><TiArrowForward/></span>School network management</li>
        <li className='flex gap-3 items-center text-textDark text-base mt-1'><span className='text-textGreen'><TiArrowForward/></span>Students portal maintenance</li>
      </ul>
    </div>
  )
}

export default Work
