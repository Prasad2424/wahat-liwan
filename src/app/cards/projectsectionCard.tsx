import React from 'react'
import Image from 'next/image'

interface ProjectsectionCardProps {
    imageurl: string;
    title: string;
    description: string;
    banner:string;
  }
  
  const ProjectsectionCard: React.FC<ProjectsectionCardProps> = ({ imageurl, title, description,banner }) => {  
  return (
<div className='w-[90%] xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[90%] h-[420px] rounded-xl shadow-lg flex flex-col p-2'>
      <div className='w-full h-[280px]  z-0 relative  flex items-center justify-center'>
        <div className='w-[80%] h-full relative rounded-xl overflow-hidden'>
          <Image src={banner} alt={"image"} fill className='object-cover' />
        <div className='w-full h-full  absolute bg-gray-900/20 bg-opacity-60 '></div>
        </div>
      </div>
    <div className="flex flex-col items-center bg-gray-50  rounded-2xl shadow-lg transition-transform duration-300 hover:scale-110 w-[60%] h-[200px] absolute bottom-5 left-[20%] flex items-center justify-center"
          >
            <div className='w-[30%] h-[40%]  flex items-center justify-center'>
            <Image
              src={imageurl}
              alt={title}
              width={96}
              height={96}
              className="xl:w-[90%] xl:h-[90%] lg:w-[90%] lg:h-[80%] md:w-[90%] md:h-[75%] sm:w-[90%] sm:h-[75%]  rounded-lg width100 height75"
            />
            </div>
            <div className='w-full h-1/2'>
            <h2 className="xl:text-[18px] lg:text-[15px] md:text-[14px]  sm:text-[13px] font-semibold text-black text-center font16">
              {title}
            </h2>
            <p className="text-10px leading-[13px] xl:leading-[15px] lg:leading-[13px] md:leading-[12px] sm:leading-[10px] xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-center text-gray-600 font12">{description}</p>
            </div>
          </div>
          </div>
  )
}

export default ProjectsectionCard;