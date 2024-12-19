import React from 'react';
import Demo from '../Images/demo.png'
import img1 from '../Images/weather.avif'
import img2 from '../Images/Forms.png'
import img3 from '../Images/calculation.png'
import img4 from '../Images/budget.png'

function Projects() {
  return (
    <section id="Projects" className="projects w-full py-16 bg-gray-100 dark:bg-gray-800 ">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="h21 text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 ml-10 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <a href="https://weatherapp-jinu.netlify.app">
            <div className="p-6 bg-white w-80 h-96 dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Weather App</h3>
              <img className='rounded' src={img1} alt="" />            </div>
            </a>
            <a href="https://jinugeorge-formvalidation.netlify.app">
            <div className="p-6 bg-white w-80 h-96 dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Form Validation</h3>
              <img className='rounded' src={img2} alt="" />

            </div>
            </a>
            <a href="https://jinugeorge-discountcalculator.netlify.app">
            <div className="p-6 bg-white w-80 h-96 dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Discout Calculator</h3>
              <img className='rounded' src={img3} alt="" />

            </div>
            </a>

            <a href="https://incredible-narwhal-b3e9cd.netlify.app">
            <div className="p-6 bg-white w-80 h-96 dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Budget Calculator</h3>
              <img className='rounded' src={img4} alt="" />


            </div>
            </a>
            <a href="https://jinugeorge-formvalidation.netlify.app">
            <div className="p-6 bg-white w-80 h-96 dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Form Validation</h3>
              <img className='rounded' src={Demo} alt="" />

            </div>
            </a>
            <a href="https://jinugeorge-discountcalculator.netlify.app">
            <div className="p-6 bg-white w-80 h-96 dark:bg-gray-700 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Discout Calculator</h3>
              <img className='rounded' src={Demo} alt="" />

            </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
