import React from 'react';
import { Brain, Github, Mail, Send } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Assignment from './components/Assignment';
import Submission from './components/Submission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <Navbar />
      <main>
        <Hero />
        <Assignment />
        <Submission />
      </main>
      <Footer />
    </div>
  );
}

export default App;