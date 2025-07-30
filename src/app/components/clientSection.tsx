import Image from 'next/image'
import React from 'react'

const clients=["/clients/client1.jpeg","/clients/client2.png","/clients/client3.png","/clients/client4.png","/clients/client5.jpeg","/clients/client6.png","/clients/client7.png","/clients/client8.png","/clients/client9.png","/clients/client10.png"]
  
const ClientSection = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-10 bg-white relative flex flex-col space-y-12">
      <h1 className='text-[20px] xl:text-[40px] lg:text-[38px] md:text-[35px] sm:text-[30px] font-bold text-center'>OUR CLIENTS</h1>
    <div className="flex flex-wrap space-y-12 space-x-2 xl:space-x-10 lg:space-x-5 md:space-x-4 sm:space-x-2 justify-center">
      {clients.map((ele)=>(
        <div className='w-[140px] h-[60px] xl:w-[220px] xl:h-[100px] lg:w-[200px] lg:w-[90px] md:w-[180px] md:h-[80px] sm:w-[160px] sm:h-[70px] relative hover:scale-100' key={ele} >
          <Image src={ele} alt="hello" fill className='object-fill'/>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ClientSection