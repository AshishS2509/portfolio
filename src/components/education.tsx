import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { Separator } from "@/components/shared/separator";
import { Badge } from "@/components/shared/badge";

const educationData = {
  title: "Education",
  education: [
    {
      degree: "B.E in Computer Science",
      university: "Savitribai Phule Pune University",
      duration: "2019 – 2023",
      description:
        "Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering",
      highlights: [
        "Built strong fundamentals in algorithms, data structures, and system design",
        "Hands-on projects in networking, operating systems, and software engineering",
        "Academic foundation that directly informs clean, scalable architecture in production work",
      ],
    },
  ],
};

function Education() {
  return (
    <section aria-labelledby="education" id="education" className="max-w-2xl">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="px-0 pb-2">
          <CardTitle className="text-3xl font-semibold tracking-tight">
            {educationData.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0 space-y-4">
          {educationData.education.map((edu, i) => (
            <Card key={i} className="bg-card border border-border rounded-xl">
              <CardContent className="p-5 space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {edu.university}
                    </p>
                  </div>
                  {edu.duration && (
                    <Badge
                      variant="secondary"
                      className="self-start sm:self-auto shrink-0 text-xs font-medium"
                    >
                      {edu.duration}
                    </Badge>
                  )}
                </div>

                <Separator />

                {/* Coursework */}
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                {edu.highlights?.length > 0 && (
                  <div className="space-y-2 overflow-hidden">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                      Highlights
                    </span>
                    <ul className="space-y-0">
                      {edu.highlights.map((point, j) => (
                        <li key={j}>
                          <div className="flex items-center gap-3 py-2">
                            <Badge
                              variant="outline"
                              className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[0.6rem] font-semibold shrink-0 border-muted-foreground/40 text-muted-foreground"
                            >
                              {j + 1}
                            </Badge>
                            <span className="text-xs font-light text-foreground/70 tracking-wide">
                              {point}
                            </span>
                          </div>
                          {j < edu.highlights.length - 1 && (
                            <Separator className="ml-8" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

export default Education;
