import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
         
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="International Model United Nations 135th Conference"
            subTitle="4th Position among 136 Candidates Worldwide"
            result="Online"
            des="Secured 4th place out of 136 delegates as the representative of Saudi Arabia at the IMUN conference, demonstrating strong diplomatic skills and leadership in international relations."
          />
          <ResumeCard
            title="Phototgraphy Competition"
            subTitle="2nd Position"
            result="Offline"
            des="Secured Second Position at Annual Cultural Fest of KIET - EPOQUE @ PRASTUTI 2023"
          />
          <ResumeCard
            title="KIET Model United Nations"
            subTitle="3rd Prize"
            result="Offline"
            des="Raised my voice for the Nation as the Delegate of USA and successfully secured 3rd position."
          />
        </div>
      </div>
      
        
    </motion.div>
  );
};

export default Achievement;
