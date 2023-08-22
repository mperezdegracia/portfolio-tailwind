import React from "react";
import Marquee from "react-fast-marquee";
import { skillsData, skillsImage } from "app/data/skills_image.js";

export default function Skills() {
  return (
    <div id="skills" class="bg-transparent bg-opacity-80  w-full">
      <h1 class="text-xl md:text-5xl dark:text-contrast text-secondary_light font-primary font-thin mb-10 mt-10 text-center">
        Skills
      </h1>

      <div class="items-center mx-[20%]">
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
            <div class="bg-primary_light dark:bg-secondary_light rounded-xl mx-5 w-[150px] p-4">
                <img src={skillsImage(skill)} class="w-10 h-10 m-auto" />
                <h3 class="text-center m-auto text-contrast ">{skill}</h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}