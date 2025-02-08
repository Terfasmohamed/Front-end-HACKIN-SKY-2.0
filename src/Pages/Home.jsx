import React from 'react';
import { useState } from 'react';
import NavBar2 from './NavBar2';

const Home = () => {
    const [opportunities, setOpportunities] = useState([
        {
            id: 1,
            name: "Pruning trees and watering plants",
            location: "eulma , setif",
            time: "4h30min",
            date: "sunday 16 feb 2025",
            salary: "1000DA",
        },
        {
            id: 2,
            name: "Pruning trees and watering plants",
            location: "eulma , setif",
            time: "4h30min",
            date: "sunday 16 feb 2025",
            salary: "1000DA",
        },
        {
            id: 3,
            name: "Pruning trees and watering plants",
            location: "eulma , setif",
            time: "4h30min",
            date: "sunday 16 feb 2025",
            salary: "1000DA",
        },
    ]);

    return (
        <div className='bg-[url(/src/assets/background.svg)] bg-cover bg-center min-h-screen'>
            <NavBar2 />
           
            <div className='flex flex-col items-center mb-20'>
                <h1 className='text-3xl font-bold text-[#3D348B] mt-5 mb-8'>Find your next job opportunity</h1>
           
                <div className='w-full max-w-2xl px-4'>
                    {opportunities.map((opportunity) => (
                        <div key={opportunity.id} className='bg-white p-5 rounded-lg shadow-lg mb-4 relative'>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-bold text-[#3D348B]'>{opportunity.name}</h2>
                                <p ><span className='text-[#3D348B]'>Location</span>  {opportunity.location}</p>
                                <p ><span className='text-[#3D348B]'>Time</span>   {opportunity.time}</p>
                                <p ><span className='text-[#3D348B]'>Date</span>   {opportunity.date}</p>
                                <p > <span className='text-[#3D348B]'>Salary</span >  {opportunity.salary} </p>
                            </div>
                            <button className='absolute bottom-4 right-4 text-sm bg-[#E6AF2E] px-4 py-2 rounded-2xl hover:bg-[#ebb945] transition-colors font-bold'>
                                More Details...
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <footer className=' font-semibold flex justify-center p-3 bg-[#E6AF2E] '> 2025 @ Team SKY2.0|All rights reserved.</footer>
        </div>
    );
};

export default Home;