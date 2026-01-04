"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroBanner() {
  const targetDate = new Date("2026-01-31T23:59:59").getTime();

  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  // 🔑 STATIC initial state (same on server & client)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // ⏱️ Run timer ONLY on client
  useEffect(() => {
    setTimeLeft(calculateTimeLeft()); // first client update

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg">
        {String(value).padStart(2, "0")}
      </div>
      <span className="text-xs mt-2 text-white">{label}</span>
    </div>
  );

  return (
    <section className="w-full bg-linear-to-r from-black to-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 px-10 text-center md:text-left">
            <span className="text-green-500 text-sm uppercase tracking-widest">
              Categories
            </span>

            <h1 className="text-white text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Enhance Your <br className="hidden md:block" /> Music Experience
            </h1>

            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <TimerBlock value={timeLeft.days} label="Days" />
              <TimerBlock value={timeLeft.hours} label="Hours" />
              <TimerBlock value={timeLeft.minutes} label="Minutes" />
              <TimerBlock value={timeLeft.seconds} label="Seconds" />
            </div>

            <button className="mt-10 bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-md transition-colors">
              Buy Now
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/assets/images/home/jbl.png"
              alt="Product Banner"
              width={600}
              height={400}
              className="w-full max-w-md md:max-w-lg object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
