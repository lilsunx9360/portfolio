// src/components/ShanmugamBackground.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { title: 'Frontend', technologies: ['HTML', 'CSS', 'JavaScript', 'React'], percentage: 80 },
  { title: 'Backend', technologies: ['Node.js', 'Express.js'], percentage: 70 },
  { title: 'Database', technologies: ['MongoDB', 'Firebase'], percentage: 70 },
  { title: 'Collaboration', technologies: ['Git', 'GitHub', 'Agile'], percentage: 70 },
];

const experiences = [
  {
    title: 'Machine Learning Intern',
    tech: 'Indian Servers Private Limited, Vijayawada',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    date: '06-Jun-2023 to 10-Aug-2023',
    points: [
      'Completed an 8-week internship as a Trainee in Machine Learning.',
      'Worked on NLP tasks including text preprocessing and chatbot development.',
      'Explored OpenAI, HuggingFace, and BERT APIs.',
      'Gained understanding in fine-tuning state-of-the-art models.',
      'Demonstrated good contributions in real-time projects using NLP.',
      'Certificate UID: INDSER2023ML762'
    ],
  },
  {
    title: 'Web Development Intern',
    tech: 'NovaTech',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    date: 'February 2024',
    points: [
      'Successfully completed internship focused on Web Development.',
      'Demonstrated strong application of concepts to real-world projects.',
      'Contributed to multiple live development tasks with high dedication.',
      'Recognized for technical proficiency and team collaboration.',
      'Certificate No: NT2024FEB215113'
    ],
  },
  {
    title: 'Data Engineering Intern',
    tech: 'Eesan IT Solutions',
    icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006555.png',
    date: '17-Feb-2025 to 18-Apr-2025',
    points: [
      'Completed industrial internship under Eesan IT Solutions.',
      'Worked collaboratively with a team on a Data Engineering project.',
      'Applied concepts like ETL pipelines, data processing, and analytics.',
      'Demonstrated leadership, discipline, and problem-solving throughout the project.',
      'Endorsed for professionalism and technical contribution by the company.'
    ],
  },
];

const SkillCircle = ({ title, technologies, percentage }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const radius = 80;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = inView ? circumference - (percentage / 100) * circumference : circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2} className="mb-4">
        <defs>
          <linearGradient id={`gradient-${title}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FFFB" />
            <stop offset="100%" stopColor="#C800FF" />
          </linearGradient>
        </defs>
        <circle stroke="#2d2d2d" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
        <circle
          stroke={`url(#gradient-${title})`}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
        />
        <text x="50%" y="45%" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">
          {title}
        </text>
        <foreignObject x="20" y="50%" width="120" height="60">
          <div className="text-[10px] text-center text-white">
            {technologies.map((tech, idx) => <div key={idx}>{tech}</div>)}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceTimeline = () => (
  <div className="relative mt-16 px-4">
    <h1 className="text-4xl mb-10 text-center">Work Experience</h1>
    <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:h-full before:w-1 before:bg-white">
      {experiences.map((exp, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative w-full md:w-1/2 px-4 py-6 mb-12 ${isLeft ? 'md:pr-12 md:pl-0 md:left-0 md:flex md:justify-end md:items-center md:text-left' : 'md:pl-12 md:pr-0 md:left-1/2 md:flex md:justify-start md:items-center md:text-left'}`}
          >
            <div className="relative bg-[#1c1c2b] text-white rounded-md p-6 shadow-lg">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-black flex items-center justify-center z-10">
                <img src={exp.icon} alt="icon" className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{exp.title}</h2>
              <p className="text-gray-400 text-sm mb-1">{exp.tech}</p>
              <p className="text-sm text-indigo-300 mb-3">{exp.date}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                {exp.points.map((point, idx) => <li key={idx}>{point}</li>)}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const ShanmugamBackground = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-4 pt-10 pb-20">
      <div className="absolute inset-0 flex items-start justify-center pt-10">
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold uppercase opacity-25 select-none pointer-events-none" style={{ fontFamily: "'Inter', sans-serif" }}>
          ABOUT
        </h1>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto mt-24 md:mt-40">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 md:p-10 p-3 md:mb-8">
          I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </p>
        <h1 className="text-4xl pl-3 md:pl-9">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:p-8 p-3 md:mb-8">
          {skills.map((skill) => <SkillCircle key={skill.title} {...skill} />)}
        </div>
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default ShanmugamBackground;
