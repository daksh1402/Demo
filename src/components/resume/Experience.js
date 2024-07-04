import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
    <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Virtual Experience Program on Forage"
            subTitle="Goldman Sachs - (April-May 2024)"
            result="Online"
            des="Completed a job simulation as a Goldman Sachs governance analyst responsible for assessing IT security and suggesting improvements."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="Bharat Intern - (Feb - April 2024)"
            result="Delhi"
            des="I delved into the MERN stack, mastering MongoDB, Express.js, React, and Node.js for building modern and scalable web applications."
          />
          <ResumeCard
            title="Web Developer Intern"
            subTitle="CodeBytes - (Nov - Dec 2023)"
            result="Online"
            des="Gained hands-on experience in frontend development, mastering essential skills in creating responsive and intuitive user interfaces."
          />
        </div>
      </div>  
    
    </motion.div>
  );
};

export default Experience;
