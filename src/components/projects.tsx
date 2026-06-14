import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { Separator } from "@/components/shared/separator";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { ExternalLink } from "lucide-react";
import trambakraj from "@/assets/projects/trambakraj.png";
import tollCalculator from "@/assets/projects/toll-calculator.png";
import Image from "next/image";

const projectsData = {
  title: "Projects",
  projects: [
    {
      image: trambakraj,
      title: "Trambakraj Travels — Tour & Booking Platform",
      description:
        "Full-stack travel booking platform built for a live tour operator business. Includes destination listings, detailed itinerary pages, a WhatsApp-integrated inquiry flow, and a self-serve admin panel that lets the business owner manage packages and leads without touching a developer. Built with Next.js, Tailwind CSS, and Supabase.",
      link: "https://trambakrajtoursandtravels.com",
      tags: ["Next.js", "Tailwind CSS", "Supabase", "WhatsApp API"],
      type: "Freelance Project",
      highlights: [
        "WhatsApp inquiry automation cut manual follow-up time significantly — inquiries get handled even when the client is unavailable",
        "Self-serve admin panel gives the owner full control over packages and leads with no developer dependency",
        "SEO-optimised destination and itinerary pages designed to capture organic search traffic",
      ],
      status: "Live",
    },
    {
      image: tollCalculator,
      title: "Toll Calculator — React & Map Based Routing App",
      description:
        "React web app for route-based toll cost estimation using Toll Guru API. Features interactive map routing via MapTiler with polyline rendering, providing a full breakdown of toll costs, travel time, fuel usage, and distance — with multiple waypoint support for complex route planning.",
      link: "https://tolls-super.vercel.app/",
      tags: ["React.js", "Toll Guru API", "MapTiler"],
      type: "Personal Project",
      highlights: [
        "Real-time route calculation with a live, itemised toll cost breakdown",
        "Multiple waypoint support for complex, multi-stop route planning",
        "Clear visual polyline mapping so routes are easy to review at a glance",
      ],
      status: "Live",
    },
  ],
};

function Projects() {
  return (
    <section aria-labelledby="projects" id="projects" className="max-w-2xl">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="px-0 pb-2">
          <CardTitle className="text-3xl font-semibold tracking-tight">
            {projectsData.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0 space-y-4">
          {projectsData.projects.map((project, i) => (
            <Card key={i} className="bg-card border border-border rounded-xl">
              <CardContent className="p-5 space-y-4">
                {/* Header row */}
                {project.image && (
                  <div className="relative w-full aspect-video overflow-hidden rounded-md border shadow-sm bg-zinc-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      quality={85}
                      className="object-cover select-none"
                      draggable={false}
                    />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      {project.type}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="self-start shrink-0 text-xs font-medium"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
                    {project.status}
                  </Badge>
                </div>
                <Separator />
                {/* Description */}
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
                {/* Highlights */}
                {project.highlights?.length > 0 && (
                  <div className="space-y-2 overflow-hidden">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                      Highlights
                    </span>
                    <ul className="space-y-0">
                      {project.highlights.map((point, j) => (
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
                          {j < project.highlights.length - 1 && (
                            <Separator className="ml-8" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Footer: tags + link */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, k) => (
                      <Badge
                        key={k}
                        variant="outline"
                        className="text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1.5 text-xs h-8 px-3"
                      >
                        View Project
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

export default Projects;
