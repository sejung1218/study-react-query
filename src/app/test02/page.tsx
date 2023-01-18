"use client";
import router from "next/router";
import { useState } from "react";

export default function TestPage01() {
  const [value, setValue] = useState(1);

  const handle = () => {
    setTimeout(() => {
      console.log(value);
    }, 2000);
  };

  const plus = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handle}>+1 후 타이머</button>
      <button onClick={plus}>+1</button>
    </div>
  );
}
