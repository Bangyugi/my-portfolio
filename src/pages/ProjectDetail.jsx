import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Calendar, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-slate-400 hover:text-cyan-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <header className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-2">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-400 italic">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <span className="text-cyan-400 font-medium px-4 py-2 border border-cyan-400/30 rounded-lg bg-cyan-400/10 mb-2">
                  {project.role}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-800 text-cyan-400 text-sm rounded-full border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-1 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center">
                Overview
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                {project.description.map((desc, i) => (
                    <p key={i} className="flex items-start">
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></span>
                        {desc}
                    </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
               {Array.isArray(project.source_code) ? (
                 project.source_code.map((link, i) => (
                   <a
                     key={i}
                     href={link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-xl transition-all duration-300 flex items-center justify-center border border-slate-700 group"
                   >
                     <Github className="mr-2 group-hover:scale-110 transition-transform" />
                     <span>{link.label} Code</span>
                     <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </a>
                 ))
               ) : (
                 <a
                   href={project.source_code}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-xl transition-all duration-300 flex items-center justify-center border border-slate-700 group"
                 >
                   <Github className="mr-2 group-hover:scale-110 transition-transform" />
                   <span>Source Code</span>
                   <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </a>
               )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
