import { useState } from "react";
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MySite</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-gray-300 transition">About</a>
            <a href="#projects" className="hover:text-gray-300 transition">Projects</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Animated Mobile Menu */}
      <div className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out bg-black bg-opacity-90
        transform ${isMenuOpen ? 'translate-x-0 translate-y-0' : 'translate-x-full -translate-y-full'}
        flex items-center justify-center`}>
        <ul className="space-y-6 text-white text-xl text-center">
          <li><a href="#about" onClick={toggleMenu} className="hover:text-gray-300 transition">About</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover:text-gray-300 transition">Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-gray-300 transition">Contact</a></li>
        </ul>
      </div>

      {/* Sample Page Sections */}
    
    </>
  );
}

export default App;
