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
      className="w-[90%] h-[150px] xl:h-[180px] lg:h-[160px] md:h-[150px] sm:h-[140px] flex items-center
      justify-center bg-gray-50 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 core_value flex-row "
    >
      <div className='w-[20%] h-full xl:h-full lg:h-full md:h-full sm:h-[90%] flex items-center justify-center  height75'>
        <Image
          src={imageurl}
          alt={title}
          width={96}
          height={96}
          className="xl:w-[50%] xl:h-[50%] lg:w-[50%] lg:h-[50%] md:w-[50%] md:h-[50%] sm:w-[70%] sm:h-[70%]  rounded-lg width50 height50 "
        />
      </div>
      <div className='w-[80%] xl:h-full lg:h-full md:h-full sm:h-[80%]  flex flex-col items-center justify-center height75'>
        <h2 className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]  font-semibold text-black text-center mb-2 font13 ">
          {title}
        </h2>

        <p className="w-[90%] text-justify leading-[15px] xl:leading-[22px] lg:leading-[18px] md:leading-[15px] sm:leading-[14px] text-[10px] xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[11px] text-gray-600 font10">{description}</p>
      </div>

    </div>
  )
}

export default CoreValueCard;