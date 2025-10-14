import Image from 'next/image'
import React from 'react'

const clients=["/clients/client1.jpeg","/clients/client2.png","/clients/client3.png","/clients/client4.png","/clients/client5.jpeg","/clients/client6.png","/clients/client7.png","/clients/client8.png","/clients/client9.png","/clients/client10.png","/clients/client11.png","/clients/client12.jpeg","/clients/client13.png","/clients/client14.jpeg","/clients/client15.jpeg","/clients/client16.png"]
  
const ClientSection = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-10 bg-white relative flex flex-col space-y-12">
      <h1 className='text-[20px] xl:text-[38px] lg:text-[36px] md:text-[35px] sm:text-[30px] font-bold text-center'>OUR CLIENTS</h1>
    <div className="flex flex-wrap space-y-12 space-x-10 xl:space-x-10 lg:space-x-10 md:space-x-10 sm:space-x-10 justify-center">
      {clients.map((ele)=>(
        <div className='w-[80px] h-[60px] xl:w-[100px] xl:h-[80px] lg:w-[100px] lg:h-[80px] md:w-[90px] md:h-[80px] sm:w-[80px] sm:h-[60px] relative hover:scale-100' key={ele} >
          <Image src={ele} alt="hello" fill className='object-fill'/>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ClientSection