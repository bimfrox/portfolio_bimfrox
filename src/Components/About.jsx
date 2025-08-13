import React from 'react';
import tech from "../assets/hero-devices.svg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-30 py-10 md:py-20 bg-gray-50">
      
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img 
          className="max-w-full h-auto transform transition-transform duration-300 hover:scale-90" 
          src={tech} 
          alt="Tech Devices" 
        />
      </div>
      
      <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-900">
          About BIMFROX
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          BIMFROX is a comprehensive web service platform dedicated to empowering businesses with innovative digital solutions. From website development and design to advanced web applications and digital strategies, we provide end-to-end services tailored to help businesses establish a strong online presence and drive growth.
          <br /><br />
          At BIMFROX, we combine creativity, technology, and strategic thinking to deliver scalable and impactful web solutions that elevate brands and enhance customer engagement. Whether you're a startup or an established enterprise, BIMFROX is your trusted partner in navigating the digital landscape and achieving business success.
        </p>
      </div>
    </div>
  );
};

export default About;
