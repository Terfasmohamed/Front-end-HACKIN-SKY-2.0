import React from 'react';
import NavBar2 from './NavBar2';

const MoreDetails = () => {
    return (
        <>
            <NavBar2></NavBar2>
            <div className="bg-[url('./src/assets/background.svg')] min-h-screen w-full bg-cover absolute flex flex-col justify-center content-center gap-10 pb-16 bg-center mt-0">
                <h1 className='text-3xl font-semibold  text-center mt-5'>
                    Pruning trees and watering plants
                </h1>
                <div className='bg-[#3D348B] rounded-3xl p-6 w-[70%] mx-auto mt-10 flex flex-col gap-7 justify-center'>
                    <div>
                        <label className='text-white font-bold'>Where will it be? </label>
                        <input 
                            className='w-full rounded-2xl p-3 bg-gray-100' 
                            type="text" 
                            value='Eulma, Setif'
                            readOnly
                        />
                    </div>
                    <div className='flex gap-7'>
                        <div className='flex-1'>
                            <label className='text-white font-bold'>When will it start? </label>
                            <input 
                                className='w-full rounded-2xl p-3 bg-gray-100' 
                                type="text" 
                                value='13:30:00 GMT(+1)'
                                readOnly
                            />
                        </div>
                        <div className='flex-1'>
                            <label className='opacity-0'>TO </label>
                            <div className="flex items-center gap-2">
                                <label className='text-white font-bold'>TO</label>
                                <input 
                                    className='w-full rounded-2xl p-3 bg-gray-100' 
                                    type="text" 
                                    value='18:00:00 GMT(+1)'
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className='flex-1'>
                            <label className='text-white font-bold'>Which Date? </label>
                            <input 
                                className='w-full rounded-2xl p-3 bg-gray-100' 
                                type="text" 
                                value='Sunday, 01, January 2025'
                                readOnly
                            />
                        </div>
                    </div>
                    <div>
                        <label className='text-white font-bold'>What skills are needed for this job?</label>
                        <input 
                            className='w-full rounded-2xl p-3 bg-gray-100' 
                            type="text" 
                            value='Programing, Leadership, Teamworking'
                            readOnly
                        />
                    </div>
                    <div>
                        <label className='text-white font-bold'>Description of the job</label>
                        <textarea 
                            className='w-full rounded-2xl p-3 bg-gray-100' 
                            value='This job focuses on creating opportunities and fostering a supportive environment for young Algerian professionals to thrive in the workforce. It highlights initiatives such as mentorship programs, skill development workshops, and inclusive hiring practices that empower youth to contribute meaningfully to the economy. By addressing challenges like unemployment and skill gaps, the theme aims to build a brighter future for Algerias next generation of leaders and innovators...............................................................'
                            readOnly
                        />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button
                        type="submit"
                        className="px-4 py-3 bg-[#E6AF2E] rounded-2xl w-48 hover:bg-[#d19d24] transition-colors">
                        Apply
                    </button>
                </div>
            </div>
        </>
    );
};

export default MoreDetails;