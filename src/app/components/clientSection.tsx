import Image from 'next/image'
import React from 'react'
import {clients} from "../export"

const ClientSection = () => {
  return (
    <div className="w-full h-[300px]  bg-white flex flex-col space-y-12 overflow-hidden justify-center items-center ">
    <h1 className="text-[20px] xl:text-[38px] lg:text-[36px] md:text-[35px] sm:text-[30px] font-bold text-center">
      OUR CLIENTS
    </h1>
  
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-loop space-x-10 px-4">
        {[...clients, ...clients].map((ele, index) => (
          <div
            className="w-[80px] h-[60px] xl:w-[100px] xl:h-[80px] lg:w-[100px] lg:h-[80px] md:w-[90px] md:h-[80px] sm:w-[80px] sm:h-[60px] flex-shrink-0 relative"
            key={index}
          >
            <Image src={ele} alt="client logo" fill className="object-fit" />
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ClientSection