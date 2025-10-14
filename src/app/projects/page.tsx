'use client'
import React,{useRef,useState} from 'react'
import Image from 'next/image'
import CompletedProjects from '../completed-projects/page'

const ProjectsPage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const[completedProjects, setCompletedProjects] = useState(false);
  const [ongoingProjects, setOngoingProjects] = useState(false);
  return (
    <div className='flex flex-col gap-y-6'>
      <div className="w-full h-[300px] xl:h-screen lg:h-screen md:h-[620px] sm:h-[500px]   relative ">
        <Image src="/images/industrailbanner.png" alt={"pic"} fill className="object-fill xl:object-cover lg:object-cover md:object-fill sm:object-cover" />
        <div className="w-full h-full absolute left-0 top-0 bg-gray-900 opacity-60 "></div>
        <div className='xl:w-[40%] lg:w-[41%] md:w-[50%] sm:w-[50%] h-max absolute top-[25%] xl:left-1/14 xl:top-[40%] lg:left-1/8 lg:top-[40%] md:left-1/8  md:top-[50%] sm:left-1/9 sm:top-[50%] text-white  text-left p-2 width75 banner_content '>
          <h1 className='w-max xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[14px] tracking-wider font-semibold slide-left welcomeText border p-2 rounded-2xl'>Our Projects</h1>
          <div className='slide-right h-max '>
            <div className='w-max space-y-0 xl:space-y2 lg:space-y-2 md:space-1.5 sm:space-y-1'>
              <h1 className='xl:h-[75px] lg:h-[60px] md:h-[50px] sm:h-[45px]  xl:text-[50px] lg:text-[42px] md:text-[36px] sm:text-[30px] font-bold titleText height22'><span className="bg-gradient-to-r from-green-500 via-green-00 to-gray-300  bg-clip-text text-transparent titleHeight">
                Turn Your Dreams to Reality
              </span></h1>
            </div>
          </div>
          <div className='w-full h-max bg-black/10 backdrop-blur-[4px] p-3 pl-1 rounded-md  xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] paragraph text-gray-100 pt-2 slide-down '>
            <p className='leading-[13px] xl:leading-[23px] lg:leading-[22px] md:leading-[18px] sm:leading-[16px] tracking-wide  p8'>At Wahat Liwan Technical Services LLC, our projects reflect the precision, scale, and reliability that define our brand. From industrial complexes to commercial developments, we specialize in delivering electro-mechanical solutions that meet the highest standards of performance and efficiency...
            </p>
          </div>
          <div className='w-full'>
          <button className="xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[11px] xl:px-6 xl:py-2 lg:px-5 lg:py-1.5  md:px-3 md:py-1 sm:px-2.5 sm:py-0.5  font-medium rounded-sm transition duration-300 cursor-pointer slide-right font12 bg-green-700 hover:scale-105" onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
>
                  View Projects
                </button>
          </div>
        </div>
      </div>

      <div ref={projectsRef}>
        <div className='w-full h-[150px] gap-x-14 text-[28px] flex items-center justify-center font-semibold '>
        <button className='border p-4 rounded-lg shadow-md  cursor-pointer bg-gradient-to-r from-gray-200 to-gray-100' onClick={()=>{setOngoingProjects(true);setCompletedProjects(true)}}>ALL </button>
          <button className='border p-4 rounded-lg shadow-md  cursor-pointer bg-gradient-to-r from-gray-200 to-gray-100' onClick={()=>{setOngoingProjects(true);setCompletedProjects(false)}}>ONGOING PROJECTS </button>
          <button className='border p-4 rounded-lg shadow-md  cursor-pointer bg-gradient-to-l from-gray-200 to-gray-100' onClick={()=>{setCompletedProjects(true);setOngoingProjects(false)}}>COMPLETED PROJECTS </button>
        </div>
      </div>
      {completedProjects && (
      <div>
        <CompletedProjects />
      </div>
      )
      }
      {ongoingProjects && (
        <div>
        </div>
      )}
    </div>
  )
}

export default ProjectsPage