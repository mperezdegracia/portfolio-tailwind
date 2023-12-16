import { projects_data } from "../data/projectsData";

export function ProjectCard({ data }) {
  return (
    <div className="max-w-sm rounded-lg shadow dark:bg-secondary  bg-primary_light dark:border-gray-700 flex flex-col justify-between">
      <div>
        <a href={data.link}>
          <img className="rounded-t-lg" src="code.jpg" alt="" />
          {/* src={data.img} */}
        </a>

        <div className="p-3">
          <a href={data.link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-contrast font-primary">
              {data.title}{" "}
            </h5>
          </a>

          <p className="mb-3 font-normal text-gray-400  dark:text-contrast font-primary">
            {data.description}
          </p>
        </div>
      </div>
      <div className="p-3">
        <a
          href={data.link}
          className="inline-flex items-center w-fit px-3 py-2 text-sm  font-medium text-center font-primary text-white bg-tertiary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-tertiary dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {/* src={data.button_text} */}
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  const projects = projects_data;
  return (
    <div id="project" className=" mx-[10%]">
      <h1 className="text-xl md:text-5xl dark:text-contrast text-secondary_light font-primary font-thin mb-10 mt-10 text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map through the projects array and render each project card */}
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
}
