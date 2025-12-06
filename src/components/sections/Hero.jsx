import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6">
            TRAN VAN BANG
          </h1>
          <h3 className="text-2xl md:text-4xl text-slate-400 mb-8">
            BACKEND DEVELOPER
          </h3>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Aspiring backend developer with a solid foundation in Java Spring Boot and Database Design. Dedicated to building scalable, high-performance applications. My goal is to deliver business value through robust code while continuously aiming to become a Senior Software Engineer in the next 3-5 years.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded hover:bg-cyan-400 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-bold rounded hover:bg-cyan-500/10 transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
