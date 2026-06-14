import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { Separator } from "@/components/shared/separator";
import { Badge } from "@/components/shared/badge";

const experienceData = {
  title: "Experience",
  experience: [
    {
      company: "Freelance",
      role: "Tech Consultant & Full Stack Developer",
      duration: {
        from: "Jan 2026",
        to: "Present",
      },
      description:
        "Consulting with business owners and founders to identify problems, define solutions, and build the right technology for their needs. Delivering across web apps, AI chatbots, WhatsApp automation, SEO, and API integrations — from discovery and scoping through to deployment and support.",
      highlights: [
        "Built a full-stack travel booking platform with WhatsApp inquiry automation",
        "Designed and delivered AI-powered chatbot integrations for client businesses",
        "Provided solution consulting to help clients avoid overbuilt, overpriced tech",
      ],
      tags: ["Consulting", "Next.js", "AI Chatbots", "WhatsApp API", "SEO"],
    },
    {
      company: "PointMatrix IT Services",
      role: "Software Developer",
      duration: {
        from: "Mar 2024",
        to: "Dec 2025",
      },
      description:
        "Developed and maintained scalable web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality solutions while following best practices in software architecture and code design.",
      highlights: [
        "Worked on multi-tenant SaaS architecture serving multiple business clients",
        "Built and maintained REST APIs consumed by web and mobile frontends",
        "Participated in code reviews and introduced cleaner patterns to the codebase",
      ],
      tags: ["Node.js", "React.js", "PostgreSQL", "REST APIs", "Docker"],
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
      highlights: [
        "Delivered mobile-first UI for a consumer-facing product",
        "Optimized API response times and reduced database query overhead",
        "Took ownership of frontend-to-backend feature development end to end",
      ],
      tags: ["React Native", "Express.js", "MongoDB", "UI/UX", "Performance"],
    },
  ],
};

function Experience() {
  return (
    <section aria-labelledby="experience" id="experience" className="max-w-2xl">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="px-0 pb-2">
          <CardTitle className="text-3xl font-semibold tracking-tight">
            {experienceData.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0 space-y-4">
          {experienceData.experience.map((exp, i) => (
            <Card key={i} className="bg-card border border-border rounded-xl">
              <CardContent className="p-5 space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight leading-snug">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="self-start sm:self-auto shrink-0 text-xs font-medium whitespace-nowrap"
                  >
                    <time dateTime={exp.duration.from}>
                      {exp.duration.from}
                    </time>
                    {" – "}
                    <time dateTime={exp.duration.to}>{exp.duration.to}</time>
                  </Badge>
                </div>

                <Separator />

                {/* Description */}
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights?.length > 0 && (
                  <div className="space-y-2 overflow-hidden">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                      Highlights
                    </span>
                    <ul className="space-y-0">
                      {exp.highlights.map((point, j) => (
                        <li key={j}>
                          <div className="flex items-center gap-3 py-2">
                            <Badge
                              variant="outline"
                              className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[0.6rem] font-semibold shrink-0 border-muted-foreground/40 text-muted-foreground"
                            >
                              {j + 1}
                            </Badge>
                            <span className="text-xs text-foreground/70 font-light tracking-wide">
                              {point}
                            </span>
                          </div>
                          {j < exp.highlights.length - 1 && (
                            <Separator className="ml-8" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                {exp.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.tags.map((tag, k) => (
                      <Badge
                        key={k}
                        variant="outline"
                        className="text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
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

export default Experience;
