import React from 'react';
import {projectsData} from '../../data';
import "./project.css";

import portfolios from "../../assets/data/portfolioData"


const Projects = () => {
  return (
    <section id="portfolio" className='pb-32'>
        <div className="mb-12 sm:mb-0">
            <h3 className="text-headingColor text-center text-[2rem] font-[700]">
               My recent projects
            </h3>
        </div>

        <div className=" mt-10 flex justify-center items-center">
                        
            <div className="container flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolios.map(portfolio => (
                <div key={portfolio.id} className=" bg-teal-50 max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden m-4">
                    <img className="w-full  object-contain object-center" src={portfolio.imgUrl} alt={portfolio.title} />
                    <div className="p-4 ">
                        <h2 className="text-gray-900 font-bold text-xl mb-2">{portfolio.title}</h2>
                        <p className="text-gray-700 text-base">{portfolio.description}</p>
                        <div className="flex justify-between mt-4">
                            <a href={portfolio.siteUrl} target='_blank' className="text-teal-600 hover:text-teal-600 font-semibold">Visit Website</a>
                            {/* <span className="text-gray-600 text-sm">{portfolio.category}</span> */}
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
  </section>
  );
};

export default Projects;
