import Image from 'next/image'
import React from 'react'
interface PersonCardProps {
  imageurl: string
  name: string
  specialization: string
}
const Person: React.FC<PersonCardProps> = ({ imageurl, name, specialization }) => {
  return (
    <div className='w-full h-full flex flex-col  rounded-lg shadow-lg bg-gray-50 items-center justify-center person_card'>
      <div className='w-full h-full xl:w-full xl:h-full lg:w-full lg:h-full md:w-full md:h-[80%] sm:w-[90%] sm:h-[90%] flex justify-center items-center  '>
        <div className='w-3/4 h-[65%] xl:w-3/4 xl:h-3/4 lg:w-3/4 lg:h-3/4 md:w-[70%] md:h-[70%] sm:w-3/4
        sm:h-[60%] flex items-center justify-center relative rounded-lg overflow-hidden'>
          <Image src={imageurl} alt="person image" fill className='object-fit' />
        </div>
      </div>
      <div className='w-full h-[20%] flex flex-col '>
        <h1 className='text-[18px] font-bold text-center font14'>{name}</h1>
        <h2 className='text-[13px] text-center font10'>{specialization}</h2>
      </div>
    </div>
  )
}

export default Person;