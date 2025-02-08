import React from 'react';
const NavBar1 = () => {
    return (
        <nav className="flex flex-row justify-between items-center p-3 shadow-md sticky top-0 bg-[#6F6F6F] bg-opacity-70">
      <div className="navbar-logo">
        <img src="src\assets\Group 68.svg" alt="Logo" className="h-16" />
      </div>
      
      <ul className="flex flex-row list-none justify-between text-lg w-[500px]">
        <li className="hover:text-brown-700 hover:-translate-y-1 cursor-pointer transition-all duration-300  text-white font-bold" >
          Home
        </li>
        <li className="hover:text-brown-700 hover:-translate-y-1 cursor-pointer transition-all duration-300  text-white font-bold">
          Features
        </li>
        <li className="hover:text-brown-700 hover:-translate-y-1 cursor-pointer transition-all duration-300  text-white font-bold">
          How?
        </li>
        <li className="hover: hover:-translate-y-1 cursor-pointer transition-all duration-300 text-white font-bold">
          About us
        </li>
      </ul>

      <button className="h-9 w-20 rounded-3xl bg-white mr-8 text-[#3D348B] font-bold">
        Log In
      </button>
    </nav>

    );
};

export default NavBar1;