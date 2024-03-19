"use client"
import React, { useState } from 'react';
import * as Yup from 'yup';
import DisplayFormData from '../components/DisplayFormData';

const Form = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [userList, setUserList] = useState<any[]>([]);
  const [errors, setErrors] = useState<any>({});

  // Yup schema for validation
  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false }); // Validate formData
      setUserList(prevUserList => [...prevUserList, formData]);
      setFormData({ username: '', email: '', password: '' }); // Clear form after successful submission
      setErrors({}); // Clear any previous errors
    } catch (error) {
      // If validation fails, set errors state
      const validationErrors: any = {};
      error.inner.forEach((err: any) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className='bg-red-100 px-4 py-2 border border-red-400 m-auto w-1/2 mt-12'>
        <h1 className='text-2xl text-center my-4 uppercase bg-red-500 py-4'>This is user form ....</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className='font-bold'>Enter your UserName : </label>
            <input type="text" name='username' value={formData.username} onChange={handleInputChange} className='w-full border border-gray-800 h-12 mt-2 bg-transparent' placeholder='Enter your userName' />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
          </div>
          <div>
            <label htmlFor="password" className='font-bold'>Enter Password : </label>
            <input type="password" name='password' value={formData.password} onChange={handleInputChange} className='w-full border border-gray-800 h-12 mt-2 bg-transparent' placeholder='Enter your password' />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="email" className='font-bold'>Enter your email : </label>
            <input type="email" name='email' value={formData.email} onChange={handleInputChange} className='w-full border border-gray-800 h-12 mt-2 bg-transparent' placeholder='Enter your email ' />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <button type="submit" className='bg-green-800 text-white font-bold px-4 py-2'>Submit</button>
        </form>
      </div>
      <div>
        {/* Display all the users in the userList */}
        {userList.map((user, index) => (
          <DisplayFormData key={index} contactInfo={user} />
        ))}
      </div>
    </>
  );
};

export default Form;
