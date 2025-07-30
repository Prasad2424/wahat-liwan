
'use client';

import React from 'react';
import Image from 'next/image';
import { services, Service } from '../export';

const ServicesPage: React.FC = () => {
  return (
    <section className='w-full flex flex-col '>
      <div className='w-full h-screen' id="services">
        <div className='w-full h-full  opacity-100 flex items-end '>
          <div className='w-full h-[100px] border flex justify-between items-center px-18 opacity-100'>
            <div className=' w-1/2 text-white  text-[30px] font-bold slide-right'></div>
            <div className='text-white text-[25px] font-bold opacity-100 slide-left flex items-center justify-center'></div>
          </div>
        </div>
      </div>
    <div
      id="services"
      className="w-full flex flex-col justify-center items-center gap-20 bg-cover h-fit py-20 px-4 sm:px-6 lg:px-20 bg-center"
      style={{ backgroundImage: `url('/service.png')` }}
    >
      <div className="w-full max-w-screen-xl bg-cover bg-center pt-20">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center text-black mb-16">
          What We Do
        </h1>

        <div className="flex flex-col gap-16">
          {services.map((item: Service, index: number) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex flex-col-reverse ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } md:items-center gap-10 bg-white p-6 sm:p-10 rounded-2xl shadow-md`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="text-lg sm:text-base lg:text-xl xl:text-2xl text-gray-800 font-semibold">
                  {item.about}
                </p>
                <ul className="list-disc list-outside space-y-2 text-gray-700 text-sm sm:text-base lg:text-lg">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {item.image && (
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="rounded-xl object-contain w-full h-auto max-h-[400px]"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default ServicesPage;
