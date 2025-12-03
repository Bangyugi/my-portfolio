import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      major: 'Information Technology',
      institution: 'Hanoi University of Industry',
      period: '10/2022 - 10/2026',
      gpa: 'GPA: 3.35',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
            Education
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-700"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                <div className="mb-1 flex items-center text-cyan-400 font-medium">
                  <GraduationCap size={16} className="mr-2" />
                  {edu.major}
                </div>
                <h3 className="text-xl font-bold text-slate-200 mb-1">{edu.institution}</h3>
                <div className="text-slate-500 text-sm mb-4 flex items-center">
                  <Calendar size={14} className="mr-2" />
                  {edu.period}
                </div>
                <p className="text-slate-400">
                  {edu.gpa}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
