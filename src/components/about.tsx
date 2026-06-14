import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { Separator } from "@/components/shared/separator";
import { Badge } from "@/components/shared/badge";

const aboutData = {
  title: "About",
  paraOne:
    "I'm a freelance tech consultant and full-stack developer who helps businesses solve real problems with scalable digital solutions. My work starts before a single line of code — I spend time understanding how your business operates, where the friction is, and what a solution actually needs to do. Then I build it.",
  paraTwo:
    "I work across the full spectrum of modern tech: web and mobile applications, AI chatbots and agents, WhatsApp automation, SEO, API integrations, and SaaS products. Whether you need to automate a manual process, launch a product, or connect the tools your team already uses — I scope it, design it, and ship it end to end.",
  paraThree:
    "I've worked with startups, IT service firms, and business owners who are done with generic solutions. If you have a business problem that needs the right technology behind it, let's talk.",
  highlights: [
    { label: "3+", description: "Years of Experience" },
    { label: "5+", description: "Projects Delivered" },
    { label: "4+", description: "Happy Clients" },
    { label: "Full Stack", description: "Web · Mobile · AI" },
  ],
  approach: [
    "Understand the business problem first",
    "Define a solution before writing any code",
    "Build lean — only what's needed to work",
    "Deliver with documentation and support",
  ],
};

function About() {
  return (
    <section aria-labelledby="about" id="about" className="max-w-2xl">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="px-0 pb-2">
          <CardTitle className="text-3xl font-semibold tracking-tight">
            {aboutData.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0 space-y-8">
          {/* Highlights bar */}
          <div
            role="list"
            aria-label="Key highlights"
            className="grid grid-cols-2 sm:grid-cols-4 border-y border-border py-1"
          >
            {aboutData.highlights.map((h, i) => (
              <div key={i} role="listitem" className="flex">
                <div className="flex flex-col items-center justify-center text-center py-4 flex-1 gap-1">
                  <span className="text-2xl font-bold tracking-tight leading-none">
                    {h.label}
                  </span>
                  <span className="text-[0.65rem] font-medium uppercase tracking-widest text-muted-foreground">
                    {h.description}
                  </span>
                </div>
                {i < aboutData.highlights.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-auto self-stretch hidden sm:block"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-4 text-justify text-sm leading-relaxed text-foreground/85">
            <p className="indent-5">{aboutData.paraOne}</p>
            <p className="indent-5">{aboutData.paraTwo}</p>
            <p className="indent-5">{aboutData.paraThree}</p>
          </div>

          {/* Approach */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                How I Work
              </span>
              <Separator className="flex-1" />
            </div>

            <ul aria-label="My approach" className="space-y-0">
              {aboutData.approach.map((step, i) => (
                <li key={i}>
                  <div className="flex items-center gap-3 py-2.5">
                    <Badge
                      variant="outline"
                      className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[0.6rem] font-semibold shrink-0 border-muted-foreground/40 text-muted-foreground"
                    >
                      {i + 1}
                    </Badge>
                    <span className="text-xs text-foreground/70 font-light leading-loose tracking-wide">
                      {step}
                    </span>
                  </div>
                  {i < aboutData.approach.length - 1 && (
                    <Separator className="ml-8" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default About;
