"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./style2.css";
// import "@/styles/comparison.css"; // optional if using raw CSS, else Tailwind below

const ComparisonSlider = () => {
  const [pos, setPos] = useState(50);

  useEffect(() => {
    document.body.style.setProperty("--pos", `${pos}%`);
  }, [pos]);

  return (
    <div className="compare relative grid w-full h-screen">
      <section className="before grid place-content-center">
        <Image
          src="https://in.pinterest.com/pin/473159504615610718/"
          alt="Before"
          width={600}
          height={600}
        />
      </section>
      <section className="after grid place-content-center">
        <Image
          src="https://assets.codepen.io/2585/Roboto.svg"
          alt="After"
          width={600}
          height={600}
        />
      </section>
      <input
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="range absolute inset-0 z-10 w-full h-full bg-transparent appearance-none cursor-pointer"
      />
    </div>
  );
};

export default ComparisonSlider;
