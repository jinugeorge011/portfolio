import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 'Expert' },
  { name: 'CSS', level: 'Expert' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Tailwind CSS', level: 'Advanced' },
];

function Skills() {
  return (
    <section id="Skills" className="skills w-full py-16 bg-gray-100 dark:bg-gray-800 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="h21 text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${skill.level === 'Expert' ? 'bg-green-200 text-green-800' : skill.level === 'Advanced' ? 'bg-blue-200 text-blue-800' : 'bg-yellow-200 text-yellow-800'}`}>{skill.level}</span>
                </div>
                <div className="mt-4 h-2 w-full bg-gray-200 rounded-full">
                  <div className={`h-full rounded-full ${skill.level === 'Expert' ? 'bg-green-500 w-full' : skill.level === 'Advanced' ? 'bg-blue-500 w-3/4' : 'bg-yellow-500 w-2/5'}`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
