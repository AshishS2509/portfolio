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
        "Every successful project starts with understanding the problem. Before any development begins, I work closely with you to understand your business, identify bottlenecks, evaluate opportunities, and design a practical technology solution that makes sense for your goals and budget.",
      outcomes: [
        "Clear project scope and roadmap",
        "Technology recommendations based on business needs",
        "Reduced risk of costly changes later",
      ],
      deliverables: [
        "Business analysis",
        "Solution architecture",
        "Project planning",
      ],
      bestFor:
        "Business owners, founders, and teams who know the problem but need clarity on the right solution.",
    },

    {
      icon: Globe,
      title: "Custom Web & Mobile Applications",
      description:
        "I build custom web platforms, business systems, customer portals, dashboards, and mobile applications from the ground up. The focus is always on performance, scalability, usability, and long-term maintainability—not just getting something online quickly.",
      outcomes: [
        "Responsive experience across all devices",
        "Production-ready architecture from day one",
        "Scalable foundation for future growth",
      ],
      deliverables: [
        "Frontend & backend development",
        "Database design",
        "Deployment and support",
      ],
      bestFor:
        "Businesses and startups that need a tailored product instead of an off-the-shelf solution.",
    },

    {
      icon: Bot,
      title: "AI Agents & Intelligent Chatbots",
      description:
        "Custom AI assistants powered by modern LLMs such as GPT and Claude. These systems can answer customer questions, qualify leads, assist employees, retrieve business information, and automate repetitive workflows while remaining aligned with your business processes.",
      outcomes: [
        "24/7 automated customer assistance",
        "Lead qualification without manual effort",
        "Reduced workload for support teams",
      ],
      deliverables: [
        "Custom AI assistant development",
        "Knowledge base integration",
        "Website and platform integration",
      ],
      bestFor:
        "Businesses receiving frequent inquiries or looking to automate customer interactions.",
    },

    {
      icon: MessageCircle,
      title: "WhatsApp Automation & Conversational Workflows",
      description:
        "Meet customers where they already communicate. I create automated WhatsApp systems for bookings, inquiries, support, lead capture, reminders, follow-ups, and notifications using Meta Cloud API and other reliable integrations.",
      outcomes: [
        "Instant responses to customer messages",
        "Automated booking and inquiry flows",
        "Higher engagement through familiar channels",
      ],
      deliverables: [
        "Conversation flow design",
        "WhatsApp API setup",
        "CRM and system integrations",
      ],
      bestFor:
        "Businesses that rely heavily on WhatsApp for customer communication.",
    },

    {
      icon: SearchCheck,
      title: "SEO & Website Performance Optimization",
      description:
        "A great website is useless if nobody finds it. I optimize websites for search engines and users by improving technical SEO, page speed, structured data, content structure, and overall site performance.",
      outcomes: [
        "Improved visibility on Google",
        "Faster loading websites",
        "Better user experience and engagement",
      ],
      deliverables: [
        "Technical SEO audit",
        "Core Web Vitals improvements",
        "Structured data implementation",
      ],
      bestFor:
        "Businesses with an existing website that needs more traffic, visibility, and performance.",
    },

    {
      icon: Workflow,
      title: "API Integrations & Business Automation",
      description:
        "Many businesses waste time moving data between disconnected tools. I connect your applications, CRMs, payment gateways, maps, email platforms, calendars, and internal systems so information flows automatically where it needs to go.",
      outcomes: [
        "Less manual data entry",
        "Fewer operational errors",
        "Automated business workflows",
      ],
      deliverables: [
        "Third-party integrations",
        "Webhook implementation",
        "Monitoring and error handling",
      ],
      bestFor:
        "Businesses looking to streamline operations and connect existing software.",
    },

    {
      icon: Layers,
      title: "SaaS Platforms & Multi-Tenant Systems",
      description:
        "I design and develop scalable SaaS products that support multiple customers from a single platform. Features commonly include subscriptions, billing, role-based access, analytics, and administration tools designed for long-term growth.",
      outcomes: [
        "Scalable architecture for multiple customers",
        "Automated subscriptions and billing",
        "Secure tenant data separation",
      ],
      deliverables: [
        "Multi-tenant architecture",
        "Admin dashboards",
        "Subscription management",
      ],
      bestFor:
        "Businesses building software products or launching a SaaS offering.",
    },

    {
      icon: ChevronsUp,
      title: "Rapid MVP Development",
      description:
        "For founders who need to validate an idea quickly. I focus on building only the essential features required to launch, gather feedback, and prove market demand before investing in a larger product.",
      outcomes: [
        "Faster time to market",
        "Reduced development costs",
        "Real user feedback sooner",
      ],
      deliverables: [
        "MVP planning",
        "Core feature development",
        "Launch-ready deployment",
      ],
      bestFor: "Startups and founders testing a new idea or business model.",
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
