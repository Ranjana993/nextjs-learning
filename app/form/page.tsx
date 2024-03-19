"use client"
import React, { useState } from 'react';
import DisplayFormData from '../components/DisplayFormData';

const Form = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, if needed
  };

  return (
    <>
      <div className='bg-red-100 px-4 py-2 border border-red-400 m-auto w-1/2 mt-12'>
        <h1 className='text-2xl text-center my-4 uppercase bg-red-500 py-4'>This is user form ....</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className='font-bold'>Enter your UserName : </label>
            <input type="text" name='username' value={formData.username} onChange={handleInputChange} className='w-full border border-gray-800 h-12 mt-2 bg-transparent' placeholder='Enter your userName' />
          </div>
          <div>
            <label htmlFor="password" className='font-bold'>Enter Password : </label>
            <input type="password" name='password' value={formData.password} onChange={handleInputChange} className='w-full border border-gray-800 h-12 mt-2 bg-transparent' placeholder='Enter your password' />
          </div>
          <div>
            <label htmlFor="email" className='font-bold'>Enter your email : </label>
            <input type="email" name='email' value={formData.email} onChange={handleInputChange} className='w-full border border-gray-800 h-12 mt-2 bg-transparent' placeholder='Enter your email ' />
          </div>
          <button type="submit" className='bg-green-800 text-white font-bold px-4 py-2'>Submit</button>
        </form>
      </div>
      <div>
        <DisplayFormData contactInfo={formData} />
      </div>
    </>
  );
};

export default Form;
