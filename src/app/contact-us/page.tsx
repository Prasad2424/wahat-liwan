"use client";

import React, { useState } from "react";
import Image from "../../../node_modules/next/image";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [message,setMessage]=useState("");


  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    console.log(name,email,phone,message);
    
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message }),
    });
    console.log(res);
    
    if (res.ok) {
      toast.success("Message sent successfullty");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("Failed to send.");
    }
  };
  
  return (
    <section
      className="w-full bg-cover bg-center flex flex-col items-center gap-y-6 "
    >
      <div className="w-full h-[300px] xl:h-screen lg:h-screen md:h-[620px] sm:h-[500px]   relative ">
        <Image src="/images/contact-us.png" alt={"pic"} fill className="object-fill xl:object-cover lg:object-cover md:object-fill sm:object-cover" />
        <div className="w-full h-full absolute left-0 top-0 bg-gray-900 opacity-60 "></div>
        <div className='xl:w-[40%] lg:w-[41%] md:w-[50%] sm:w-[50%] h-max absolute top-[25%] xl:left-1/14 xl:top-[40%] lg:left-1/8 lg:top-[40%] md:left-1/8  md:top-[50%] sm:left-1/9 sm:top-[50%] text-white  text-left p-2 width75 banner_content '>
          <h1 className='w-max xl:text-[24px] lg:text-[22px] md:text-[18px] sm:text-[14px] tracking-wider font-semibold slide-left welcomeText border p-2 rounded-2xl'>Contact Us</h1>
          <div className='slide-right h-max '>
            <div className='w-max space-y-0 xl:space-y2 lg:space-y-2 md:space-1.5 sm:space-y-1'>
              <h1 className='xl:h-[75px] lg:h-[60px] md:h-[50px] sm:h-[45px]  xl:text-[50px] lg:text-[42px] md:text-[36px] sm:text-[30px] font-bold titleText height22'><span className="bg-gradient-to-r from-green-500 via-green-00 to-gray-300  bg-clip-text text-transparent titleHeight">
                GET IN TOUCH
              </span></h1>
            </div>
          </div>
          <div className='w-full h-max bg-black/10 backdrop-blur-[4px] p-3 pl-1 rounded-md  xl:text-[14px] lg:text-[13px] md:text-[12px] sm:text-[10px] paragraph text-gray-100 pt-2 slide-down '>
            <p className='leading-[13px] xl:leading-[23px] lg:leading-[22px] md:leading-[18px] sm:leading-[16px] tracking-wide  p8'>Whether you are planning a large-scale electro-mechanical project or need expert consultation, our team is ready to deliver precision, reliability, and unmatched quality.Reach out today to discuss your requirements—we are here to provide tailored solutions backed by engineering excellence and a commitment to your success.
            </p>
          </div>
          <div className='w-full'>
            <ul className="w-full h-[50px] flex items-center space-x-4 text-[18px] xl:text-[30px] lg:text-[28px] md:text-[28px] sm:text-[24px] text-green-200">
              <li className='bx bxl-twitter' ></li>
              <li className='bx bxl-instagram' ></li>
              <li className='bx bxl-whatsapp'></li>
              <li className='bx bxl-facebook' ></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%]  relative grid grid-cols-1 xl:grid-cols-2  lg:grid-cols-2 md:grid-cols-2 sm:grid-col-2 gap-12 items-start z-10 slide-down bg-white px-3 py-4 xl:py-12 lg:px-10 md:10 sm:px-6 rounded-2xl shadow-md ">
        <div className="space-y-8 pt-16 ">
          <h2
            data-aos="zoom-in"
            className="text-2xl sm:text-3xl font-bold text-gray-700"
          >
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
            >
              <i className="bx bxs-location-plus text-green-700 text-[40px] contact-icon"></i>
              <div>
                <h3 className="text-lg font-semibold text-black">We are here</h3>
                <p className="text-sm text-gray-600">P.O BOX:67411,Dubai - United Arab Emirates</p>
              </div>
            </div>
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md items-center "
            >
              <i className="bx bxs-phone-call text-green-700 text-[40px] contact-icon"></i>
              <div>
                <h3 className="text-lg font-semibold text-black">Call Us On</h3>
                <p className="text-sm text-gray-600 ">
                  <a href="tel:+97165217424" className="hover:underline block ">+97165217424</a>
                </p>
              </div>
            </div>
            <div
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
            >
              <i className=" bx bxs-envelope text-green-700 text-[40px] contact-icon"></i>
              <div>
                <h3 className="text-lg font-semibold text-black">Emails us on </h3>
                <p className="text-sm text-gray-600 flex flex-col gap-x-2 xl:flex-row lg:flex-row md:flex-col sm:flex-row ">
                  <a href="mailto:info@wahatsiwa.in" className="hover:underline block ">info@wahatsiwa.in,</a>
                  <a href="mailto:wahatliwantechllc@gmail.com" className="hover:underline block ">wahatliwantechllc@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4  xl:space-y-8 lg:space-y-6 md:space-y-6 sm:space-y-4 h-full ">
          <h2
            data-aos="zoom-in"
            className="text-3xl lg:text-[40px] font-bold text-center text-green-600"
          >
            CONTACT US
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xl font-medium text-gray-700 pb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full pl-3  py-3 rounded-xl border border-slate-400 bg-gray-50 text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300 placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-gray-700 pb-2 ">
                Email
              </label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-3  py-3 rounded-xl border border-slate-400  bg-gray-50 text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300 placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-gray-700 pb-2" >
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full pl-3  py-3 rounded-xl border border-slate-400  bg-gray-50 text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300 placeholder:text-gray-500
                "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 pb-2 text-xl">
                Message
              </label>
              <textarea
                rows={4}
                value={message}
                placeholder="Ask a question here..."
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-3 py-3 rounded-xl border border-slate-400  bg-gray-50 text-black resize-none text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-300 placeholder:text-gray-500"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/3 bg-green-400 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300
                "
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;