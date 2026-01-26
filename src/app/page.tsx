import ProfileCard from "@/components/profile-card";
import { Card, CardContent, CardTitle } from "@/components/shared/card";
import { ChevronsUp, Globe, MonitorSmartphone, Workflow } from "lucide-react";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-row">
      <div className="lg:basis-1/3 lg:p-8">
        <ProfileCard />
      </div>
      <div className="lg:basis-2/3 lg:p-6">
        <Card className="p-4 md:p-8 mt-2 lg:m-2">
          <CardTitle className="mb-2 pl-6">
            <h2 className="text-3xl font-bold bg-clip-text tracking-wide">
              About
            </h2>
          </CardTitle>
          <CardContent className="text-justify">
            <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide font-light">
              &ensp; I'm a solution-oriented software engineer focused on
              building clean, scalable, and reliable web applications. I
              approach development by first understanding the problem, then
              designing practical and maintainable solutions that balance
              performance, clarity, and long-term usability.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed mt-2 tracking-wide font-light">
              &ensp; With experience in both startup and structured IT
              environments, I'm comfortable taking ownership, working end-to-end
              across the stack, and collaborating closely with others to ship
              high-quality software. I value clean architecture, well-designed
              APIs, and thoughtful database design, and I'm always looking to
              improve systems rather than just make them “work”.
            </p>
            <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed mt-2 tracking-wide font-light">
              &ensp; I enjoy tackling complex requirements, refining existing
              systems, and continuously learning better ways to build software.
            </p>
          </CardContent>
          <CardTitle className="mb-2 pl-6">
            <h2 className="text-3xl font-bold bg-clip-text tracking-wide">
              What I Do !
            </h2>
          </CardTitle>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 flex gap-3">
                  <Globe />
                  Web Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Building responsive and interactive web applications using
                  modern frameworks and technologies.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 flex gap-3">
                  <MonitorSmartphone />
                  App Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Creating cross-platform mobile and desktop applications with
                  seamless user experiences.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 flex gap-3">
                  <Workflow />
                  API Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Designing and implementing robust REST and GraphQL APIs with
                  scalable architecture.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 flex gap-3">
                  <ChevronsUp />
                  Performance Optimization
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Optimizing applications for speed, efficiency, and scalability
                  across web and mobile platforms.
                </p>
              </div>
            </div>
          </CardContent>

          <CardTitle className="mb-2 pl-6">
            <h2 className="text-3xl font-bold bg-clip-text tracking-wide">
              Projects
            </h2>
          </CardTitle>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Tolls Calculator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
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

          <CardTitle className="mb-2 pl-6">
            <h2 className="text-3xl font-bold bg-clip-text tracking-wide">
              Experience
            </h2>
          </CardTitle>
          <CardContent>
            <div className="space-y-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-1">
                  PointMatrix IT Services
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Software Developer
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Mar 2024 - Dec 2025
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Developed and maintained scalable web applications using
                  modern technologies. Collaborated with cross-functional teams
                  to deliver high-quality solutions while following best
                  practices in software architecture and code design.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-1">
                  Midnight Studios Pvt Ltd
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Full Stack Developer
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Oct 2022 - May 2023
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Built end-to-end web and mobile applications with focus on
                  performance and user experience. Worked on API development,
                  database design, and frontend optimization while maintaining
                  clean, maintainable code.
                </p>
              </div>
            </div>
          </CardContent>

          <CardTitle className="mb-2 pl-6">
            <h2 className="text-3xl font-bold bg-clip-text tracking-wide">
              Skills
            </h2>
          </CardTitle>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React", "Next.js", "Node.js", "GraphQL", "REST APIs", "Tailwind CSS", "PostgreSQL", "MongoDB", "Docker", "Git", "System Design"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-linear-to-r from-blue-300 to-purple-400 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
