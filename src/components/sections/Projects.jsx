import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'VSV SHOP',
      subtitle: 'An e-commerce multi-vendor website',
      role: 'Fullstack developer',
      description: [
        "Developed a scalable multi-vendor marketplace allowing merchants to manage stores, inventory, and orders independently.",
        "Engineered RESTful APIs using Spring Boot and PostgreSQL, implementing JWT for secure Authentication & Authorization (RBAC).",
        "Integrated Redis for caching frequently accessed data to improve system performance and reduce database load.",
        "Built a responsive and interactive User Interface using ReactJS, MUI, and Tailwind CSS; enhanced UX with Framer Motion animations.",
        "Containerized the application services using Docker for consistent development and deployment environments."
      ],
      tags: [
        "Spring Boot",
        "PostgreSQL",
        "Redis",
        "Docker",
        "JWT",
        "ReactJS",
        "MUI",
        "Tailwind CSS"
      ],
      source_code: [
        { label: 'Backend', url: 'https://github.com/Bangyugi/vsv-shop-backend' },
        { label: 'Frontend', url: 'https://github.com/Bangyugi/vsv-shop-frontend' }
      ],
    },
    {
      title: 'E-FYP',
      subtitle: 'A Graduation Thesis Management System',
      role: 'Backend developer',
      description: [
        "Developed a comprehensive backend system to manage the full lifecycle of graduation theses for students and lecturers.",
        "Engineered RESTful APIs using Spring Boot and PostgreSQL for core data management.",
        "Utilized Neo4j to efficiently model and query complex relationships between students, topics, and supervisors.",
        "Implemented secure authentication and Role-Based Access Control using JWT to protect sensitive academic data.",
        "Integrated Redis for caching frequently accessed data, optimizing system performance and reducing database load.",
        "Containerized the application services using Docker for consistent development and deployment workflows."
      ],
      tags: [
        "Spring Boot",
        "PostgreSQL",
        "Neo4j",
        "Redis",
        "Docker",
        "JWT"
      ],
      source_code: 'https://github.com/Bangyugi/E-FYP',
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col h-full"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-200">{project.title}</h3>
                        <p className="text-slate-500 text-sm italic">{project.subtitle}</p>
                    </div>
                    <p className="text-cyan-400 text-sm font-medium border border-cyan-400/30 px-2 py-1 rounded">{project.role}</p>
                  </div>
                  
                  <div className="text-slate-400 mb-6 space-y-2 text-sm flex-grow">
                    {project.description.map((desc, i) => (
                        <p key={i} className="flex items-start">
                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></span>
                            {desc}
                        </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs rounded-full border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4 mt-auto pt-4 border-t border-slate-800">
                    {Array.isArray(project.source_code) ? (
                        project.source_code.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors text-sm">
                                <Github size={16} className="mr-2" /> {link.label} Code
                            </a>
                        ))
                    ) : (
                        <a href={project.source_code} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors text-sm">
                            <Github size={16} className="mr-2" /> Source Code
                        </a>
                    )}
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
