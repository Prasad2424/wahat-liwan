"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [viewProjects, setViewProjects] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 642);
  const [closeBtn,setCloseBtn]=useState(false);
  const [menuButton,setMenuButton]=useState(false);
  const [slideText, setSlideText] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 642;
      setIsMobile(mobile);
      setMenuButton(true);
      setIsNavVisible(!mobile);
    };

    setTimeout(() => {
      handleResize(); 
    }, 0);
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeNav = () => {
    setSlideText("slide-right");
    setCloseBtn(false);
    setIsNavVisible(false);
    setIsMobile(true);
    setMenuButton(true);
  };

  const menuClick=()=>{
    setIsNavVisible(true);
    setCloseBtn(true);
    setIsMobile(false);
    setSlideText("slide-left");
    setMenuButton(false);
  }

  useEffect(() => {
    document.body.style.overflow = !isMobile && isNavVisible && closeBtn ? "hidden" : "";
  }, [isMobile, isNavVisible,closeBtn]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  
  return (
    <header className="w-full h-[100px] flex justify-center  bg-transparent absolute left-0 top-0 z-50 text-white ">
      <div className="w-1/4 h-full flex items-center justify-center companylogo  ">
        <Link href="/" className=" w-full h-[90%]
        xl:w-[95%] xl:h-[90%]  lg:w-[90%] lg:h-[80%] md:w-full md:h-3/4 sm:w-full sm:h-[70%] relative overflow-hidden">
          <Image
            src="/images/companylogo.png"
            alt="Company Logo"
            fill
            className="object-fit"
          />
        </Link>
      </div>

      {isMobile && menuButton && (
        <button onClick={menuClick} className="menu_button cursor:pointer">
          <i className="bx bx-menu"></i>
        </button>
      )}

      {isNavVisible && (
        <nav className={`w-3/4 width50 h-full flex justify-center items-center relative ${slideText}`}onMouseLeave={() => setViewProjects(false)} id="navbar"
        >
          {closeBtn && (
            <div
              className="absolute top-4 left-4 z-[999] text-white text-[22px] cursor-pointer"
              onClick={closeNav}
            >
              &times;
            </div>
          )}
          <ul className="navbar w-full h-full flex justify-end pr-8 items-center space-x-4 xl:space-x-20 lg:space-x-12 md:space-x-6 sm:space-x-8 text-8px  xl:text-[15px] lg:text-[15px]  md:text-[13px] sm:text-[11px] text-white font-semibold  "
            onMouseLeave={() => setViewProjects(false)}
          >
            <li className="h-full flex justify-center items-center"><Link href="/" style={{ "--delay": 1 } as React.CSSProperties} >HOME</Link></li>
            <li className="h-full flex justify-center items-center "><Link href="/about-us" style={{ "--delay": 2 } as React.CSSProperties}>ABOUT US</Link></li>
            <li className="h-full flex justify-center items-center "
              onMouseLeave={() => setViewProjects(false)}>
              <div
                className="more_features relative "
                onMouseEnter={() => setViewProjects(true)}
                onClick={()=>setViewProjects(!viewProjects)}
              >
                <button className="mr-0 pr-2">PROJECTS</button>
                <i className={viewProjects ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i>
                {viewProjects && (
                  <div className="w-max absolute top-8  flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-4 text-gray-200 left-0  text-black text-[8px] xl:text-[11px] lg:text-[10px] md:text-[9px] sm:text-[8px] rounded-lg
                  xl:top-8 md:top-6 sm:top-4 space-y-1 lg:spaace-y-4 md:space-y-3 sm:space-y-2 ">
                    <Link href="" className="" >ONGOING PROJECTS</Link>
                    <Link href="/completed-projects" className="">COMPLETED PROJECTS</Link>
                  </div>
                )}
              </div>
            </li>
            <li className="h-full flex justify-center items-center "><Link href="/services" style={{ "--delay": 3 } as React.CSSProperties}>SERVICES</Link></li>
            <li className="h-full flex justify-center items-center " 
                onMouseLeave={() => setMoreDetails(false)}>
              <div
                className="more_features relative "
                onMouseEnter={() => setMoreDetails(true)}
                onClick={() => setMoreDetails(!moreDetails)}
              >
                <button className="mr-0 pr-2 " >MORE</button>
                <i className={moreDetails ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i>
                {moreDetails && (
                  <div className="w-max absolute top-8  flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-4 text-gray-200 left-0  text-black text-[8px] xl:text-[11px] lg:text-[10px] md:text-[9px] sm:text-[8px] rounded-lg
                  xl:top-8 md:top-6 sm:top-4 space-y-1 lg:spaace-y-4 md:space-y-3 sm:space-y-2 ">
                    <Link href="" className="" >GROUPS</Link>
                    <Link href="" className="">CAST</Link>
                    <Link href="/commitment" className="">COMITMENT TO QUALITY</Link>
                    <Link href="/PETRA_PROFILE.pdf" className="">PROFILE</Link>
                  </div>
                )}
          
              </div>
            </li>
            <li className="h-full flex justify-center items-center contact_us">
              <Link href="/contact-us">CONTACT-US</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

