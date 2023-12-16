import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { github, leetcode, linkedin, x } from "../assets";

const Hero1 = () => {
  const typewriterStyle = `
    /* Typewriter Effect */
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    .typewriter {
      overflow: hidden;
      border-right: 0.08em solid white;
      white-space: nowrap;
      animation: typing 10s steps(40) infinite;
    }
  `;

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <style>{typewriterStyle}</style>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h3 className={`${styles.heroHeadText} text-white`}>
            Hi, <br />
            I'm Apurba Debnath
          </h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#c021e0] lg:text-[40px] typewriter" // Added 'typewriter' class here
          >
            Fascinated by technology; web developer, Data Science, AL/ML enthusiast.
          </motion.p>
          <br />
          <div className="flex gap-3">
            <p className="text-[#db1e09] lg:text-[60px]">My Profiles:</p>
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
