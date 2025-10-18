"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [viewProjects, setViewProjects] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 642
  );
  const [closeBtn, setCloseBtn] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [slideText, setSlideText] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 642;
      setIsMobile(mobile);
      setMenuButton(true);
      setIsNavVisible(!mobile);
    };

    handleResize();
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

  const menuClick = () => {
    setIsNavVisible(true);
    setCloseBtn(true);
    setIsMobile(false);
    setSlideText("slide-left");
    setMenuButton(false);
  };

  useEffect(() => {
    document.body.style.overflow =
      !isMobile && isNavVisible && closeBtn ? "hidden" : "";
  }, [isMobile, isNavVisible, closeBtn]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header className="w-full h-[120px] xl:h-[120px] lg:h-[120px] md:lg-[100px] sm:h-[90px]  flex justify-center bg-transparent absolute left-0 top-0 z-50 text-white ">
      <div className="w-[90%] xl:w-[40%] lg:w-[40%] md:w-[40%] sm:w-[40%] h-[90%] flex items-center justify-center  z-100  ">
        <div className="w-[40%]  h-[120px] xl:w-[35%] lg:w-[30%] md:w-[25%] sm:w-[35%] ">
          <Link href="/" className="w-full h-[100%]  flex items-center justify-center ">
            <div className="relative w-[80%] h-[50%] xl:w-[100%] xl:h-[90%] lg:w-[100%] lg:h-[90%] md:w-[100%] md:h-[70%] sm:w-full sm:h-[60%]">
              <Image src="/images/logo.png" alt="Company Logo" fill className="object-fill" />
            </div>
          </Link>
        </div>
        <div className='slide-right h-[50%] xl:h-[60%] lg:h-[50%] md:h-[50%] sm:h-[40%] w-[80%]'>
          <Link href={"/"}>
            <div className='w-full xl:space-y-2 lg:space-y-2 md:space-1.5 sm:space-y-1'>
              <h1 className='w-full h-[32px] xl:h-[38px] lg:h-[36px] md:h-[29px] sm:h-[20px] text-[24px] xl:text-[38px] lg:text-[36px] md:text-[27px] sm:text-[20px] font-bold  '><span className="bg-gradient-to-r from-green-500 via-green-00 to-green-600  bg-clip-text text-transparent ">
                WAHAT LIWAN
              </span></h1>
              <h2 className='w-full text-left  xl:pl-[56px] lg:pl-[106px] md:pl-[52px] sm:pl-[48px] xl:text-[17px] 
                  lg:text-[12px] md:text-[11px] sm:text-[8px] text-[9px] font-bold '><span className="bg-gradient-to-r from-gray-400  to-gray-400 bg-clip-text text-transparent ">
                  TECHNICAL SERVICES L.L.C
                </span></h2>
            </div>
          </Link>
        </div>
      </div>

      {isMobile && menuButton && (
        <button onClick={menuClick} className="menu_button cursor-pointer">
          <i className="bx bx-menu"></i>
        </button>
      )}

      {isNavVisible && (
        <nav
          id="navbar"
          className={`w-[60%] h-full flex justify-center items-center relative   ${slideText}`}
        >
          {closeBtn && (
            <div
              className="absolute top-4 left-4 z-[999] text-white text-[22px] cursor-pointer"
              onClick={closeNav}
            >
              &times;
            </div>
          )}

          <ul className="navbar w-full h-full flex justify-end pr-2 items-center space-x-4 xl:space-x-16 lg:space-x-8 md:space-x-5 sm:space-x-3 text-white font-semibold xl:text-[13px] lg:text-[13px] md:text-[11px] sm:text-[11px]">
            <li
              className={`h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400 ${pathname === "/"
                  ? "text-green-300 underline underline-offset-[12px]"
                  : ""
                }`}
            >
              <Link href="/">HOME</Link>
            </li>

            <li
              className={`h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400 ${pathname === "/about-us"
                  ? "text-green-300 underline underline-offset-[12px]"
                  : ""
                }`}
            >
              <Link href="/about-us">ABOUT US</Link>
            </li>

            <li
              className="h-full flex justify-center items-center"
              onMouseLeave={() => setViewProjects(false)}
            >
              <div
                className="more_features relative"
                onMouseEnter={() => setViewProjects(true)}
                onClick={() => setViewProjects(!viewProjects)}
              >
                <button className="mr-0 pr-2">PROJECTS</button>
                <i
                  className={viewProjects ? "bx bx-chevron-up" : "bx bx-chevron-down"}
                ></i>
                {viewProjects && (
                  <div className="w-max absolute top-8 flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 left-0 text-[10px]">
                    <Link href="/ongoing-projects" >ONGOING PROJECTS</Link>
                    <Link href="/completed-projects">COMPLETED PROJECTS</Link>
                  </div>
                )}
              </div>
            </li>

            <li
              className={`h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400 ${pathname === "/services"
                  ? "text-green-300 underline underline-offset-[12px]"
                  : ""
                }`}
            >
              <Link href="/services">SERVICES</Link>
            </li>

            <li
              className="h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400"
              onMouseLeave={() => setMoreDetails(false)}
            >
              <div
                className="more_features relative"
                onMouseEnter={() => setMoreDetails(true)}
                onClick={() => setMoreDetails(!moreDetails)}
              >
                <button className="mr-0 pr-2">MORE</button>
                <i
                  className={moreDetails ? "bx bx-chevron-up" : "bx bx-chevron-down"}
                ></i>

                {moreDetails && (
                  <div className="w-[140px] absolute top-8 flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-2 text-gray-200 left-0 text-[10px]">
                    <Link href="/pre-cast">CAST</Link>
                    <Link href="/PETRA_PROFILE.pdf">PROFILE</Link>
                  </div>
                )}
              </div>
            </li>

            <button className="w-[110px] xl:w-[160px] lg:w-[160px] md:w-[120px] sm:w-[110px] p-2 px-6 rounded-2xl flex justify-center items-center text-black bg-green-500 font-bold">
              <Link href="/contact-us">GET IN TOUCH</Link>
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;