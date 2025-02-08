import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    willaya: '',
    commune: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <div className=' bg-[url("./src/assets/background.svg")]  h-full w-full bg-cover bg-center mt-0 '>
    <div className='flex flex-row items-center pt-6 space-x-4 gap-x-96 ml-16'>  
        <img src="src\assets\Frame 46.svg" alt="logo"  className='w-20'/>
        <div className='flex flex-col items-center gap-2 ' >
        <h1 className='text-4xl text-[#3D348B]'>REGISTRATION</h1>
    
        <p>Alredy register? <a href="#" className='text-[#3D348B]'>Log in</a></p>
        </div>
    </div>
    <div className=" max-w-4xl mx-auto p-6 bg-transparent rounded-lg  ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-3 border border-gray-300 rounded-2xl"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              className="w-full px-3 py-3 border border-gray-300 rounded-2xl"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              className="w-full px-3 py-3 border border-gray-300 rounded-2xl"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-3 border border-gray-300 rounded-2xl"
            placeholder="Password (must contain at least 5 characters)"
            value={formData.password}
            onChange={handleInputChange}
            required
            minLength={5}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            className="w-full px-3 py-3 border border-gray-300 rounded-2xl"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Willaya <span className="text-red-500">*</span>
          </label>
          <select
            name="willaya"
            className="w-full px-3 py-3 border border-gray-300 rounded-2xl"
            value={formData.willaya}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Willaya</option>
            <option value="algiers">Algiers</option>
            <option value="oran">Oran</option>
            <option value="constantine">Constantine</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Commune <span className="text-red-500">*</span>
          </label>
          <select
            name="commune"
            className="w-full px-3 py-3 border border-gray-300 rounded-2xl"
            value={formData.commune}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Commune</option>
            <option value="commune1">Commune 1</option>
            <option value="commune2">Commune 2</option>
            <option value="commune3">Commune 3</option>
          </select>
        </div>

        <div className="flex justify-end space-x-4 pt-4 gap-8">
          <button
            type="button"
            className="px-4 py-3 border bg-[#E6AF2E] border-gray-300 rounded-2xl hover:bg-yellow-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-3 bg-[#3D348B] text-white rounded-2xl hover:bg-indigo-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default SignUp;