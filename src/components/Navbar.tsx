import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-xl font-bold">
          <Brain className="h-8 w-8 text-indigo-400" />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            IntellifAI Labs
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#assignment" className="text-gray-300 hover:text-white transition-colors">Assignment</a>
          <a href="#submission" className="text-gray-300 hover:text-white transition-colors">Submission</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#assignment" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Assignment
            </a>
            <a 
              href="#submission" 
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Submission
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;