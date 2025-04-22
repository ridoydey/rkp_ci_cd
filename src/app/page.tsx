"use client";
import React from "react";

const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-pink-200 text-gray-800 text-center font-sans overflow-hidden">
      {/* Confetti Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, index) => (
          <span
            key={index}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full animate-confetti"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      {/* Main Content */}
      <h1 className="text-4xl font-bold mb-4 animate-bounce">Hi Prite,</h1>
      <p className="text-lg mb-4 animate-fadeIn">
        I&apos;ve been meaning to tell you something for a while now. You mean
        the world to me, and I can&apos;t imagine life without you. So, here it
        goes...
      </p>
      <h2 className="text-3xl text-red-500 mb-4 animate-heartbeat">
        I Love You ❤️
      </h2>
      <p className="text-lg mb-6 animate-fadeIn">
        I hope this page expresses even a fraction of how special you are to me.
      </p>
      <button
        className="px-6 py-3 text-white bg-red-500 rounded-lg shadow-lg hover:bg-red-600 animate-scale"
        onClick={() => alert("Prite, see you very soon!")}
      >
        Let&apos;s get married
      </button>
    </div>
  );
};

export default Home;
