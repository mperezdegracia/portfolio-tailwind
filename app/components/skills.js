import React from "react";
import Marquee from "react-fast-marquee";
import { skillsData, skillsImage } from "app/data/skills_image.js";

export default function Skills() {
  return (
    <div id="skills" className="bg-transparent bg-opacity-80 w-full">
      <h1 className="text-xl md:text-5xl dark:text-contrast text-secondary_light font-primary font-thin mb-10 mt-10 text-center">
        Skills
      </h1>

      <div className=" sm:mx-0 md:mx-[20%] h-[200px] ">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="bg-primary_light dark:bg-secondary_light rounded-xl my-5 mx-5 w-[150px] p-4 hover:border-2 hover:border-contrast hover:scale-110 transform transition-transform duration-300 "
              key={id}
            >
              <img src={skillsImage(skill)} className="w-10 h-10 m-auto" />
              <h3 className="text-center m-auto font-primary text-contrast ">
                {skill}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}