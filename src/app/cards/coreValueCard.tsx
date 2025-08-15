import Image from 'next/image';
import React from 'react';

interface CoreValueCardProps {
  imageurl: string;
  title: string;
  description: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ imageurl, title, description }) => {
  return (
    <div
      className="w-[95%] xl:w-[90%] lg:w-[82%] md:w-[85%] sm:w-[88%] h-[90%] flex items-center justify-center shadow-sm rounded-2xl border-gray-500 transition-transform duration-300  flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row bg-white"
    >
      <div className='w-[10%] h-[100px]  xl:h-full lg:h-full md:h-full sm:h-[90%] flex items-center justify-center '>
        <Image
          src={imageurl}
          alt={title}
          width={96}
          height={96}
          className="xl:w-[70%] xl:h-[50%] lg:w-full lg:h-[50%] md:w-full md:h-[50%] sm:w-[70%] sm:h-[70%]  rounded-lg color-red"
        />
      </div>
      <div className='w-[80%] h-3/4 xl:h-full lg:h-full md:h-full sm:h-[80%]  flex flex-col items-center justify-start xl:justify-center lg:justify-center md:justify-center sm:justify-center  '>
        <h2 className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]  font-semibold text-black text-center mb-2 font13 ">
          {title}
        </h2>

        <p className="w-[90%] text-justify leading-[15px] xl:leading-[22px] lg:leading-[18px] md:leading-[15px] sm:leading-[14px] text-[10px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-gray-600 font10">{description}</p>
      </div>

    </div>
  )
}

export default CoreValueCard;