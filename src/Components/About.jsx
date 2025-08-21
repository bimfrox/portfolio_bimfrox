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
          BIMFROX is a modern web solutions company helping businesses grow online with
          smart, scalable, and impactful digital services. From website design and development
          to advanced web applications, automation, and digital strategies – we provide end-toend solutions that build strong online presence and drive measurable results
          <br /><br />
          At BIMFROX, we blend creativity, technology, and strategy to create solutions that not
          only look great but also deliver growth. Whether you are a startup or an established
          business, BIMFROX is your trusted partner in achieving digital success.
        </p>
      </div>
    </div>
  );
};

export default About;
