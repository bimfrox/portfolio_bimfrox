import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      {/* Top Call-to-Action */}
      <div className="bg-gray-900 text-white p-6 md:p-8 rounded-b-3xl mx-4 md:mx-24 -translate-y-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-xl font-bold mb-4 md:mb-0">Start a project</h2>
          <p className="text-center md:text-left max-w-xl mb-4 md:mb-0">
            Let’s turn your ideas into reality! Ready to take the next step? Let’s schedule chat
          </p>
          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition flex items-center gap-2">
            <a href="http://wa.me/918401809966" target="_blank" rel="noopener noreferrer">🤘 Let's do this</a>
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center justify-center text-center py-10">
        <div className="text-4xl mb-4">
          <span className="border-2 p-2 rounded-full">🤝</span>
        </div>
        <p className="text-lg mb-6">
         Your Vision Our Code
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a href="https://www.linkedin.com/in/bimfrox?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-gray-300" target="block"><FaLinkedin /></a>
          <a href="https://www.instagram.com/bimfrox?igsh=ODUxdXN6cWxqZGQ0" className="hover:text-gray-300" target="block"><GrInstagram /></a>
          <a href="https://youtube.com/@bimfrox?si=44pKmFme7HqsNraC" className="hover:text-gray-300" target="block"><FaYoutube /></a>
            <a href="mailto:bimfrox@gmail.com" className="hover:text-gray-300"><MdEmail />  </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
