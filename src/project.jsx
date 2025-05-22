// src/components/Project.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Red Project',
    image: 'https://via.placeholder.com/300x200/ff0000/ffffff',
    github: 'https://github.com/san/project1',
    live: 'https://liveproject1.com',
    description: 'This is a project about red-themed UI built using React.',
  },
  {
    id: 2,
    title: 'Green Project',
    image: 'https://via.placeholder.com/300x200/00ff00/ffffff',
    github: 'https://github.com/san/project2',
    live: 'https://liveproject2.com',
    description: 'A green-themed admin dashboard using MERN stack.',
  },
   {
    id: 1,
    title: 'Red Project',
    image: 'https://via.placeholder.com/300x200/ff0000/ffffff',
    github: 'https://github.com/san/project1',
    live: 'https://liveproject1.com',
    description: 'This is a project about red-themed UI built using React.',
  },
  {
    id: 2,
    title: 'Green Project',
    image: 'https://via.placeholder.com/300x200/00ff00/ffffff',
    github: 'https://github.com/san/project2',
    live: 'https://liveproject2.com',
    description: 'A green-themed admin dashboard using MERN stack.',
  },
  // Add more project objects...
];

const Project = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-tr from-black via-black to-neutral-800 text-white overflow-hidden px-4 py-10 flex flex-col md:flex-row gap-6">
      
      {/* Left Side - Vertical 'PROJECT' without spacing */}
      <div className="md:w-20 w-auto flex md:flex-col flex-row justify-center items-center md:items-start gap-0 leading-none">
        <div className="flex md:flex-col flex-row gap-0 leading-none">
          {"PROJECT".split("").map((char, i) => (
            <span
              key={i}
              className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold uppercase opacity-25 select-none pointer-events-none leading-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Right Side - Content Grid */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-6xl grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4  rounded-2xl shadow-lg">
          {projects.map((project) => (
            <a
              href={project.live}
              key={project.id}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-2xl overflow-hidden shadow-lg border-2 border-gray-700 hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Background image */}
              <div
                className="h-60 sm:h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Icons */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-80">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-xl hover:text-white" />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt className="text-xl hover:text-white" />
                </a>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 text-white flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
