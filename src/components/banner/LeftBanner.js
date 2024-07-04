import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Video Creator."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Daksh Tyagi</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a Bachelor of Technology in Computer Science student with a passion for full stack development. Alongside coding, I love exploring new places, and creating engaging videos that capture my experiences. My journey blends technology, creativity, and adventure.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon"><a href="https://www.facebook.com/daksh.tyagi.5648"><FaFacebookF /></a>
              
            </span>
            <span className="bannerIcon">
            <a href="https://www.instagram.com/itihas.ka.safar/"><FaTwitter /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/dakshtyagi"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILLS ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://react.dev/"><FaReact /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://nodejs.org/en"><SiNextdotjs /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://tailwindcss.com/"><SiTailwindcss /></a>
            
            </span>
            <span className="bannerIcon">
            <a href="https://www.figma.com/"><SiFigma /></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner