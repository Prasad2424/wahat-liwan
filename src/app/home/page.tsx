import React from 'react'
import HomeCarousel from '../components/carousel';
import PromiseSection from '../components/promiseSection';
import CoreValueSection from '../components/corevalueSection';
import ProjectSection from '../components/projectSection';
import TeamSection from '../components/TeamSection';



const HomePage = () => {

  return (
    <div className='w-full h-full flex flex-col gap-y-4 '>
      <HomeCarousel/>
      <PromiseSection />
      <CoreValueSection />
      <ProjectSection />
      <TeamSection  />
    </div>
  )
}

export default HomePage;