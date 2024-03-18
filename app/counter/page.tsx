"use client"
import React from 'react'
import Button from '../components/Button'

const pages = () => {
  const handleClick = () => {
    alert("Clicked ")
  }
  return (
    <div>
      <h1>
        Counter
      </h1>
      <Button onClickHandler={handleClick} title='Add+'/>
    </div>
  )
}

export default pages