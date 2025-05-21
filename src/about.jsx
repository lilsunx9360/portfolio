// src/components/ShanmugamBackground.jsx
import React from 'react';

const ShanmugamBackground = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-4 pt-10 pb-20">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-start justify-center pt-10">
      <h1
          className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold uppercase opacity-10 select-none pointer-events-none"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          ABOUT
        </h1>

      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto  mt-40">
        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 md:p-10 md:m-5 mb-8">
          I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </p>

        {/* Four Grid Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:p-10 md:m-5">
          <div className="border-2 border-cyan-500 p-6 rounded-md text-center">
            <h3 className="text-lg font-semibold">Frontend</h3>
            <p className="text-sm text-gray-400">React, HTML, CSS, JavaScript</p>
          </div>
          <div className="border-2 border-pink-500 p-6 rounded-md text-center">
            <h3 className="text-lg font-semibold">Backend</h3>
            <p className="text-sm text-gray-400">Node.js, Express.js, REST APIs</p>
          </div>
          <div className="border-2 border-yellow-500 p-6 rounded-md text-center">
            <h3 className="text-lg font-semibold">Database</h3>
            <p className="text-sm text-gray-400">MongoDB, Mongoose</p>
          </div>
          <div className="border-2 border-green-500 p-6 rounded-md text-center">
            <h3 className="text-lg font-semibold">Collaboration</h3>
            <p className="text-sm text-gray-400">Git, GitHub, Agile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShanmugamBackground;
