import { useId } from "react";
import { CardContent, CardTitle } from "./shared/card";

const educationData = {
  title: "Education",
  education: [
    {
      degree: "B.E in Computer Science",
      university: "Savitribai Phule Pune University",
      description:
        "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering",
    },
  ],
};
function Education() {
  return (
    <section aria-labelledby="education" id="education">
      <CardTitle>
        <h2>Education</h2>
      </CardTitle>
      <CardContent>
        {educationData.education.map((education) => {
          return (
            <div
              key={useId()}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <h3>{education.degree}</h3>
              <p className="text-sm">{education.university}</p>
              <p className="text-sm ">{education.description}</p>
            </div>
          );
        })}
      </CardContent>
    </section>
  );
}

export default Education;
