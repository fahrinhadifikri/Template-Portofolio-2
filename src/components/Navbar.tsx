import { useState } from "react";
import { FaReact } from "react-icons/fa";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 bg-gray-900 shadow-md z-50">
      {/* Container max-w sama dengan section */}
      <div className="w-full max-w-6xl mx-auto px-6 flex justify-between items-center h-16">

        {/* Logo & Title */}
        <div className="flex items-center space-x-2">
          <FaReact className="text-blue-500 text-3xl" />
          <span className="text-xl font-semibold text-white">Pahrin Hadi Fikri</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#cv" className="hover:text-blue-400">Download CV</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-300 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 shadow-md flex flex-col space-y-4 px-6 py-4 text-gray-200 font-medium">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#cv" onClick={() => setIsOpen(false)}>Download CV</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
