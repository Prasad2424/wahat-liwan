import Image from "next/image";
import React from "react";
const Footer = () => {
  return (
    <footer className="w-full  h-max xl:h-[330px] lg:h-[300px] md:h-[280px] sm:h-[470px] ">
      <div className="w-full h-[500px] xl:h-[280px] lg:h-[250px] md:h-[230px] sm:h-[420px] flex flex-wrap xl:justify-evenly lg:justify-evenly md:justify-center sm:justify-evenly items-center bg-gradient-to-r from-teal-900 to-teal-700 to-gray-600 text-gray-100 xl:p-0 lg:p-0 md:p-0 sm:p-6 p-4 hmax space-x-0 md:space-x-6">
        <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-1/4 sm:w-1/2 h-[40%] xl:h-full lg:h-full md:h-full sm:h-1/2  flex justify-center items-center width50 footer_section  footer_section ">
          <div className="w-[80%] xl:w-3/4 lg:w-full md:w-full sm:w-[80%]  h-3/4 padding-down space-y-2">
            <div className="w-full h-[40%] xl:h-1/4 lg:h-1/4 md:h-1/3 sm:h-1/3  flex justify-center  items-start relative logo">
              <Image src="/images/logo.png" alt="" fill className="object-fill " />
            </div>
            <ul className="w-full flex items-center justify-center space-x-4 text-[20px] xl:text-[25px] lg:text-[24px] md:text-[23px] sm:text-[22px]">
            <li className='bx bxl-twitter' ></li>
            <li className='bx bxl-instagram' ></li>
            <li className='bx bxl-whatsapp'></li>
            <li className='bx bxl-facebook' ></li>
            </ul>
          </div>
        </div>
        <div className=" w-1/2 xl:w-1/8 lg:w-1/8 md:w-1/6 sm:w-1/2 h-[40%] xl:h-full lg:h-full md:h-full sm:h-1/2 flex  justify-center items-center width50 footer_section  ">
          <div className="w-[90%] xl:w-full lg:w-full md:w-full sm:w-[80%]  h-3/4  flex flex-col space-y-5  text-center  padding-down ">
            <h1 className="font-bold text-white text-[13px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] textleft">QUICK LINKS</h1>
            <ul className="flex  flex-col space-y-5 text-gray-100 textleft text-[11px] xl:text-[13px] lg:text-[12px] md:text-[10px] sm:text-[11px] xl:space-y-5 lg:space-y-4 md:space-y-3 sm:space-y-4">
              < li><a href="" className="hover:underline ">HOME</a></ li>
              < li><a href="" className="hover:underline ">ABOUT US</a></ li>
              < li><a href="" className="hover:underline ">GROUPS</a></ li>
              < li><a href="" className="hover:underline ">PROJECTS</a></ li>
            </ul>

          </div>
        </div>
        <div className=" w-1/2 xl:w-1/8 lg:w-1/8 md:w-1/6 sm:w-1/2 h-1/2 xl:h-full lg:h-full md:h-full sm:h-1/2 flex  justify-center items-start xl:items-center lg:items-center md:items-center sm:items-start width50 footer_section  ">
          <div className="w-[90%] xl:w-full lg:w-full md:w-full sm:w-[80%]  h-3/4  flex flex-col space-y-5  text-center  padding-down ">
            <h3 className="font-bold text-white text-[13px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] textleft">SPECIALIZATION IN</h3>
            <ul className="flex  flex-col space-y-5 text-gray-100 textleft text-[11px] xl:text-[13px] lg:text-[12px] md:text-[10px] sm:text-[11px] xl:space-y-5 lg:space-y-4 md:space-y-3 sm:space-y-4 ">
              <li><a href="#" className="hover:underline">MECHANICAL</a></li>
              <li><a href="#" className="hover:underline">PLUMBING</a></li>
              <li><a href="#" className="hover:underline">ELECTRICAL</a></li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 xl:w-1/5 lg:w-1/5 md:w-[30%] sm:w-1/2  h-1/2 xl:h-full lg:h-full md:h-full sm:h-1/2 flex flex-col justify-center items-center xl:items-center lg:items-center md:items-center sm:items-center  footer_section ">
          <div className="w-[90%] xl:w-3/4 lg:w-full md:w-full sm:w-[80%] h-full xl:h-3/4 lg:h-3/4 md:h-3/4 sm:h-full flex flex-col space-y-2  text-center  padding-down text-left">
            <h3 className="font-bold text-white text-[13px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] textleft">CONTACT US</h3>

            <div>
              <h4 className="font-semibold text-[14px]  "><i className='pr-2 bx bx-current-location'></i>We Are Here</h4>
              <p className="text-[11px]">P.O BOX:67411,Dubai - United Arab Emirates</p>
            </div>

            <div>
              <h4 className="font-semibold text-[14px]"><i className='pr-2 bx bxs-phone-call' ></i>CALL US</h4>
              <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row text-[11px]">
              <a href="tel:+97165217424" className="hover:underline block ">+97165217424,</a>
              </div>
            </div>
            <div >
            <h4 className="font-semibold text-[14px]"><i className='pr-2 bx bxs-envelope' ></i>MAIL US</h4>
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row text-[11px]">
              <a href="mailto:info@wahatsiwa.in" className="hover:underline block ">info@wahatsiwa.in,</a>
              <a href="mailto:wahatliwantechllc@gmail.com" className="hover:underline block text-[12px]">wahatliwantechllc@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[50px] bg-gray-300 flex justify-around  items-center xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[14px] textleft font-semibold text-[10px]">
        <p className="text-center">&copy;copyright2025</p>
        <p>All rights reserved to G.Naga chittibabu</p>
      </div>
    </footer>
  )
}
export default Footer




