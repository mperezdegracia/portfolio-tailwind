import { projects_data } from "../data/projectsData";


export function ProjectCard({ data }) {
    return (
        <div class="max-w-sm rounded-lg shadow dark:bg-secondary  bg-primary_light dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="code.jpg" alt="" />{/* src={data.img} */}

            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-contrast">Noteworthy technology acquisitions 2021</h5>{/* src={data.title} */}
                </a>
                <p class="mb-3 font-normal text-gray-400  dark:text-contrast">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> {/* src={data.description} */}
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-tertiary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-tertiary dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more {/* src={data.button_text} */}
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    );
}


export default function ProjectGrid() {
    const projects = projects_data;
    return (
        <div id="project">
            <h1 class="text-xl md:text-5xl dark:text-contrast text-secondary_light font-primary font-thin mb-10 mt-10 text-center">
                Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-40">
                {/* Map through the projects array and render each project card */}
                {projects.map((project, index) => (
                    <ProjectCard key={index} data={project} />
                ))}
            </div>

        </div>

    );
}