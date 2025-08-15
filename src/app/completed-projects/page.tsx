'use client';

import React from 'react';
import Image from 'next/image';
import { completedProjects } from '../export';

const CompletedProjects: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-12 bg-white">
      {completedProjects.map((group, index) => (
        <div key={index} className="mb-16">
          <h3 className="text-3xl font-semibold text-center text-black mb-10">
            {group.company}
          </h3>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {group.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 p-4 flex flex-col items-center justify-between h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[360px]"
              >
                 <div className="w-full h-2/3 flex items-center justify-center">
                  <div className="relative w-full h-full max-h-40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="w-full h-1/3">
                  <p className="xl:text-[18px] lg:text-[15px] md:text-[14px]  sm:text-[13px] font-semibold text-black text-center font16">PROJECT</p>
                  <h4 className="text-10px leading-[13px] xl:leading-[15px] lg:leading-[13px] md:leading-[12px] sm:leading-[10px] xl:text-[14px] lg:text-[12px] md:text-[12px] sm:text-[11px] text-center text-gray-600 font12 mt-2">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedProjects;