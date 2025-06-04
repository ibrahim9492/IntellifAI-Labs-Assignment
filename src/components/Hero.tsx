import React, { useEffect, useState } from 'react';
import { Brain } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen pt-28 pb-16 flex items-center"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex p-3 rounded-full bg-indigo-900/30 mb-6">
              <Brain className="h-12 w-12 text-indigo-400" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Machine Learning Position at IntellifAI Labs
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Welcome to the initial screening process for our Machine Learning team.
              We're looking for exceptional talent who can optimize and improve AI models.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a 
                href="#assignment" 
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors duration-300"
              >
                View Assignment
              </a>
              <a 
                href="#submission" 
                className="px-8 py-3 bg-transparent border border-indigo-500 hover:bg-indigo-900/30 rounded-lg font-medium transition-colors duration-300"
              >
                Submission Guidelines
              </a>
            </div>
          </div>
          
          <div className="relative mt-12 p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">About The Position</h2>
            <p className="text-gray-300 mb-4">
              As a Machine Learning Engineer at IntellifAI Labs, you'll work on cutting-edge AI models 
              that push the boundaries of what's possible. We're seeking candidates with strong 
              optimization skills who can enhance model performance while maintaining quality.
            </p>
            <p className="text-gray-300">
              This screening task will help us evaluate your technical abilities, specifically 
              in code optimization and understanding of ML model inference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;