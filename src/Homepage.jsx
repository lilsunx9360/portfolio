// src/components/Home.jsx
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import img from './assets/img-1.jpg';
import ParticleBackground from './ParticleBackground';
import './App.css';

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-800 text-white px-5 flex items-center justify-center overflow-x-hidden">
      <ParticleBackground />
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-10 items-center md:items-stretch justify-center text-center md:text-left mb-24">
        <div className="relative flex items-center justify-center order-2 md:order-2">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="relative w-full h-full max-w-[400px] max-h-[400px] sm:max-w-[450px] sm:max-h-[450px] md:max-w-[500px] md:max-h-[500px] lg:max-w-[600px] lg:max-h-[600px] aspect-square" />
          </div>
          <img
            src={img}
            alt="Illustration"
            className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover mb-6 md:mb-0"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start order-1 md:order-2 space-y-2">
          <h1
            className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[5rem] font-bold uppercase opacity- select-none pointer-events-none relative"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span>i'am</span>
            <span
              className="p-3"
              style={{
                backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              SHANMUGAM
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent" />
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl p-0.5">
            MERN Stack Developer
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl">
            A MERN Stack Developer creates full-stack web applications using MongoDB, Express.js, React, and Node.js,
          </p>
          <div className="flex gap-4 flex-wrap p-0.5">
            <a href="#Contact">
              <button
                className="text-white text-sm sm:text-base px-6 py-2.5 rounded-md transition-all duration-300 cursor-pointer"
                style={{
                  backgroundImage: 'linear-gradient(to right, #00FFFB, #C800FF)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #00e7e4, #b000e0)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #00FFFB, #C800FF)';
                }}
              >
                Hire Me
              </button>
            </a>
            <button
              onClick={() => {
                setShowIcons(true);
                setTimeout(() => setShowIcons(false), 4000);
              }}
              className="text-white text-sm sm:text-base px-6 py-2.5 rounded-md transition-all duration-300 cursor-pointer"
              style={{
                backgroundImage: 'linear-gradient(to right, #00FFFB, #C800FF)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #00e7e4, #b000e0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #00FFFB, #C800FF)';
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
      {showIcons && (
        <div className="fixed bottom-10 right-10 flex gap-4 animate-slide-in transition-all duration-700 z-50">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-3xl hover:text-cyan-400 transition duration-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-3xl hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-3xl hover:text-pink-400 transition duration-300" />
          </a>
        </div>
      )}
    </section>
  );
};

export default Home;