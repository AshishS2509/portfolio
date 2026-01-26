import { CardContent, CardTitle } from "./shared/card";
import { ChevronsUp, Globe, MonitorSmartphone, Workflow } from "lucide-react";

function Work() {
  return (
    <>
      <CardTitle>
        <h2>What I Do !</h2>
      </CardTitle>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: Globe,
              title: "Web Development",
              description:
                "Building responsive and interactive web applications using modern frameworks and technologies.",
            },
            {
              icon: MonitorSmartphone,
              title: "App Development",
              description:
                "Creating cross-platform mobile and desktop applications with seamless user experiences.",
            },
            {
              icon: Workflow,
              title: "API Development",
              description:
                "Designing and implementing robust REST and GraphQL APIs with scalable architecture.",
            },
            {
              icon: ChevronsUp,
              title: "Performance Optimization",
              description:
                "Optimizing applications for speed, efficiency, and scalability across web and mobile platforms.",
            },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <h3>
                  <IconComponent />
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </>
  );
}

export default Work;
