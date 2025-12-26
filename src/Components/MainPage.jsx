import React from 'react'
import logo from "../assets/00002.png"
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import About2 from './About2'
import Footer from './Footer'
import Clients from './Clints'

const MainPage = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 shadow-md bg-white">
        <div className="mb-4 md:mb-0">
          <img className="h-10 md:h-12 w-auto" src={logo} alt="Bimfrox Logo" />
        </div>
        <div>
          <ul className="flex flex-col md:flex-row items-center">
            <span className="m-2 md:m-4 text-emerald-900 cursor-pointer hover:border-2 rounded-2xl px-3 py-1 hover:bg-emerald-50">
              <a href="https://www.bimfrox.com/" target="_blank">Visit Our Site</a>
            </span>
            <button className="relative cursor-pointer inline-flex items-center justify-center p-0.5 m-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              <a href="http://wa.me/918401809966" target="_blank" rel="noopener noreferrer"> Say Hello</a>
              </span>
            </button>
          </ul>
        </div>
      </nav>

      <Home />
      <About />
      <About2 />
      <Service />
      <Clients/>
      <Contact />
      <Footer />
    </>
  )
}

export default MainPage
