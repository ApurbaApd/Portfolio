import React from "react";
import { logo, github, leetcode, linkedin, x } from "../assets";// Assuming "../assets" is the correct path to your images


const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[200px] mt-20 relative 2px solid red" >
      <div className="flex justify-center gap-3 ">
        <a href="https://github.com/yourusername" alt="GitHub" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-10 h-10" />
        </a>
        <a href="https://www.linkedin.com/feed/" alt="Linkedin" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
          <img src={linkedin} alt="Linkedin" className="w-10 h-10" />
        </a>
        <a href="https://leetcode.com/" alt="GitHub" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
          <img src={leetcode} alt="Leetcode" className="w-10 h-10" />
        </a>
        <a href="https://twitter.com/home" alt="X" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
          <img src={x} alt="X" className="w-10 h-10" />
        </a>
      </div>
      <p className="text-secondary text-[17px] leading-[30px] text-center absolute bottom-8 left-0 right-0 mx-auto select-none">
        {new Date().getFullYear()} &copy;Coded with ❤️ by Apurba Debnath
      </p>
    </div>
  ); 
};

export default Footer;
