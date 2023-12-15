import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { github, leetcode, linkedin , x} from "../assets";

const Hero1 = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h3 className={`${styles.heroHeadText} text-white`}>
            Hi, <br />
            I'm Apurba Debnath
          </h3>
          <p className="text-[#d3e021] lg:text-[40px]">
            Fascinated by technology, fueled by the desire to build creative applications.
          </p>
          <br/>
          <div className="flex gap-3"><p className="text-[#bf34c8] lg:text-[50px]" >My Profiles:</p>
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
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="relative">
            <div className="w-28 h-14 bg-secondary rounded-md flex justify-center items-center border-4 border-secondary">
              <div className="absolute w-0 h-0 border-4 border-transparent border-solid border-l-[14px] border-t-[7px]"></div>
              <div className="text-white text-[20px] font-bold">Dive in</div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero1;
