import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import manImg from '../Images/person.jpg';

function About() {
  return (
    <div id="about" className="flex flex-col lg:flex-row w-full items-center justify-between py-16 bg-white dark:bg-gray-800">
      <motion.div 
        className="flex justify-center lg:justify-start mb-8 lg:mb-0 lg:w-5/12" 
        initial={{ opacity: 0.5, scale: 0.5 }} 
        transition={{ duration: 1 }}
        whileInView={{opacity: 1,  scale: 1 }}

      >
        <img className="shadow-xl rounded dark:shadow-xl-white ml-32 border-gray-300" style={{ width: "300px" }} src={manImg} alt="Person" />
      </motion.div>
      <section className="about lg:w-7/12 px-4">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="w-full mr-60 flex flex-col justify-center">
              <div className="content flex flex-col justify-center">
                <motion.h3
                  id='Abt'
                  className="text-4xl font-bold mb-4 text-gray-800 dark:text-white"
                  initial={{ opacity:0.5,scale:0.5 }}
                  
                  transition={{ duration:1 }}
                  whileInView={{opacity:1, scale:1}}
                >
                  About Me
                </motion.h3>
                <motion.p
                  className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-white"
                  initial={{opacity:0.5,scale:0.5 }}
                  
                  transition={{duration:1 }}
                  whileInView={{opacity:1, scale:1}}
                >
                  My expertise lies in front-end development, where I excel in crafting clean, well-structured code using HTML, CSS, and JavaScript. I have a keen eye for design, allowing me to create intuitive and visually appealing interfaces that seamlessly blend aesthetics with functionality.
                </motion.p>
                <motion.div
                  className="flex flex-wrap mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 1 }}
                >
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
