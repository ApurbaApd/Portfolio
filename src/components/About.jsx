import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { me } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
       
        <p className={styles.sectionSubText } style={{ borderTop:"2px solid red"}}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Let me Introduce myself</h2>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[22px] max-w-3xl leading-[30px]"
        >
          <ul>
          🎓 I'm a final year student pursuing Bachelors of Technology from NIT Durgapur.
          </ul><br/>
          <ul>
          💼 Currently seeking opportunities for the role of Web Developer, Data Analyst, Data science.
          </ul><br/>
          <ul>
          🌟 I like working with different datasets and analyze the data to get different insights.
          </ul><br/>
          <ul>
          🌟 I have a strong interest in web development and user interfaces.
          <ul><br/>
          🚀 Proficient in ReactJS and passionate about creating interactive web applications.
          </ul><br/>
          <ul>
          📚 Continuous learner with a keen interest in staying updated with the latest tech trends.
          </ul><br/>
          <ul>
          🌈 Enjoy creating intuitive and visually appealing user experiences.
          </ul><br/>
          🎮 Outside coding, I love watching Sports, reading books and exploring new places.
          </ul>
        </motion.p>
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={me}
                alt="MyPhoto"
                className="w-59 h-65 "
              />
            </div>
          </motion.div>
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
