import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { github, leetcode, linkedin, x } from "../assets";



const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const text = "Fascinated by technology; Web Developement; Data science; AI/ML enthusiast.";


const Hero1 = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, <br />
            I'm Apurba Debnath
          </motion.h3>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-[#d3e021] lg:text-[40px]"
          >
            {text.split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.p>
          <br />
          <div className="flex gap-3"><p className="text-[#bf34c8] lg:text-[50px]" >My Profiles:</p>
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
