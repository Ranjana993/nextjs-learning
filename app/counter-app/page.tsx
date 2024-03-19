"use client"

import { useState } from "react";
import Button from "../components/Button"

const Counter = () => {
  const [counter , setCounter] = useState(0)
  let count: number = 0;
  const handlePlusClick = () => {
    console.log("Value inside handlePlusClick", counter);
    setCounter(counter + 1)
  }

  const handleMinusClick = () => {
    console.log("Value inside handleMinusClick", counter);
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>This is the counter app </h1>
      <div className="flex gap-12 mt-4 m-auto">
        <Button title="Add + " onClickHandler={handlePlusClick} />
        {counter}
        <Button title="Minus - " onClickHandler={handleMinusClick} />
      </div>

    </div>
  )
}

export default Counter