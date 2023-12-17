import React from "react";
import { logo, github, leetcode, linkedin, x } from "../assets";

const Footer = () => {
  return (
    <div className="bg-purple-400 sm:px-16 px-6 sm:py-8 py-6 min-h-[80px] mt-20 relative border-t-2 border-red-600">
      <div className="flex justify-center gap-3">
               <a href="https://github.com/ApurbaApd" alt="GitHub" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-10 h-10" />
        </a>
        <a href="https://www.linkedin.com/in/apurba-debnath-a75a93211/" alt="Linkedin" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
          <img src={linkedin} alt="Linkedin" className="w-10 h-10" />
        </a>
        <a href="https://leetcode.com/coldhearted01/" alt="GitHub" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
          <img src={leetcode} alt="Leetcode" className="w-10 h-10" />
        </a>
        <a href="https://twitter.com/ApurbaDebnath01" alt="X" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
          <img src={x} alt="X" className="w-10 h-10" />
        </a>

      </div>
      <br />
      <p className="text-center text-sm">
        Mail me at: apdnath8596@gmail.com
      </p>
      <br />
      <p className="text-primary text-sm leading-[24px] text-center absolute bottom-4 left-0 right-0 mx-auto select-none">
        {new Date().getFullYear()} &copy;Coded with ❤️ by Apurba Debnath
      </p>
    </div>
  );
};

export default Footer;
