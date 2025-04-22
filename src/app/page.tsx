"use client";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [confetti, setConfetti] = useState<{ left: string; top: string; animationDelay: string; animationDuration: string; }[]>([]);

  useEffect(() => {
    const newConfetti = [...Array(100)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-pink-200 text-gray-800 text-center font-sans overflow-hidden">
      {/* Confetti Effect (Now Generated Only on Client) */}
      <div className="absolute inset-0 pointer-events-none">
        {confetti.map((style, index) => (
          <span
            key={index}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full animate-confetti"
            style={style}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="mx-4 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-bounce">
          Hi Prite,
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-4 animate-fadeIn">
          I&apos;ve been meaning to tell you something for a while now. You mean
          the world to me, and I can&apos;t imagine life without you. So, here
          it goes...
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-red-500 mb-4 animate-heartbeat">
          I Love You ❤️
        </h2>
        <p className="text-sm md:text-base lg:text-lg mb-6 animate-fadeIn">
          I hope this page expresses even a fraction of how special you are to
          me.
        </p>
        <button
          className="px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-sm md:text-base lg:text-lg text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 animate-scale"
          onClick={() => alert("Prite, see you very soon!")}
        >
          Let&apos;s get married
        </button>
      </div>
    </div>
  );
};

export default Home;
