import React from 'react';
import NavBar2 from './NavBar2';

const GetStarted = () => {
    return (
        <>
            <NavBar2 />
            <div className="relative">
                <img 
                    src="src/assets/Home2.png" 
                    alt="" 
                    className="block w-full"
                />
                <button className="absolute bottom-[7%] right-[30%] bg-[#3D348B] font-bold rounded-2xl text-xl px-20 py-3 text-white hover:bg-[#2d2666]">
                    GET STARTED
                </button>
            </div>
            <img 
                src="src/assets/Features.png" 
                alt="" 
                className="block w-full" 
            />
            <img 
                src="src/assets/HOW _.png" 
                alt="" 
                className="block w-full"
            />
        </>
    );
};

export default GetStarted;