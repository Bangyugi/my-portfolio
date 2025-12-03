import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Restaurant Ordering Website',
      role: 'Backend developer',
      description: 'The system for an online restaurant ordering website, supporting menu management and order processing.',
      tags: ['Spring boot', 'Docker', 'Redis', 'JWT', 'MySQL'],
      github: 'https://github.com/Bangyugi/restaurant-ordering-webapp',
    },
    {
      title: 'E-FYP - Thesis Management',
      role: 'Backend developer',
      description: 'A web application that manages the registration, execution, and evaluation process of graduation projects.',
      tags: ['Spring Boot', 'Docker', 'Redis', 'JWT', 'PostgreSQL', 'Neo4j'],
      github: 'https://github.com/Bangyugi/E-FYP',
    },
    {
      title: 'VSV SHOP - E-commerce',
      role: 'Fullstack developer',
      description: 'A complete E-commerce platform that allows multiple vendors to register their stores and sell products.',
      tags: ['Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com/Bangyugi/vsv-shop',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div className="h-48 bg-slate-700 flex items-center justify-center">
                  <span className="text-slate-500 text-lg">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-200 mb-2">{project.title}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{project.role}</p>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                      <Github size={20} className="mr-2" /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
