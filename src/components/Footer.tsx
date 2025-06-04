import React from 'react';
import { Brain, Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-6 w-6 text-indigo-400" />
                <span className="font-bold text-lg text-white">IntellifAI Labs</span>
              </div>
              <p className="text-gray-400 mb-4">
                Pushing the boundaries of AI and Machine Learning with innovative solutions and exceptional talent.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#assignment" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Assignment
                  </a>
                </li>
                <li>
                  <a href="#submission" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Submission
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/KwaiVGI/LivePortrait" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    LivePortrait Repository
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    Google Colab
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    ML Optimization Guide
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start space-x-2">
                  <Mail className="h-5 w-5 mt-0.5 text-indigo-400" />
                  <a href="mailto:hiring@intellifailabs.com" className="hover:text-indigo-400 transition-colors">
                    hiring@intellifailabs.com
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="h-5 w-5 mt-0.5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>
                    AI Technology Park, Innovation Street<br />
                    San Francisco, CA 94105
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 IntellifAI Labs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;