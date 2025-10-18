
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { services, Service } from '../export';

const ServicesPage: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <section className='w-full flex flex-col '>
      <div className="w-full h-[300px] xl:h-screen lg:h-screen md:h-[620px] sm:h-[500px]   relative ">
        <Image src="/images/hospitalitybannner.png" alt={"pic"} fill className="object-fill xl:object-cover lg:object-cover md:object-fill sm:object-cover" />
        <div className="w-full h-full absolute left-0 top-0 bg-gray-900 opacity-60 "></div>
        <div className='xl:w-[40%] lg:w-[41%] md:w-[50%] sm:w-[50%] h-max absolute top-[25%] xl:left-1/14 xl:top-[40%] lg:left-1/8 lg:top-[40%] md:left-1/8  md:top-[50%] sm:left-1/9 sm:top-[50%] text-white  text-left p-2 width75 banner_content '>
          <h1 className='w-max xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[14px] tracking-wider font-semibold slide-left welcomeText border p-2 rounded-2xl'>Services</h1>
          <div className='slide-right h-max '>
            <div className='w-max space-y-0 xl:space-y2 lg:space-y-2 md:space-1.5 sm:space-y-1'>
              <h1 className='xl:h-[75px] lg:h-[60px] md:h-[50px] sm:h-[45px]  xl:text-[50px] lg:text-[42px] md:text-[36px] sm:text-[30px] font-bold titleText height22'><span className="bg-gradient-to-r from-green-500 via-green-00 to-gray-300  bg-clip-text text-transparent titleHeight">
                What We Offer
              </span></h1>
            </div>
          </div>
          <div className='w-full h-max bg-black/10 backdrop-blur-[4px] p-3 pl-1 rounded-md  xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] paragraph text-gray-100 pt-2 slide-down '>
            <p className='leading-[13px] xl:leading-[23px] lg:leading-[22px] md:leading-[18px] sm:leading-[16px] tracking-wide  p8'>At Wahat Liwan Technical Services LLC, we offer a comprehensive range of electro-mechanical services designed to meet the demands of complex, large-scale projects. Our expertise spans across industries, delivering solutions that are efficient, reliable, and tailored to each client’s unique requirements....
            </p>
          </div>
          <div className='w-full'>
            <button className="xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[11px] xl:px-6 xl:py-2 lg:px-5 lg:py-1.5  md:px-3 md:py-1 sm:px-2.5 sm:py-0.5  font-medium rounded-sm transition duration-300 cursor-pointer slide-right font12 bg-green-700 hover:scale-105" onClick={() => servicesRef.current?.scrollIntoView({ behavior: 'smooth' })}
            > Our Servies
            </button>
          </div>
        </div>
      </div>
      <div
        ref={servicesRef}
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
                className={`flex flex-col-reverse ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
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
