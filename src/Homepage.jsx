// src/components/Home.jsx
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import img from './assets/img-1.jpg';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css';

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <ParallaxProvider>
      <section className="relative min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-800 text-white px-5 flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-10 items-center md:items-stretch justify-center text-center md:text-left mb-24">
          {/* Profile Image + Triangles */}
          <div className="relative flex items-center justify-center order-2 md:order-2">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="relative w-full h-full max-w-[400px] max-h-[400px] sm:max-w-[450px] sm:max-h-[450px] md:max-w-[500px] md:max-h-[500px] lg:max-w-[600px] lg:max-h-[600px] aspect-square">
                <div className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 border-t-4 border-l-4 border-purple-400 opacity-30 transform -translate-x-6 -translate-y-6 rotate-12" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
                <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-36 sm:h-36 border-b-4 border-r-4 border-cyan-400 opacity-30 transform translate-x-6 translate-y-6 -rotate-12" style={{ clipPath: 'polygon(100% 100%, 0 100%, 100% 0)' }} />
                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-28 sm:h-28 border-b-4 border-l-4 border-pink-400 opacity-30 transform -translate-x-4 translate-y-4 rotate-45" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }} />
              </div>
            </div>
            <Parallax speed={-10} translateY={[-10, 20]}>
              <img
                src={img}
                alt="Illustration"
                className="relative z-10 w-55 h-55 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover mb-6 md:mb-0 shadow-lg border-3 border-gray-800"
                style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' }}
              />
            </Parallax>
          </div>

          {/* Text Content */}
          <Parallax speed={5} translateY={[-5, 5]}>
            <div className="flex flex-col justify-center items-center md:items-start order-1 md:order-2 space-y-0">
              <h1
                className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[5rem] font-bold uppercase mb-4 select-none pointer-events-none relative"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span>i'am</span>{' '}
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
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
                MERN Stack Developer
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mb-4">
                A MERN Stack Developer creates full-stack web applications using MongoDB, Express.js, React, and Node.js,
              </p>

              <div className="flex gap-4 flex-wrap mt-4">
                <a href="#Contact">
                  <button
                    className="text-white text-sm sm:text-base px-6 py-2.5 rounded-md transition-all duration-300 cursor-pointer"
                    style={{ backgroundImage: 'linear-gradient(to right, #00FFFB, #C800FF)' }}
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
                  style={{ backgroundImage: 'linear-gradient(to right, #00FFFB, #C800FF)' }}
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
          </Parallax>
        </div>

        {/* Social Icons Animation */}
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
            </a>
          </div>
        )}
      </section>
    </ParallaxProvider>
  );
};

export default Home;