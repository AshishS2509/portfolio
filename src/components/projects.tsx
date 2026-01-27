import { useId } from "react";
import { CardContent, CardTitle } from "./shared/card";

const projectsData = {
  title: "Projects",
  projects: [
    {
      title: "Toll Calculator — React & Map Based Routing App",
      description:
        "ReactJS web app utilizing Toll Guru API for toll information. Features MapTiler with polyline mapping, providing toll costs, travel time, fuel usage, and distance for routes with optional waypoints.",
      link: "https://tolls-super.vercel.app/",
    },
  ],
};
function Projects() {
  return (
    <section aria-labelledby="projects" id="projects">
      <CardTitle>
        <h2>{projectsData.title}</h2>
      </CardTitle>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectsData.projects.map((project) => {
            return (
              <article
                key={useId()}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <header>
                  <h3>{project.title}</h3>
                </header>

                <p className="text-sm">{project.description}</p>

                <footer>
                  <a
                    href={project.link}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </footer>
              </article>
            );
          })}
        </div>
      </CardContent>
    </section>
  );
}

export default Projects;
