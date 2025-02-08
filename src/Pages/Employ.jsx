import React from 'react';
import NavBar2 from './NavBar2';
const Employ = () => {
    return (
        <div className="bg-[url('./src/assets/background.svg')] min-h-screen w-full bg-cover bg-center mt-0">
            <NavBar2></NavBar2>
            <div className='bg-[#3D348B] rounded-3xl p-6 w-[70%] mx-auto mt-10 flex flex-col gap-7'>
                <div className="flex items-center gap-3">
                    <label className='text-white font-bold w-auto'>Job offer for: </label>
                    <input className='flex-1 rounded-2xl p-3' type="text" placeholder='Job title' />
                </div>

                <div className="flex items-center gap-3">
                    <label className='text-white font-bold w-auto'>Salary: </label>
                    <input className='flex-1 rounded-2xl p-3' type="text" placeholder='0.00 Dz' />
                </div>
            </div>

            <div className='bg-[#3D348B] rounded-3xl p-6 w-[70%] mx-auto mt-10 flex flex-col gap-7'>
                <div>
                    <label className='text-white font-bold'>Where will it be? </label>
                    <input className='w-full rounded-2xl p-3' type="text" placeholder='Location' />
                </div>

                <div className='flex gap-7'>
                    <div className='flex-1'>
                        <label className='text-white font-bold'>When will it start? </label>
                        <input className='w-full rounded-2xl p-3' type="text" placeholder='00:00:00 GMT(+1)' />
                    </div>

                    <div className='flex-1'>
                        <label className='opacity-0' >TO </label>
                        <div className="flex items-center gap-2">
                            <label className='text-white font-bold'>TO</label>
                            <input className='w-full rounded-2xl p-3' type="text" placeholder='00:00:00 GMT(+1)' />
                        </div>
                    </div>

                    <div className='flex-1'>
                        <label className='text-white font-bold'>Which Date? </label>
                        <input className='w-full rounded-2xl p-3' type="text" placeholder='Sunday, 01, January 2025' />
                    </div>
                </div>

                <div>
                    <label className='text-white font-bold'>What skills are needed for this job?</label>
                    <input className='w-full rounded-2xl p-3' type="text" placeholder='Skills' />
                </div>

                <div>
                    <label className='text-white font-bold'>Description of the job</label>
                    <textarea className='w-full rounded-2xl p-3' placeholder='Description...' />
                </div>

                <div className="flex justify-end space-x-4 pt-4 gap-8">
                    <button
                        type="button"
                        className="px-4 py-3 border bg-[#fff] border-gray-300 rounded-2xl ">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-3 bg-[#E6AF2E] rounded-2xl ">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Employ;