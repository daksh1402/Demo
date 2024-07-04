import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
         
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Portfolio Website"
          des="Created a responsive project portfolio in React.js to showcase my full stack development projects and skills."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Developed an e-commerce website using the MERN stack, featuring product listings, a shopping cart, and secure checkout."
          src={projectTwo}
        />
        <ProjectsCard
          title="Brain Tumor Detection"
          des="Implemented a brain tumor detection system using machine learning, achieving high accuracy in MRI image analysis."
          src={projectThree}
        />
        
      </div>
    </section>
  );
}

export default Projects