import React, { useState } from 'react';
import { Github, Code, Clock, MemoryStick } from 'lucide-react';

const Assignment = () => {
  const [activeTab, setActiveTab] = useState('task');

  return (
    <section id="assignment" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Assignment Details</h2>
          <p className="text-gray-300 text-center mb-12">
            Please read the following task carefully and follow all submission guidelines
          </p>
          
          <div className="bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-slate-700">
            <div className="flex flex-wrap border-b border-slate-700">
              <button 
                onClick={() => setActiveTab('task')}
                className={`px-6 py-4 font-medium text-sm transition-colors ${
                  activeTab === 'task' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Assignment Task
              </button>
              <button 
                onClick={() => setActiveTab('requirements')}
                className={`px-6 py-4 font-medium text-sm transition-colors ${
                  activeTab === 'requirements' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Requirements
              </button>
              <button 
                onClick={() => setActiveTab('resources')}
                className={`px-6 py-4 font-medium text-sm transition-colors ${
                  activeTab === 'resources' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Resources
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'task' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Code Optimization Task</h3>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-900/30 p-2 rounded-lg mt-1">
                      <Github className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Repository</h4>
                      <p className="text-gray-300 mb-2">
                        Please work with the following GitHub repository:
                      </p>
                      <a 
                        href="https://github.com/KwaiVGI/LivePortrait" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2"
                      >
                        https://github.com/KwaiVGI/LivePortrait
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-indigo-900/30 p-2 rounded-lg mt-1">
                      <Code className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Objective</h4>
                      <p className="text-gray-300">
                        Your goal is to optimize the code—specifically focusing on reducing inference time. 
                        You may also optionally consider improving output quality or reducing GPU memory usage if relevant.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'requirements' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Submission Requirements</h3>
                  
                  <p className="text-gray-300 mb-4">
                    Please submit a Google Colab notebook containing:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-400 font-bold">
                        1
                      </div>
                      <p className="text-gray-300">
                        The original implementation (with output, inference time, and results).
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-400 font-bold">
                        2
                      </div>
                      <p className="text-gray-300">
                        Your optimized implementation (with updated output cells showing the new results and timing).
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-400 font-bold">
                        3
                      </div>
                      <div>
                        <p className="text-gray-300 mb-2">
                          A brief summary that includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300">
                          <li>The optimizations or changes you made.</li>
                          <li>The reasoning behind those changes.</li>
                          <li>A performance comparison (inference time, output quality, memory usage if relevant) between the original and optimized versions.</li>
                          <li>Share any additional optimization ideas you would explore if given more time.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'resources' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Optimization Focus Areas</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <Clock className="h-6 w-6 text-indigo-400" />
                        <h4 className="font-medium">Inference Time</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Primary focus: Reduce the time it takes for the model to process inputs and generate outputs.
                      </p>
                    </div>
                    
                    <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <svg className="h-6 w-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12" y2="16"></line>
                        </svg>
                        <h4 className="font-medium">Output Quality</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Optional: Maintain or improve the quality of model outputs while optimizing for speed.
                      </p>
                    </div>
                    
                    <div className="bg-slate-800 p-5 rounded-lg border border-slate-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <MemoryStick className="h-6 w-6 text-indigo-400" />
                        <h4 className="font-medium">Memory Usage</h4>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Optional: Reduce GPU memory consumption to improve efficiency and enable processing larger inputs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-indigo-900/20 border border-indigo-900/40 rounded-lg">
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-indigo-400">Note:</span> You're welcome to use any code-assistance tools, including language models, 
                      to help with this task. If any part of the assignment is unclear, feel free to make reasonable assumptions.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assignment;