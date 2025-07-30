import Image from "next/image";
import React from "react";
const Footer = () => {
    return (
        <footer className="w-full h-max xl:h-[350px] lg:h-[360px] md:h-[320px] sm:h-[350px] ">
            <div className="w-full h-[520px] xl:h-[300px] lg:h-[310px] md:h-[270px] sm:h-[430px] flex flex-wrap xl:justify-evenly lg:justify-evenly
             md:justify-start sm:justify-evenly items-center bg-blue-900 text-gray-100 xl:p-0 lg:p-0 md:p-0 sm:p-6 p-6 hmax">
                <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 sm:w-1/2 h-1/2 xl:h-full lg:h-full md:h-full sm:h-1/2  flex justify-center items-center width50 footer_section  footer_section ">  
                    <div className="w-[80%] xl:w-3/4 lg:w-full md:w-full sm:w-[80%]  h-3/4 padding-down ">
                    <div className="w-full h-[25%]  flex justify-center  items-start relative logo ">
                        <Image src="/images/companylogo.png" alt="" fill className="object-contain "/>
                    </div>
                    </div>
                </div>
                <div className=" w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/6 sm:w-1/2 h-1/2 xl:h-full lg:h-full md:h-full sm:h-1/2 flex  justify-center items-center width50 footer_section  ">
                    <div className="w-[90%] xl:w-3/4 lg:w-full md:w-full sm:w-[80%]  h-3/4  flex flex-col space-y-5  text-center  padding-down ">
                        <h1 className="font-bold text-white text-[13px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] textleft">QUICK LINKS</h1>
                        <ul className="flex  flex-col space-y-5 text-gray-100 textleft text-[11px] xl:text-[13px] lg:text-[12px] md:text-[10px] sm:text-[11px]
                        xl:space-y-5 lg:space-y-4 md:space-y-3 sm:space-y-4">
                            < li><a href="" className="hover:underline ">HOME</a></ li>
                            < li><a href="" className="hover:underline ">ABOUT US</a></ li>
                            < li><a href="" className="hover:underline ">GROUPS</a></ li>
                            < li><a href="" className="hover:underline ">PROJECTS</a></ li>
                        </ul>

                    </div>

                </div>
                <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 sm:w-1/2 h-1/2 xl:h-full lg:h-full md:h-full sm:h-1/2 flex flex-col justify-center items-center width50  footer_section  ">
                <div className="w-[90%] xl:w-3/4 lg:w-full md:w-full sm:w-[80%]  h-3/4  flex flex-col space-y-5  text-center padding-down  ">
                <h1 className="font-bold text-white text-[13px]  xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px]  textleft">SPECIALIZATION IN</h1>                       
                    <ul className="flex  flex-col space-y-5 text-gray-100 textleft text-[10px] xl:text-[13px] lg:text-[12px] md:text-[10px] sm:text-[11px]
                        xl:space-y-5 lg:space-y-4 md:space-y-3 sm:space-y-4">
                            < li><a href="" className="hover:underline ">MECHANICAL SPECILIZATION</a></ li>
                            < li><a href="" className="hover:underline ">PLUMBING SPECILIZATION</a></ li>
                            < li><a href="" className="hover:underline ">ELECTRICAL SPECILIZATION</a></ li>
                            < li><a href="" className="hover:underline ">PRECAST SPECILIZATION</a></ li>
                        </ul>
                </div>
                </div>

                <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-[30%] sm:w-1/2  h-1/2 xl:h-full lg:h-full md:h-full sm:h-1/2 flex flex-col justify-center items-center width50 footer_section  ">
                    <div className="w-full xl:w-[90%] lg:w-full md:w-full sm:w-[80%]  h-3/4 space-y-2 xl:space-y-2 lg:space-y-2 md:space-y-2 sm:space-y-0 padding-down ">
                        <h3 className="xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] textleft font-bold text-white text-[13px] ">CONTACT US</h3>
                        <div className="">
                            
                            <h4 className="font-semibold  text-[12px]  xl:text-[14px] lg:text-[14px] md:text-[13px] sm:text-[12px]"><i className='bx bx-current-location pr-1'></i>We Are Here</h4>
                            <p className="xl:text-[12px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[10px] max-w-full  ">Big Four Building Flat
                                No:112(1st Floor)

                                P.O Box:67411,Al Nabba,
                                Sharjah-U.A.E
                            </p>
                        </div>
                        <div className="">
                             <h4 className="font-semibold text-[13px]  xl:text-[14px] lg:text-[14px] md:text-[13px] sm:text-[12px]"><i className='bx bx-phone-call pr-1' ></i>CALL US</h4>
                                    <a href="tel:+971-50975442" className="xl:text-[12px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[10px]   hover:underline">+971-50975442 <span>,</span></a>
                                    <a href="tel:+971-556038444" className="xl:text-[12px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[10px]  hover:underline">+971-556038444</a>
                        </div>
                    <div className="" >
                          <h4 className="font-semibold text-[13px]  xl:text-[14px] lg:text-[14px] md:text-[13px] sm:text-[12px]"><i className='bx bx-envelope pr-1' ></i>MAIL US</h4>
                                    <a href="mailto:info@azservices.com" className="xl:text-[12px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[10px]   hover:underline ">info@azservices.com , </a>

                                <a href="mailto:raju@azservices.com" className="xl:text-[12px] lg:text-[12px] md:text-[11px] sm:text-[10px] text-[10px] hover:underline">raju@azservices.com</a>
                    </div>
                    </div>

                </div>


            </div>

            <div className="w-full h-[50px] bg-orange-400 flex justify-around  items-center xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] textleft font-semibold text-[10px]">
             <p className="text-center">&copy;copyright2025</p>
             <p>All rights reserved to G.Naga chittibabu</p>
            </div>
        </footer>
    )
}
export default Footer



