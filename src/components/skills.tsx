import { useId } from "react";
import { CardContent, CardTitle } from "./shared/card";

const skillsData = {
  title: "Skills",
  types: [
    {
      type: "Frontend",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      type: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "Fastify",
        "Moleculer.js",
        "REST API Design",
        "WebSockets",
        "JWT Authentication",
        "RBAC",
        "Stripe Integration",
      ],
    },
    {
      type: "Database",
      skills: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma"],
    },
    {
      type: "Tools & Practices",
      skills: [
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
      ],
    },
  ],
};

function Skills() {
  return (
    <section aria-labelledby="skills">
      <CardTitle id="skills">
        <h2>{skillsData.title}</h2>
      </CardTitle>

      <CardContent>
        <div className="space-y-6">
          {skillsData.types.map((skill) => {
            return (
              <section key={useId()}>
                <h3 className="text-lg font-semibold mb-3">{skill.type}</h3>
                <ul className="flex flex-wrap gap-3">
                  {skill.skills.map((s) => (
                    <li key={s}>
                      <span className="px-3 py-1.5 bg-linear-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </CardContent>
    </section>
  );
}

export default Skills;
