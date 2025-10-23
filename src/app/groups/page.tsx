"use client"
import Image from 'next/image'
import React, { useRef } from 'react';
import { groups } from '../export'

const GroupsPage = () => {
  const groupsRef = useRef<HTMLDivElement>(null);

  return (
    <div className='w-full h-full flex flex-wrap justify-center items-center space-y-4'>
       <div className="w-full h-[300px] xl:h-screen lg:h-screen md:h-[620px] sm:h-[500px]   relative ">
        <Image src="/images/groups-banner.png" alt={"pic"} fill className="object-fill xl:object-cover lg:object-cover md:object-cover sm:object-cover" />
        <div className="w-full h-full absolute left-0 top-0 bg-gray-900 opacity-60 "></div>
        <div className='xl:w-[40%] lg:w-[41%] md:w-[50%] sm:w-[50%] h-max absolute top-[25%] xl:left-1/14 xl:top-[40%] lg:left-1/8 lg:top-[40%] md:left-1/8  md:top-[50%] sm:left-1/9 sm:top-[50%] text-white  text-left p-2 width75 banner_content '>
          <h1 className='w-max xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[14px] tracking-wider font-semibold slide-left welcomeText border p-2 rounded-2xl'>Our Groups</h1>
          <div className='slide-right h-max '>
            <div className='w-max space-y-0 xl:space-y2 lg:space-y-2 md:space-1.5 sm:space-y-1'>
              <h1 className='xl:h-[75px] lg:h-[60px] md:h-[50px] sm:h-[45px]  xl:text-[50px] lg:text-[42px] md:text-[36px] sm:text-[30px] font-bold titleText height22'><span className="bg-gradient-to-r from-green-500 via-green-00 to-gray-300  bg-clip-text text-transparent titleHeight">
               Our Specialized Divisions
              </span></h1>
            </div>
          </div>
          <div className='w-full h-max bg-black/10 backdrop-blur-[4px] p-3 pl-1 rounded-md  xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] paragraph text-gray-100 pt-2 slide-down '>
            <p className='leading-[13px] xl:leading-[23px] lg:leading-[22px] md:leading-[18px] sm:leading-[16px] tracking-wide  p8'>At Wahat Liwan Technical Services LLC, our strength lies in the synergy of specialized divisions working together to deliver excellence across every project. Each group is built on deep industry knowledge, technical precision, and a commitment to client satisfaction.
            </p>
          </div>
          <div className='w-full'>
            <button className="xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[11px] xl:px-6 xl:py-2 lg:px-5 lg:py-1.5  md:px-3 md:py-1 sm:px-2.5 sm:py-0.5  font-medium rounded-sm transition duration-300 cursor-pointer slide-right font12 bg-green-700 hover:scale-105" onClick={() => groupsRef.current?.scrollIntoView({ behavior: 'smooth' })}
            > View Our Groups
            </button>
          </div>
        </div>
      </div>
      
      <div className='w-full h-full flex items-evenly justify-evenly  flex-wrap space-y-4' ref={groupsRef}>
      {groups.map((item, i) => {
        return (
          <div className='w-[90%] xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[80%] h-[150px] xl:h-[180px]  lg:h-[160px] md:h-[150px]
          sm:h-[200px]   relative shadow-lg rounded-lg ' key={i} >
            <Image src={item} alt="group" fill className='object-fill w-1/2'></Image>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default GroupsPage