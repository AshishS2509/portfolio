import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import { Separator } from "@/components/shared/separator";
import { Badge } from "@/components/shared/badge";
import {
  Bot,
  ChevronsUp,
  Globe,
  Layers,
  Lightbulb,
  MessageCircle,
  SearchCheck,
  Workflow,
} from "lucide-react";

const workData = {
  title: "What I Do",
  cards: [
    {
      icon: Lightbulb,
      title: "Discovery, Consulting & Solution Design",
      description:
        "Most projects fail because people jump to building before they understand the problem. I work with you first — mapping your operations, identifying where leads and time are being lost, and designing a practical technology solution that fits your actual goals and budget. No overselling. No unnecessary complexity.",
      outcomes: [
        "A clear, agreed scope with no hidden surprises",
        "Technology recommendations tied directly to your goals and budget",
        "Fewer costly mid-project changes and scope surprises down the line",
      ],
      deliverables: [
        "Business analysis",
        "Solution architecture",
        "Project planning",
      ],
      bestFor:
        "Business owners, founders, and teams who know something needs to change but aren't sure what to build — or where to start.",
    },

    {
      icon: Globe,
      title: "Custom Web & Mobile Applications",
      description:
        "Off-the-shelf tools create workarounds. Custom-built applications are designed around your exact workflows, customer journey, and business logic. I build web platforms, business systems, customer portals, dashboards, and mobile apps from scratch — optimised for performance, scalability, and long-term maintainability.",
      outcomes: [
        "Fast, responsive experience across every device",
        "Production-grade architecture built from day one — not retrofitted later",
        "A codebase that scales as your business grows without needing a full rebuild",
      ],
      deliverables: [
        "Frontend & backend development",
        "Database design",
        "Deployment and support",
      ],
      bestFor:
        "Startups, growing businesses, and founders who need a product built around their exact requirements — not adapted from a template.",
    },

    {
      icon: Bot,
      title: "AI Agents & Intelligent Chatbots",
      description:
        "Stop letting leads go cold waiting for a reply. I build custom AI assistants powered by modern LLMs — GPT and Claude — that answer customer questions, qualify leads, surface business knowledge, and handle repetitive workflows around the clock, without adding headcount.",
      outcomes: [
        "24/7 customer support and lead handling without additional staff",
        "Instant lead qualification and follow-up — no manual effort required",
        "Your team focuses on complex work; the AI handles the rest",
      ],
      deliverables: [
        "Custom AI assistant development",
        "Knowledge base integration",
        "Website and platform integration",
      ],
      bestFor:
        "Businesses drowning in repetitive inquiries, missing leads after hours, or looking to automate customer interactions at scale.",
    },

    {
      icon: MessageCircle,
      title: "WhatsApp Automation & Conversational Workflows",
      description:
        "Your customers are already on WhatsApp. I build automated conversation systems that handle bookings, inquiries, lead capture, reminders, follow-ups, and support notifications using Meta Cloud API — so every message gets a response, even when you're unavailable.",
      outcomes: [
        "Instant, automated replies to every incoming WhatsApp message",
        "Automated booking and inquiry flows that work 24/7 without intervention",
        "Higher engagement through the channel your customers already prefer",
      ],
      deliverables: [
        "Conversation flow design",
        "WhatsApp API setup",
        "CRM and system integrations",
      ],
      bestFor:
        "Service businesses, travel operators, clinics, real estate agents, and anyone whose customers reach out on WhatsApp daily.",
    },

    {
      icon: SearchCheck,
      title: "SEO & Website Performance Optimization",
      description:
        "Ranking on Google isn't about tricks — it's about building sites correctly. I audit and optimise for technical SEO, Core Web Vitals, structured data, content architecture, and page speed so your site earns consistent organic traffic instead of depending entirely on paid ads.",
      outcomes: [
        "Higher Google rankings for the terms your customers are actively searching",
        "Faster loading pages that reduce bounce rates and improve engagement",
        "Better user experience that converts more visitors into real leads",
      ],
      deliverables: [
        "Technical SEO audit",
        "Core Web Vitals improvements",
        "Structured data implementation",
      ],
      bestFor:
        "Businesses with a website that's getting traffic but not ranking — or ranking but not converting visitors into leads.",
    },

    {
      icon: Workflow,
      title: "API Integrations & Business Automation",
      description:
        "Disconnected tools create duplicate work, data errors, and costly delays. I connect your CRM, payment gateways, email platforms, calendars, internal databases, and third-party services so information flows automatically — and your team stops manually bridging the gaps.",
      outcomes: [
        "Less manual data entry and fewer operational errors across systems",
        "Automated workflows that trigger and update without human intervention",
        "More time for your team to focus on work that actually drives revenue",
      ],
      deliverables: [
        "Third-party integrations",
        "Webhook implementation",
        "Monitoring and error handling",
      ],
      bestFor:
        "Operations-heavy businesses spending too much time on manual data entry, system exports, and cross-platform updates.",
    },

    {
      icon: Layers,
      title: "SaaS Platforms & Multi-Tenant Systems",
      description:
        "Building a SaaS product is different from building a website. I design and develop scalable multi-tenant platforms with everything a software business needs from day one — subscription billing, role-based access, admin tooling, tenant data isolation, and architecture built to grow with your customer base.",
      outcomes: [
        "Scalable multi-tenant architecture that handles many customers from one platform",
        "Automated subscription billing and plan management from launch",
        "Secure, isolated tenant data with no risk of cross-account exposure",
      ],
      deliverables: [
        "Multi-tenant architecture",
        "Admin dashboards",
        "Subscription management",
      ],
      bestFor:
        "Founders and businesses ready to build a recurring-revenue software product and launch it the right way.",
    },

    {
      icon: ChevronsUp,
      title: "Rapid MVP Development",
      description:
        "Most MVPs fail because they're built like full products. I strip the scope down to only the features needed to prove market demand — ship it fast, get it in front of real users, and help you decide whether to build more, pivot, or stop before betting your full budget on the wrong idea.",
      outcomes: [
        "A working product in market faster and at lower upfront cost",
        "Real user feedback before committing to full-scale development spend",
        "A clear, informed path forward — build more, pivot, or stop with confidence",
      ],
      deliverables: [
        "MVP planning",
        "Core feature development",
        "Launch-ready deployment",
      ],
      bestFor:
        "Startups and founders who need to validate a new idea or business model before committing to a full build.",
    },
  ],
};

function Work() {
  return (
    <section aria-labelledby="work" id="work" className="max-w-2xl">
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="px-0 pb-2">
          <CardTitle className="text-3xl font-semibold tracking-tight">
            {workData.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0 space-y-3">
          {workData.cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="bg-card border border-border rounded-xl">
                <CardContent className="px-5">
                  <div className="flex-1 min-w-0 space-y-4">
                    <h3 className="text-base font-semibold tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    <Separator />

                    {/* Outcomes */}
                    <div className="space-y-2 overflow-hidden">
                      <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                        Outcomes
                      </span>

                      <ul className="space-y-0">
                        {item.outcomes.map((outcome, j) => (
                          <li key={j}>
                            <div className="flex items-center gap-3 py-2">
                              <Badge
                                variant="outline"
                                className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-[0.6rem] font-semibold shrink-0 border-muted-foreground/40 text-muted-foreground"
                              >
                                {j + 1}
                              </Badge>

                              <span className="text-xs font-light text-foreground/70 leading-snug tracking-wide">
                                {outcome}
                              </span>
                            </div>

                            {j < item.outcomes.length - 1 && (
                              <Separator className="ml-8 w-full" />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    {item.deliverables?.length > 0 && (
                      <>
                        <Separator />

                        <div className="flex flex-col space-y-2">
                          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                            Deliverables
                          </span>

                          <div className="flex flex-wrap gap-2">
                            {item.deliverables.map((deliverable, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="font-normal"
                              >
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Best For */}
                    {item.bestFor && (
                      <>
                        <Separator />

                        <div className="space-y-2">
                          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                            Best For
                          </span>

                          <div className="rounded-lg border border-border bg-muted/40 p-3">
                            <p className="text-xs leading-relaxed text-muted-foreground">
                              {item.bestFor}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
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

export default Work;
