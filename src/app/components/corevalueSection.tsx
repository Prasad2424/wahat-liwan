"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { corevalues } from "../export";
import CoreValueCard from "../cards/coreValueCard";


const CoreValueSection = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 500,
            easing: "ease-in-sine",
        });
    }, []);

    return (
        <section
            id="core-values"
            className="w-full h-max flex flex-col items-center justify-center bg-cover bg-center "
        >
            <div className="w-[90%] h-max flex flex-col space-y-14 py-10 items-center justify-center bg-white rounded-lg shadow-lg">
                <h1
                    data-aos="zoom-in"
                    className="text-2xl sm:text-2xl lg:text-4xl md:text-[3xl] font-bold text-black text-center "
                >
                    Company Core Values
                </h1>

                <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    className="w-full flex items-center  justify-center flex-wrap space-y-8"
                >
                    {corevalues.map((item) => (
                        <div className="xl:w-full lg:w-full 
                        md:w-full sm:w-full flex items-center justify-center" key={item.title}>
                        <CoreValueCard imageurl={item.image} title={item.title} description={item.about} key={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValueSection;