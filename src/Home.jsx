import React from 'react';
import img from './assets/img-1.jpg';
import './App.css';
import CosmicBackground from './CosmicBackground.jsx';

const Home = () => {
    return (
        <CosmicBackground>
            <section className="min-h-screen text-white px-5 flex items-center justify-center overflow-x-hidden">
                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                    {/* Left Side - Content */}
                    <div className="flex flex-col justify-center space-y-2">
                        <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight p-0.5">
                            Hi, I'm <span className="text-white">Shanmugam</span>
                        </h1>

                        <h2
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold transition duration-300 text-transparent bg-clip-text p-0.5"
                            style={{
                                backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                            }}
                        >
                            MERN Stack Developer
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 p-0.5">
                            A MERN Stack Developer creates full-stack web applications using MongoDB, Express.js, React, and Node.js, managing both frontend and backend development to build dynamic, responsive, and scalable websites or web apps with JavaScript throughout the technology stack.
                        </p>

                        {/* Responsive Buttons */}
                        <div className="flex gap-4 flex-wrap p-0.5">
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-m sm:text-base md:text-sm px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-md">
                                Hire Me
                            </button>
                            <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white text-sm sm:text-base md:text- px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-md">
                                Let's Talk
                            </button>
                        </div>

                        {/* Social Icons */}
                        <ul className="flex space-x-4 pt-4 p-0.5">
                            <li><a href="#"><i className="fab fa-facebook-f text-cyan-400 text-lg sm:text-xl md:text-2xl"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter text-cyan-400 text-lg sm:text-xl md:text-2xl"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in text-cyan-400 text-lg sm:text-xl md:text-2xl"></i></a></li>
                        </ul>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex items-end justify-center mb-20 p-0.5">
                        <img
                            src={img}
                            alt="Illustration"
                            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </CosmicBackground>
    );
};

export default Home;