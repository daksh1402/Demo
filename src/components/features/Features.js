import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Problem Solving"
          des="I solve complex problems using data structures and algorithms in Java for efficient and scalable solutions."
         
        />
        <Card
          title="Web Development"
          des=" I create user-centric, high-performance web applications with seamless front-end and robust back-end functionalities."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Video Creator"
          des="I produce high-quality YouTube vlogs, featuring college life insights and cinematic travel and historical videos."
          icon={<SiProgress />}
        />
        
      </div>
    </section>
  );
}

export default Features