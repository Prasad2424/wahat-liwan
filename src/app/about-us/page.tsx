'use client';

import React from 'react';
import Image from 'next/image';
import { about } from '../export';

const AboutUs = () => {
  return (
    <section
      className="w-full bg-white flex flex-col space-y-8 "  
    >
      <div className='w-full h-[350px] xl:h-screen lg:h-screen md:h-screen sm:h-[500px] bg-gradient-to-r from-orange-400 to-blue-300 bg-orange-300' id="about">
        <div className='w-full h-full bg-black opacity-10 flex items-end '>
          <div className='w-full h-[100px]  flex justify-between items-center px-18 opacity-100'>
            </div>
        </div>
      </div>
      <div className="w-full xl:w-[90%] lg:w-[90%] md:w-[95%] sm:w-full mx-auto  rounded-lg shadow-lg p-8 bg-white">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-center text-black mb-16">
          About Us
        </h2>

        <div className="flex flex-col gap-20  w-full h-max ">
          {about.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-10 xl:gap-16`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-[14px] sm:text-xl md:text-[2xl] lg:text-3xl xl:text-4xl font-bold text-black">
                  {item.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[16px] xl:text-[18px] text-gray-700">
                  {item.para1}
                </p>
                <p className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[16px] xl:text-[18px] text-gray-700">
                  {item.para2}
                </p>
              </div>

              {item.image && (
                <div className="w-full h-full md:w-1/2 flex justify-center ">
                  <div className="w-full h-[200px] xl:h-[300px] lg:h-[300px] md:h-[300px] sm:h-[250px] sm:w-[500px] md:w-[500px] lg:w-[600px] xl:w-[700px] relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="rounded-xl object-fill"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;