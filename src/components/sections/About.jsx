import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-8 text-center">
            About Me
          </h2>
          <div className="text-slate-400 text-lg leading-relaxed text-center space-y-6">
            <p>
              Aspiring backend developer with a solid foundation in Java Spring Boot and Database Design. Dedicated to building scalable, high-performance applications.
            </p>
            <p>
              My goal is to deliver business value through robust code while continuously aiming to become a Senior Software Engineer in the next 3-5 years.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
