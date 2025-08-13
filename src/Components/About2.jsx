import React from 'react';
import tech from "../assets/bg2.png";

const About2 = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-gray-50 px-6 md:px-30 md:py-20">
            
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-900">
                    Our Vision
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Our vision at BIMFROX is to scale businesses of all sizes by delivering cutting-edge web solutions that drive sustainable growth and expand digital reach globally. We are committed to empowering enterprises with scalable, innovative technologies and strategic digital services that unlock new opportunities, enhance brand presence, and accelerate success in an ever-evolving digital world.
                    <br /><br />
                    Through continuous innovation, customer-centric approaches, and deep industry expertise, BIMFROX aims to be the trusted partner that helps businesses overcome challenges, adapt to market trends, and achieve exponential growth. We envision a future where every business, whether a startup or an established company, can harness the power of the web to transform ideas into impactful realities and scale beyond boundaries.
                </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
                <img 
                    className="max-w-full h-auto transform transition-transform duration-300 hover:scale-90" 
                    src={tech} 
                    alt="Tech Devices" 
                />
            </div>
        </div>
    );
};

export default About2;
