import React from "react";
import { CardContent, CardTitle } from "./shared/card";

function Skills() {
  return (
    <>
      <CardTitle>
        <h2>Skills</h2>
      </CardTitle>
      <CardContent>
        <div className="space-y-6">
          {/* Frontend */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "React.js",
                "Next.js",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-linear-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "Express.js",
                "Fastify",
                "Moleculer.js",
                "REST API Design",
                "WebSockets",
                "JWT Authentication",
                "RBAC",
                "Stripe Integration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-linear-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Databases</h3>
            <div className="flex flex-wrap gap-3">
              {["MongoDB", "PostgreSQL", "Mongoose", "Prisma"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-linear-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Practices */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Tools & Practices</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Docker",
                "CI/CD",
                "Git",
                "GitHub",
                "Linux",
                "Postman",
                "Microservices Architecture",
                "Event-Driven Systems",
                "Multi-Tenant SaaS",
                "System Design",
                "Clean Code",
                "Agile Methodology",
                "Debugging",
                "Code Reviews",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-linear-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
}

export default Skills;
