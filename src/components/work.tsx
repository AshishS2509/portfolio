import { useId } from "react";
import { CardContent, CardTitle } from "./shared/card";
import { ChevronsUp, Globe, MonitorSmartphone, Workflow } from "lucide-react";

const workData = {
  title: "What I Do !",
  cards: [
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
  ],
};

function Work() {
  return (
    <section aria-labelledby="work" id="work">
      <CardTitle>
        <h2>{workData.title}</h2>
      </CardTitle>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {workData.cards.map((item) => {
            const IconComponent = item.icon;

            return (
              <article
                key={useId()}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <header>
                  <h3 className="flex items-center gap-2">
                    <IconComponent aria-hidden="true" />
                    {item.title}
                  </h3>
                </header>

                <p className="text-sm">{item.description}</p>
              </article>
            );
          })}
        </div>
      </CardContent>
    </section>
  );
}

export default Work;
