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
    "I'm a freelance tech consultant and full-stack developer based in India, working with businesses that need more than a developer who takes a brief and ships code. Before anything gets built, I map out what your business actually needs — where leads are slipping through, where your team is stuck in manual work, and what the right technology would genuinely fix. Then I build exactly that.",
  paraTwo:
    "My work spans custom web and mobile apps, AI chatbots and agents, WhatsApp automation, SEO, API integrations, and SaaS products. Whether you're trying to automate a slow manual process, launch a new product, or get your existing tools connected and working together — I scope the solution, design it around your constraints, and ship it end to end.",
  paraThree:
    "I've worked with startups, IT service firms, and business owners across India and internationally who are done paying for overbuilt, overpriced technology that doesn't fit how their business actually works. If you have a problem that needs the right technology behind it — not just any technology — let's talk.",
  approach: [
    "Start with your business problem, not the technology",
    "Define the right solution before writing a single line of code",
    "Build lean — ship what works, skip everything that doesn't",
    "Hand over clean code, full documentation, and continued support",
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
          {/* Highlights bar
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
          </div> */}

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
