"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { ourpromises } from "../export";
import PromiseCard from "../cards/promisecard";

const PromiseSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 400,
      easing: "ease-in",
      once: true,
    });
  }, []);

  return (
    <section
      id="promises"
      className="w-full flex flex-col items-center justify-center gap-2 bg-cover bg-center py-12 bg-white"
    >
      <h1
        data-aos="zoom-in"
        className="text-xl sm:text-2xl xl:text-4xl  lg:text-3xl md:text-[3xl]  font-bold text-center text-black pb-12"
      >
        Our Promise as a contractor is to build your project
      </h1>

      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full  flex flex-wrap  gap-y-6 xl:gap-y-2 lg:gap-y-2 md:gap-y-2 sm:gap-y-4  items-center justify-center "
      >
        {ourpromises.map((item) => (
        <div key={item.title} className="promise_card xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-[45%] h-[450px]
        xl:h-[450px] lg:h-[370px] md:h-[350px] sm:h-[350px] flex items-center justify-center width90 promise-section">
          <PromiseCard imageurl={item.image} title={item.title} description={item.description} />
        </div>
        ))}
      </div>
    </section>
  );
};

export default PromiseSection;