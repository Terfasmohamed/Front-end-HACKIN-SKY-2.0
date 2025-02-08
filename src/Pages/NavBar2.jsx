import React from 'react';


const NavBar2 = () => {
  return (
    <nav className="flex flex-row justify-between items-center z-20 p-3 shadow-md sticky top-0 bg-[#6F6F6F] bg-opacity-70">
      <div className="navbar-logo">
        <img src="src\assets\Group 68.svg" alt="Logo" className="h-16" />
      </div>
      
      <ul className="flex flex-row list-none justify-between text-lg w-[500px]">
        <li className="hover:text-brown-700 hover:-translate-y-1 cursor-pointer transition-all duration-300  text-white font-semibold" >
          Home
        </li>
        <li className="hover:text-brown-700 hover:-translate-y-1 cursor-pointer transition-all duration-300  text-white font-semibold">
          Inbox
        </li>
        <li className="hover:text-brown-700 hover:-translate-y-1 cursor-pointer transition-all duration-300  text-white font-semibold">
          Employ
        </li>
        <li className="hover: hover:-translate-y-1 cursor-pointer transition-all duration-300 text-white font-semibold">
          Profile
        </li>
      </ul>

      <button className="h-[30px] w-[70px] rounded-md bg-transparent text-white mr-8 
        hover:bg-brown-900 cursor-pointer z-20 transition-transform  ease-out">
        Log Out
      </button>
    </nav>
  );
};

export default NavBar2;
