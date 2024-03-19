import React from 'react'
import { contactForm } from '../types/buttonProps'

const DisplayFormData = (props: contactForm) => {
  return (
    <div>

      <div className=' bg-red-400 text-white p-12 px-12 py-2 w-full h-full  mt-12 '>
        <h2>Name :{props.contactInfo.username} </h2>
        <h2>Email : {props.contactInfo.email}</h2>
        <h2>Password : {props.contactInfo.password}</h2>
      </div>
    </div>
  )
}

export default DisplayFormData