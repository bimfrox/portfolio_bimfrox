import React from 'react';
import client1 from '../assets/Valley.png';
import client2 from '../assets/tulsi.png';
import client3 from '../assets/jjb.png';
import client4 from '../assets/me.png';
import client5 from '../assets/Am Finance & consultancy.png';

const Clients = () => {
  return (
    <div className="bg-gray-100 py-12 md:px-30">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-900 mb-12">
        Our Trusted Clients
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-items-center">
        <img src={client1} alt="Valley" className="h-20 md:h-24 grayscale hover:grayscale-0 transition duration-300 object-contain" />
        <img src={client2} alt="Tulsi" className="h-20 md:h-24 grayscale hover:grayscale-0 transition duration-300 object-contain" />
        <img src={client3} alt="JJB" className="h-20 md:h-24 grayscale hover:grayscale-0 transition duration-300 object-contain" />
        <img src={client4} alt="ME" className="h-20 md:h-24 grayscale hover:grayscale-0 transition duration-300 object-contain" />
        <img src={client5} alt="AM Finance" className="h-20 md:h-24 grayscale hover:grayscale-0 transition duration-300 object-contain" />
      </div>
    </div>
  );
};

export default Clients;
