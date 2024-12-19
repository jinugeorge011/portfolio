import React from 'react';
import DarkModeSwitcher from '../components/DarkModeSwitcher';
import '../Fonts/Valorant-Font.ttf'

const Nav = () => {
  return (
    <div id='nav' className="px-[2rem] bg-orange-500 lg:bg-transparent lg:px-[.6rem] py-[1rem] lg:py-[2rem] fixed bottom-[2rem] lg:bottom-[10rem] lg:right-[1.5rem] flex items-center lg:flex-col gap-3 z-50">
      <a href='#about' className="p-4 hover:text-blue-500 transform transition-transform duration-200 hover:scale-105 dark:text-white dark:hover:text-yellow-300">About
      </a>
      <hr className="w-[.1rem] h-[1.5rem] bg-black border-none dark:bg-white" />
      <a href='#Projects' className="p-4 hover:text-blue-500 transform transition-transform duration-200 hover:scale-105 dark:text-white dark:hover:text-yellow-300">Projects
      </a>
      <hr className="w-[.1rem] h-[1.5rem] bg-black border-none dark:bg-white" />
      <a href='#Skills' className="p-4 hover:text-blue-500 transform transition-transform duration-200 hover:scale-105 dark:text-white dark:hover:text-yellow-300">Skills
      </a>
      <hr className="w-[.1rem] h-[1.5rem] bg-black border-none dark:bg-white" />
      <a href='#Contact' className="p-4 hover:text-blue-500 transform transition-transform duration-200 hover:scale-105 dark:text-white dark:hover:text-yellow-300">Contact
      </a>
      <hr className="w-[.1rem] h-[1.5rem] bg-black border-none dark:bg-white" />
      <div className='mt-3'><DarkModeSwitcher /></div>
    </div>
  );
};

export default Nav;
