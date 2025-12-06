import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Terminal, Cpu, PenTool, GitBranch } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Languages',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      items: ['Java (Core, OOP)', 'JavaScript (ES6+)', 'SQL'],
    },
    {
      category: 'Backend Frameworks',
      icon: <Terminal className="w-8 h-8 text-cyan-400" />,
      items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate'],
    },
    {
      category: 'Frontend',
      icon: <Layout className="w-8 h-8 text-cyan-400" />,
      items: ['ReactJS', 'Material UI', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
      category: 'Databases',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      items: ['PostgreSQL', 'Neo4j (Graph DB)', 'Redis (Caching)', 'MySQL'],
    },
    {
      category: 'DevOps & Tools',
      icon: <GitBranch className="w-8 h-8 text-cyan-400" />,
      items: ['Docker', 'Git/GitHub', 'Postman', 'IntelliJ IDEA', 'Maven'],
    },
    {
      category: 'Concepts',
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      items: ['RESTful APIs', 'JWT Authentication', 'Data Structures & Algorithms'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-slate-200 mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-slate-400 flex items-center">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
