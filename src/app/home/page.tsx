"use client"
import React, { useRef }  from 'react';
import HomeCarousel from '../components/carousel';
import PromiseSection from '../components/promiseSection';
import CoreValueSection from '../components/corevalueSection';
import ProjectSection from '../components/projectSection';
import TeamSection from '../components/TeamSection';

const HomePage = () => {
  const promiseRef = useRef<HTMLDivElement>(null);

  const handleReadMoreClick = () => {
    promiseRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full flex flex-col gap-y-4">
      <HomeCarousel onReadMoreClick={handleReadMoreClick} />
      <div ref={promiseRef}>
        <PromiseSection />
      </div>
      <CoreValueSection />
      <ProjectSection />
      <TeamSection />
    </div>
  );
};

export default HomePage;