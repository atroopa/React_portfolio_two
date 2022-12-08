import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

  return (
    <div className='bg-black flex justify-between items-center w-full h-20 text-white fixed px-4'>
        <div>
            <h1 className='text-5xl font-signature select-none ml-2'>Omid</h1>
        </div>

        <ul className='hiddens md:flex'>
            {links.map(link => (
                <li key={link.id} className='px-4 cursor-pointer capitalize font-medium
                    text-gray-500 hover:scale-105 duration-200'>{link.link}</li>
            ))}
        </ul>

        <div className='cursor-pointer pr-4 z-10 text-gray-500'>
            <FaBars size={30} />
        </div>

    </div>
  )
}

export default NavBar;