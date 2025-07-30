"use client";

import React ,{useEffect} from 'react'
import Person from '../cards/person'
import { Persons } from '../export'
import 'aos/dist/aos.css';
import Aos from 'aos'

const TeamSection = () => {
    useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 500,
          easing: "ease-in-sine",
        });
      }, []);
    return (
        <div className='w-full h-max xl:h-[700px] lg:h-[690px] flex justify-center items-center '>
            <div className='w-[90%] h-[90%]  rounded-lg shadow-lg flex flex-col space-y-6 justify-center bg-white'>
                <div className='w-full'>
                    <h1 className='text-center text-xl sm:text-2xl lg:text-4xl md:text-[3xl] font-bold font14'>Our Professional Team</h1>
                </div>
                <div className='w-[100%] flex justify-center'>
                    <p className='w-3/4 text-center break-words text-[11px] xl:text-[16px] lg:text-[16px] md:text-[14px] width100 font10'>At AZ Services Technical Cont,our cohesive teams are the cornerstone of both our initial foundation and ongoing success. As our most valued resource, we believe our team deserves the very best — an environment that promotes prosperity, continuous learning, and the enhancement of their skills. Carefully selected for their expertise and adaptability, we have built a team tailored to meet your most abstract and ambitious needs.</p>
                </div>
                <div className='flex justify-center xl:justify-evenly lg:justify-evenly md:justify-center sm:justify-center xl:space-x-4 lg:space-x-4 md:sapce-x-3 sm:space-x-5  space-y-4  flex-wrap ' data-aos="zoom-in" aos-delay="200">
                    {Persons.map((item) => (
                        <div className='w-[80%] xl:w-1/4 h-[150px] xl:h-[350px] lg:h-[340px] md:h-[330 px] sm:h-[320px] lg:w-[32%] md:w-[40%] sm:w-[42%]  ' key={item.name}>
                            <Person imageurl={item.imageurl} name={item.name} specialization={item.specialization} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TeamSection;