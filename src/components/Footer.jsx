import React from 'react';
import { Facebook, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 text-center text-slate-400">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Bangyugi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors"><Github size={24} /></a>
          <a href="https://web.facebook.com/neilphelan85/" className="hover:text-cyan-400 transition-colors"><Facebook size={24} /></a>
          <a href="mailto:bangtranvan08@gmail.com" className="hover:text-cyan-400 transition-colors"><Mail size={24} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
