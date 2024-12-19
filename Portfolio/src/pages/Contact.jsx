import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section id="Contact" className="contact py-16 w-full bg-white text-gray-900 dark:bg-gray-800  dark:text-white">

      <div className="container mx-auto px-6 ">
          <h2 className="h21 text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-700"
            initial={{ opacity: 0.5,scale:1, x:-150 }}
            transition={{ duration: 1 }}
            whileInView={{opacity:1, scale:1, x:0}}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-gray-700 dark:text-white">Name</label>
                  <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-black" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-gray-700 dark:text-white">Email</label>
                  <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-black" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-gray-700 dark:text-white">Message</label>
                  <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:text-black"></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Send
                </motion.button>
              </form>
            </motion.div>
            <motion.div className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0.5,scale:1,x:250 }}
            transition={{ duration: 1 }}
            whileInView={{opacity:1, scale:1,x:0 }}
            >
              <div className="location">
                <h3 className="cnt text-3xl font-semibold mb-2 text-gray-800 dark:text-white">Location</h3>
                <p className="text-lg">Keerikode, Thodupuzha, India</p>
                <p className="text-lg"><a href="#" className="text-blue-500 hover:underline">+91 7994219559</a></p>
                <p className="text-lg"><a href="mailto:jinugeorgetdpa@gmail.com" className="text-blue-500 hover:underline">jinugeorgetdpa@gmail.com</a></p>
              </div>
              <div>
                <h3 className="cnt text-3xl font-semibold mb-2 text-gray-800 dark:text-white">Social Links</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-600"><FaXTwitter size={24} /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 dark:text-white dark:hover:text-blue-600"><FaLinkedin size={24} /></a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-600"><FaGithub size={24} /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700 dark:text-white dark:hover:text-blue-600"><FaInstagram size={24} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
}

export default Contact;
