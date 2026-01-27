import { useId } from "react";
import { CardContent, CardTitle } from "./shared/card";

const experienceData = {
  title: "Experience",
  experience: [
    {
      company: "PointMatrix IT Services",
      role: "Software Developer",
      duration: {
        from: "Mar 2024",
        to: "Dec 2025",
      },
      description:
        "Developed and maintained scalable web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality solutions while following best practices in software architecture and code design.",
    },
    {
      company: "Midnight Studios Pvt Ltd",
      role: "Full Stack Developer",
      duration: {
        from: "Oct 2022",
        to: "Mar 2023",
      },
      description:
        "Built end-to-end web and mobile applications with focus on performance and user experience. Worked on API development, database design, and frontend optimization while maintaining clean, maintainable code.",
    },
  ],
};

function Experience() {
  return (
    <section aria-labelledby="experience" id="experience">
      <CardTitle>
        <h2>{experienceData.title}</h2>
      </CardTitle>

      <CardContent>
        <div className="space-y-4">
          {experienceData.experience.map((experience) => {
            return (
              <article key={useId()} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <header>
                  <h3>{experience.company}</h3>
                  <p>{experience.role}</p>
                  <p className="text-xs">
                    <time dateTime={experience.duration.from}>
                      {experience.duration.from}
                    </time>{" "}
                    -{" "}
                    <time dateTime={experience.duration.to}>
                      {experience.duration.to}
                    </time>
                  </p>
                </header>
                <p className="text-sm">{experience.description}</p>
              </article>
            );
          })}
        </div>
      </CardContent>
    </section>
  );
}

export default Experience;
