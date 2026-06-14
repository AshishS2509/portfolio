import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { Separator } from "@/components/shared/separator";
import { Badge } from "@/components/shared/badge";
import { Bot, Globe, Layers, SearchCheck, Workflow } from "lucide-react";

const skillsData = {
  title: "What I Work With",
  types: [
    {
      type: "Web & Mobile",
      icon: Globe,
      summary:
        "Custom web and mobile apps that load fast, look sharp, and scale without breaking.",
      tools: [
        "Next.js",
        "React",
        "React Native",
        "React Ionic",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      type: "Backend & APIs",
      icon: Workflow,
      summary:
        "Reliable backend systems — APIs, databases, authentication, payments, and third-party integrations that hold up under load.",
      tools: [
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "MongoDB",
        "Supabase",
        "REST APIs",
      ],
    },
    {
      type: "AI & Automation",
      icon: Bot,
      summary:
        "AI chatbots, intelligent agents, and automated workflows that handle the repetitive work — around the clock, without adding headcount.",
      tools: [
        "Claude API",
        "OpenAI",
        "n8n",
        "RAG",
        "WhatsApp Bots",
        "LLM Integration",
      ],
    },
    {
      type: "SEO & Performance",
      icon: SearchCheck,
      summary:
        "Fast sites that rank. Built right from the start — not patched in later.",
      tools: [
        "Core Web Vitals",
        "Schema Markup",
        "Next.js SSR/SSG",
        "Page Speed",
        "On-page SEO",
      ],
    },
    {
      type: "Infrastructure & Dev",
      icon: Layers,
      summary:
        "Reliable deployments, clean architecture, and systems that don't fail when it matters most.",
      tools: ["Docker", "CI/CD", "Git", "Linux", "Vercel", "Stripe & Razorpay"],
    },
  ],
};

function Skills() {
  return (
    <section aria-labelledby="skills" id="skills" className="max-w-2xl">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="px-0 pb-2">
          <CardTitle className="text-3xl font-semibold tracking-tight">
            {skillsData.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0 space-y-3">
          {skillsData.types.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Card
                key={i}
                className="bg-card border border-border rounded-xl group"
              >
                <CardContent className="p-5">
                  <div className="">
                    {/* Icon column */}
                    <div className="mb-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>

                    {/* Content column */}
                    <div className="flex-1 min-w-0 space-y-3">
                      <div>
                        <h3 className="text-base font-semibold tracking-tight leading-none">
                          {skill.type}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed tracking-wide">
                          {skill.summary}
                        </p>
                      </div>

                      <Separator />

                      <div className="flex flex-wrap gap-1.5">
                        {skill.tools.map((tool) => (
                          <Badge
                            key={tool}
                            variant="secondary"
                            className="text-xs font-medium rounded-md px-2 py-0.5"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
}

export default Skills;
