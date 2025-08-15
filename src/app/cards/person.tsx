import Image from 'next/image'
import React from 'react'
interface PersonCardProps {
  imageurl: string
  name: string
  specialization: string
}
const Person: React.FC<PersonCardProps> = ({ imageurl, name, specialization }) => {
  return (
    <div className='w-full h-full flex flex-col  rounded-lg shadow-lg bg-gray-50 items-center justify-center person_card '>
      <div className='w-[40%] h-[90%] xl:w-full xl:h-[80%] lg:w-full lg:h-[80%] md:w-full md:h-[80%] sm:w-[90%] sm:h-[90%] flex justify-center items-center'>
        <div className='w-[90%] h-[85%] xl:w-[80%] xl:h-[90%] lg:w-[80%] lg:h-[90%] md:w-[80%] md:h-[90%] sm:w-[90%]
        sm:h-[90%] flex items-center justify-center relative rounded-lg overflow-hidden'>
          <Image src={imageurl} alt="person image" fill className='object-fit' />
        </div>
      </div>
      <div className='w-[60%] h-[60%] xl:h-[20%] lg:h-[20%] md:h-[20%] sm:h-[20%]  flex flex-col  items-center justify-center '>
        <h1 className='text-[18px] font-bold text-center font14'>{name}</h1>
        <h2 className='text-[13px] text-center font10'>{specialization}</h2>
      </div>
    </div>
  )
}

export default Person;