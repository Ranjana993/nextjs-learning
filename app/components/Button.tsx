"use client"
import React from 'react'
// import { ButtonProps } from '../types/buttonProps'
import { ButtonProps } from '@/app/types/buttonProps'


const Button = (props: ButtonProps) => {
  // console.log(ButtonProps);

  return (
    <div>
      <button onClick={props.onClickHandler} className='bg-red-800 text-white px-4 py-2'>{props.title} </button>
    </div>
  )
}

export default Button