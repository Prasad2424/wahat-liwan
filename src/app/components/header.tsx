"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';


const Header = () => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 642);
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

  const menuClick = () => {
    setIsNavVisible(true);
    setCloseBtn(true);
    setIsMobile(false);
    setSlideText("slide-left");
    setMenuButton(false);
  }

  useEffect(() => {
    document.body.style.overflow = !isMobile && isNavVisible && closeBtn ? "hidden" : "";
  }, [isMobile, isNavVisible, closeBtn]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);


  return (
    <header className="w-full h-[100px] flex justify-center  bg-transparent absolute left-0 top-0 z-50 text-white ">
      <div className="w-1/3 h-full flex items-center justify-center companylogo  ">
        <Link href="/" className=" w-full h-[90%]
        xl:w-[95%] xl:h-[90%]  lg:w-[90%] lg:h-[80%] md:w-full md:h-3/4 sm:w-full sm:h-[70%] relative overflow-hidden">
          <Image
            src="/images/logo.png"
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
        <nav className={`w-3/4 width50 h-full flex justify-center items-center relative ${slideText}`} id="navbar"
        >
          {closeBtn && (
            <div
              className="absolute top-4 left-4 z-[999] text-white text-[22px] cursor-pointer"
              onClick={closeNav}
            >
              &times;
            </div>
          )}
          <ul className="navbar w-full h-full flex justify-end pr-8 items-center space-x-4 xl:space-x-14 lg:space-x-12 md:space-x-6 sm:space-x-4 text-8px  xl:text-[13px] lg:text-[13px]  md:text-[11px] sm:text-[9px] text-white font-semibold  "
          >
            <li className={`h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400 ${pathname === '/' ? 'text-green-300 underline underline-offset-[12px]' : ''}`}
            ><Link href="/" style={{ "--delay": 3 } as React.CSSProperties}>HOME</Link>
            </li>
            <li className={`h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400 ${pathname === '/about-us' ? 'text-green-300 underline underline-offset-[12px]' : ''}`}>
              <Link href="/about-us">ABOUT US</Link>
            </li>
            <li className={`h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400 ${pathname === '/projects' ? 'text-green-300 underline underline-offset-[12px]' : ''}`}
            ><Link href="/projects" style={{ "--delay": 3 } as React.CSSProperties}>PROJECTS</Link>
            </li>
            <li className={`h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400 ${pathname === '/services' ? 'text-green-300 underline underline-offset-[12px]' : ''}`}><Link href="/services" style={{ "--delay": 3 } as React.CSSProperties}>SERVICES</Link></li>
            <li className="h-full flex justify-center items-center hover:underline hover:underline-offset-[12px] hover:text-green-400"
              onMouseLeave={() => setMoreDetails(false)}>
              <div
                className="more_features relative "
                onMouseEnter={() => setMoreDetails(true)}
                onClick={() => setMoreDetails(!moreDetails)}
              >
                <button className="mr-0 pr-2 " >MORE</button>
                <i className={moreDetails ? "bx bx-chevron-up" : "bx bx-chevron-down"}></i>
                {moreDetails && (
                  <div className="w-[100px] absolute top-8  flex flex-col bg-gray-800 rounded p-2 shadow-md space-y-4 text-gray-200 left-0  text-black text-[8px] xl:text-[11px] lg:text-[10px] md:text-[9px] sm:text-[8px] rounded-lg
                  xl:top-8 md:top-6 sm:top-4 space-y-1 lg:spaace-y-4 md:space-y-3 sm:space-y-2 ">
                    <Link href="" className=" hover:underline hover:underline-offset-[12px] hover:text-green-400 ">CAST</Link>
                    <Link href="" className=" hover:underline hover:underline-offset-[12px] hover:text-green-400 ">GALLERY</Link>
                    <Link href="" className=" hover:underline hover:underline-offset-[12px] hover:text-green-400 ">PROFILE</Link>
                  </div>
                )}

              </div>
            </li>
            <button className="w-[160px] h-max p-2 px-6 rounded-2xl flex justify-center items-center text-black  bg-green-500 font-bold">
            <Link href="/contact-us">GET IN TOUCH</Link>
          </button>
          </ul>
          
        </nav>
      )}
    </header>
  );
};

export default Header;

