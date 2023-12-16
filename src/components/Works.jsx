import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link, // Adding demo link
}) => {
  return (
    <div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-200 p-5 rounded-lg sm:w-[360px] w-full shadow-md"
      >
        <div className="relative w-full h-[230px] rounded-lg overflow-hidden">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-lg"
          />

          <div className="absolute inset-0 flex justify-end items-end m-3">
            <div className="space-x-2">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gray-800 rounded-full flex justify-center items-center w-10 h-10 cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-6 h-6 object-contain"
                />
              </div>
              {demo_link && (
                <div
                  onClick={() => window.open(demo_link, "_blank")}
                  className="bg-blue-500 text-white rounded-full flex justify-center items-center w-10 h-10 cursor-pointer"
                >
                  <img
                    src={github}
                    alt="demo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-gray-800 font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-600 text-[20px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[20px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-gray-600 text-[20px] max-w-3xl leading-[30px]"
        >
          Following are some of the Projects I recently worked on.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
