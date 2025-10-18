import Image from 'next/image'
import React from 'react'
type Project = {
    image: string;
    title: string;
};


interface ProjectcardProps {
    index: number;
    logo: string;
    companyName: string;
    projects: Project[]
}

const Projectcard: React.FC<ProjectcardProps> = ({ index, companyName, projects, logo }) => {
    return (
        <section className='w-full h-max xl:h-[550px] lg:h-[550px] md:h-[550px] sm:h-max flex flex-col items-center justify-center'>
            <div className='w-[90%] xl:w-[90%] lg:w-[90%] md:w-[95%] sm:w-[95%] h-[90%]  flex flex-col  rounded-lg shadow-lg'>
                <div key={index} className="w-full h-full flex flex-col space-y-2 " >
                    <div className='w-full h-[100px]  flex items-center justify-center'>
                        <div className='w-[40%] xl:w-[30%] lg:w-[28%] md:w-[25%] sm:w-[25%] h-[50%] xl:h-[80%] lg:h-[70%] md:h-[60%] sm:h-[60%] relative max-h-[80%]'>
                            <Image src={logo} alt="companylogo" fill className='object-fill' />
                        </div>
                        <div className='w-[57%] h-full flex items-center justify-center'>
                            <h3 className="text-[14px] xl:text-[32px] lg:text-[25px] md:text-[22px] sm:text-[18px] font-bold text-center text-black ">
                                {companyName}
                            </h3>
                        </div>
                    </div>

                    <div className="h-max grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  p-4">
                        {projects.map((project, id) => (
                            <div
                                key={id}
                                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 p-4 flex flex-col items-center justify-between h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[360px]"
                            >
                                <div className="w-full h-2/3 flex items-center justify-center">
                                    <div className="relative w-full h-full max-h-[140px]">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="rounded-lg object-fill"
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
            </div>
        </section>
    )
}

export default Projectcard