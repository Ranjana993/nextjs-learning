import React from 'react'
import Button from './Button'
import { cardTitle } from '../types/buttonProps'

const Card = (props: cardTitle) => {
  return (
    <div>
      <div className='bg-green-200 p-4 w-1/5 m-auto'>
        <h3 className='text-2xl font-bold mb-4'>{props.title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptate nemo unde non possimus ad. Odit quasi explicabo tempore ut debitis, quo eius sequi ipsum deserunt quisquam autem accusantium magnam?</p>
        <Button title="Submit" />
      </div>
    </div>
  )
}

export default Card