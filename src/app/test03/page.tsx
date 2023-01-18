"use client";
import router from "next/router";
import { useState, useEffect } from "react";

export default function TestPage01() {
  const [value, setValue] = useState("");

  const handle = () => {
    setValue("첫번쨰");
    console.log(value);
    setValue("두번쨰");
    console.log(value);
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <button onClick={handle}>클릭</button>
    </div>
  );
}
