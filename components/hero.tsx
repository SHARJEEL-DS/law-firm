"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTyping(false);
      setTimeout(() => setTyping(true), 50); // reset to restart animation
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://img.freepik.com/premium-photo/law-scales-table_225446-8521.jpg"
          alt="Law Scales on Table"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Typing Title */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h1
          className={`text-white text-center text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] leading-tight whitespace-nowrap overflow-hidden w-[24ch] ${
            typing ? "animate-typing border-r-2 " : "border-none"
          }`}
        >
          FLA advokáti, s. r. o.
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
