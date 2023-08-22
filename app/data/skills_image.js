export const skillsData = [
  "React",
  "Nextjs",
  "C",
  "MongoDB",
  "Tailwind",
  "Javascript",
  "Docker",
  "Java",
];
export const skillsImage = (skill) => {
  const skill_id = skill.toLowerCase();
  switch (skill_id) {
    case "react":
      return "/react.svg";
    case "nextjs":
      return "/nextJS.svg";
    case "c":
      return "/c.svg";
    case "mongodb":
      return "/mongoDB.svg";
    case "tailwind":
      return "/tailwind.svg";
    case "javascript":
      return "/javascript.svg";
    case "docker":
      return "/docker.svg";
    case "java":
      return "/java.svg";
  }
};
