import { CardContent, CardTitle } from "./shared/card";

function Projects() {
  return (
    <>
      <CardTitle>
        <h2>Projects</h2>
      </CardTitle>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3>Tolls Calculator</h3>
            <p className="text-sm">
              ReactJS web app utilizing Toll Guru API for toll information.
              Features MapTiler with polyline mapping, providing toll costs,
              travel time, fuel usage, and distance for routes with optional
              waypoints.
            </p>
            <a
              href="https://tolls-super.vercel.app/"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              target="_blank"
            >
              View Project →
            </a>
          </div>
          {/* <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Project 2</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Brief description of your project goes here. Explain the
                  problem it solves and the technologies used.
                </p>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Project →
                </a>
              </div> */}
        </div>
      </CardContent>
    </>
  );
}

export default Projects;
