import { TiArrowForward } from 'react-icons/ti'


const Work = () => {

  return (
    <div>
      <h3 className="flex gap-1 font-medium text-xl font-inter">IT intern <span className="text-textGreen">@Lorem</span></h3>
      <p className="text-sm mt-1 font-medium text-textDark">Sept 2022 - Dec 2022</p>
      <ul className='mt-4 flex flex-col gap-2'>
        <li className='flex gap-3 items-center text-textDark text-base mt-1'><span className='text-textGreen'><TiArrowForward/></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis vero tenetur possimus, quo maxime, a dolores, </li>
        <li className='flex gap-3 items-center text-textDark text-base mt-1'><span className='text-textGreen'><TiArrowForward/></span>quidem similique est quibusdam necessitatibus quos obcaecati enim error unde ad ab libero.</li>
        <li className='flex gap-3 items-center text-textDark text-base mt-1'><span className='text-textGreen'><TiArrowForward/></span>Tempore officiis vero tenetur possimus, quo maxime, a dolores,</li>
      </ul>
    </div>
  )
}

export default Work
