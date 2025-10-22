'use client';

import React,{useRef} from 'react';
import Image from 'next/image';
import { about } from '../export';
import CoreValueSection from '../components/corevalueSection';


const AboutUs = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="w-full bg-white flex flex-col space-y-8 "  
    > 
      <div className="w-full h-[300px] xl:h-screen lg:h-screen md:h-[620px] sm:h-[500px]   relative ">
        <Image src="/images/about-us ban.png" alt={"pic"} fill className="object-cover xl:object-fit lg:object-cover md:object-cover sm:object-cover" />
        <div className="w-full h-full absolute left-0 top-0 bg-gray-900 opacity-60 "></div>
        <div className='xl:w-[40%] lg:w-[41%] md:w-[50%] sm:w-[50%] h-max absolute top-[25%] xl:left-1/14 xl:top-[40%] lg:left-1/8 lg:top-[40%] md:left-1/8  md:top-[50%] sm:left-1/9 sm:top-[50%] text-white  text-left p-2 width75 banner_content '>
          <h1 className='w-max xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[14px] tracking-wider font-semibold slide-left welcomeText border p-2 rounded-2xl'>About Us</h1>
          <div className='slide-right h-max '>
            <a href="#about-us" className='w-max space-y-0 xl:space-y2 lg:space-y-2 md:space-1 sm:space-y-1'>
              <h1 className='xl:h-[75px] lg:h-[60px] md:h-[50px] sm:h-[45px]  xl:text-[50px] lg:text-[42px] md:text-[36px] sm:text-[30px] font-bold titleText height22'><span className="bg-gradient-to-r from-green-500 via-green-00 to-gray-300  bg-clip-text text-transparent titleHeight">
                Know About us
              </span></h1>
            </a>
          </div>
          <div className='w-full h-max bg-black/10 backdrop-blur-[4px] p-3 pl-1 rounded-md  xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] paragraph text-gray-100 pt-2 slide-down '>
            <p className='leading-[13px] xl:leading-[23px] lg:leading-[22px] md:leading-[18px] sm:leading-[16px] tracking-wide  p8'>At Wahat Liwan Technical Services LLC, we are driven by a steadfast commitment to excellence in every facet of electro-mechanical engineering. Our foundation is built on credibility, quality, and cost efficiency, backed by a proven track record of delivering complex solutions across major projects....
            </p>
          </div>
          <div className='w-full'>
          <button className="xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[11px] xl:px-6 xl:py-2 lg:px-5 lg:py-1.5  md:px-3 md:py-1 sm:px-2.5 sm:py-0.5  font-medium rounded-sm transition duration-300 cursor-pointer slide-right font12 bg-green-700 hover:scale-105" onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                  More about us
                </button>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[90%] lg:w-[90%] md:w-[95%] sm:w-full mx-auto  rounded-lg shadow-lg p-8 bg-white" ref={aboutRef}
>
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
      <div>
        <CoreValueSection />
      </div>
    </section>
  );
};

export default AboutUs;