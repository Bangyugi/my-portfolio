import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const Projects = () => {
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
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900 rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col h-full group"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-500 text-sm italic mt-1">{project.subtitle}</p>
                    </div>
                    <span className="text-cyan-400 text-xs font-medium border border-cyan-400/30 px-2 py-1 rounded bg-cyan-400/5">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 mb-6 text-sm line-clamp-3">
                    {project.description[0]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 bg-slate-800 text-slate-500 text-xs rounded border border-slate-700">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <Link 
                    to={`/projects/${project.id}`}
                    className="flex justify-center items-center w-full py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 rounded-lg transition-all border border-slate-700 group-hover:border-cyan-500/30"
                  >
                    View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
