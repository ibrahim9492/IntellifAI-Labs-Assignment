import React from 'react';
import { Send, HelpCircle, FileCode, Clock, Code, Brain } from 'lucide-react';

const Submission = () => {
  return (
    <section id="submission" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Submission Guidelines</h2>
          <p className="text-gray-300 text-center mb-12">
            Follow these instructions to submit your completed assignment
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/70 rounded-xl p-6 shadow-lg border border-slate-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/10 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110"></div>
              
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-indigo-400" />
                  Google Colab Format
                </h3>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-medium">•</span>
                    Create a new Google Colab notebook
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-medium">•</span>
                    Include original implementation in the first section
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-medium">•</span>
                    Add your optimized implementation in the second section
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-medium">•</span>
                    Provide a detailed summary with performance metrics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-medium">•</span>
                    Execute all cells to show outputs and timing results
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 font-medium">•</span>
                    Make sure the notebook is shared with appropriate permissions
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-800/70 rounded-xl p-6 shadow-lg border border-slate-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/10 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-110"></div>
              
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Send className="h-5 w-5 text-purple-400" />
                  How To Submit
                </h3>
                
                <p className="text-gray-300 mb-4">
                  Once you've completed your assignment, please share the Google Colab link via email to:
                </p>
                
                <a 
                  href="mailto:hiring@intellifailabs.com" 
                  className="inline-block text-purple-400 hover:text-purple-300 underline underline-offset-2 mb-6"
                >
                  hiring@intellifailabs.com
                </a>
                
                <div className="mt-2 p-4 bg-purple-900/20 border border-purple-900/30 rounded-lg">
                  <h4 className="font-medium flex items-center gap-2 mb-2">
                    <HelpCircle className="h-4 w-4 text-purple-400" />
                    Questions?
                  </h4>
                  <p className="text-sm text-gray-300">
                    If you have any questions about the assignment, feel free to reach out to us via email. 
                    We're happy to provide clarification on any aspect of the task.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-6 border border-indigo-700/50">
            <h3 className="text-xl font-semibold mb-4 text-center">Evaluation Criteria</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-900/50 mb-3">
                  <Clock className="h-6 w-6 text-indigo-400" />
                </div>
                <h4 className="font-medium mb-2">Performance Improvement</h4>
                <p className="text-sm text-gray-300">
                  Significant reduction in inference time compared to the original implementation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-900/50 mb-3">
                  <Code className="h-6 w-6 text-indigo-400" />
                </div>
                <h4 className="font-medium mb-2">Code Quality</h4>
                <p className="text-sm text-gray-300">
                  Clean, well-documented code with clear explanations of optimization techniques.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-900/50 mb-3">
                  <Brain className="h-6 w-6 text-indigo-400" />
                </div>
                <h4 className="font-medium mb-2">Technical Understanding</h4>
                <p className="text-sm text-gray-300">
                  Demonstrated understanding of ML optimization principles and thoughtful approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Submission;