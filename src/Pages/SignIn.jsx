import React from 'react';
import { useState } from 'react';
const SignIn = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
  
    return (
      <>
        <div className="bg-[url('./src/assets/background.svg')] h-screen w-full bg-cover bg-center mt-0">
          <div className="flex flex-row items-center pt-6 gap-x-96 ml-16">
            <img src="src/assets/Frame 46.svg" alt="logo" className="w-20" />
            <div className="flex flex-col items-center gap-2">
              <h1 className=" font-bold text-4xl text-[#3D348B]">Log in to KHADEMNI</h1>
            </div>
          </div>
  
          <div className="max-w-4xl mx-auto p-6 bg-[#3D348B] rounded-3xl flex flex-col items-center gap-7 w-[70%] mx-auto mt-10">
            <p className="text-[#fff]">
              You don't have an account?{' '}
              <a href="#" className="text-[#E6AF2E]">
                Sign up!
              </a>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div>
                <label className="block text-sm font-medium text-[#E6AF2E] mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl" // Increased padding on sides
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium mb-1 text-[#E6AF2E]">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl" // Increased padding on sides
                  placeholder="Password (must contain at least 5 characters)"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={5}
                />
              </div>
  
              <div className="flex justify-center pt-4 gap-8 w-full"> {/* Center the button */}
                <button
                  type="submit"
                  className="px-4 py-3 border w-[90%] bg-[#E6AF2E] border-gray-300 rounded-2xl hover:bg-yellow-500" // Slightly smaller width and same padding
                >
                  Login
                </button>
              </div>
  
              {/* Center the "Have you forgotten your password?" link */}
              <div className="flex justify-center pt-4 w-full">
                <a href="#" className="text-[#fff]">
                  Have you forgotten your password?
                </a>
              </div>
            </form>
          </div>
          </div>
          <footer className=' font-semibold flex justify-center p-3 bg-[#E6AF2E] '> 2025 @ Team SKY2.0|All rights reserved.</footer>

      </>
    );
  };
  
export default SignIn