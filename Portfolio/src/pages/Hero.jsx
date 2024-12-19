import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import BannerImg from '../Images/me2.jpg';
import './Hero.css';

function Hero() {
  return (
    <div className="w-full relative min-h-screen">
      <div
        id='img'
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center transition-all duration-500 dark:filter grayscale"
        style={{
          backgroundImage: `url(${BannerImg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <motion.h1
          className="text-4xl font-bold mb-8 mt-[15%] text-white"
          initial={{ y: '-100vw' }}
          animate={{ y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 50 }} 
        >
          Hi, I'm Jinu George!
        </motion.h1>
        <motion.h2
          className="text-2xl mb-4 text-white"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 50 }}
        >
          I am a Web Developer
        </motion.h2>
        
      </div>
    </div>
  );
}

export default Hero;
