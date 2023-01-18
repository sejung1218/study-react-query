"use client";

import { useState } from "react";

export default function TestPage04() {
  const gg = new TEST();
  gg.hi();
  return <div>hi</div>;
}

class TEST {
  constructor() {}

  hi() {
    const i = "1";
    if (true) {
      const i = "2";
      console.log("if 안 : ", i);
    }
    console.log("if 밖 : ", i);
  }
}
