import React from 'react';
import HeroImage from '../assets/heroImage.jpeg';
import {MdOutlineKeyboardArrowRight} from  'react-icons/md';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
              <h2 className='mt-6 text-4xl sm:text-6xl font-bold text-white'>
                i'm a Blockchain 
                Developer
              </h2>

              <p className="text-gray-500 py-4 max-w-md">
                i have 2 years of experience building and designing
                software.
                Currently, ilove to work on web application using
                technologies like
                React, Tailwind, solidity, Web3.js
              </p>

              <div>
                <button className='group cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                  Portfolio
                  <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-2' />
                  </span>
                </button>
              </div>
        </div>
            <div>
                    <img src={HeroImage} alt='My Profile' className='rounded-2xl  ml-5 mx-auto w-2/3 md:w-4/5 ' />
                  </div>
            </div>
    </div>
  );
}

export default Home;