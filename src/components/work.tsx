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
      title: "Business Consulting & Solution Design",
      description:
        "Before writing code, I learn your business. I map the problem, identify what technology can realistically solve it, and define a scoped plan — so you build the right thing, not just something.",
      outcomes: [
        "Clear project scope before any money is spent",
        "Right tech chosen for the right problem",
        "No surprise pivots mid-build",
      ],
    },
    {
      icon: Globe,
      title: "Web & Mobile Development",
      description:
        "Full-stack web applications and cross-platform mobile apps — built clean, deployed fast, and designed to scale with your business.",
      outcomes: [
        "Production-ready apps from day one",
        "Works on all devices and screen sizes",
        "Built to grow without rewriting",
      ],
    },
    {
      icon: Bot,
      title: "AI Agents & Chatbots",
      description:
        "Custom AI agents and chatbots powered by Claude and GPT that handle support, answer questions, qualify leads, and automate repetitive tasks — running 24/7 without extra headcount.",
      outcomes: [
        "Handles customer queries instantly, any time",
        "Qualifies and captures leads automatically",
        "Frees your team from repetitive conversations",
      ],
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Automation",
      description:
        "Automated WhatsApp flows for bookings, inquiries, order updates, and customer support using Meta Cloud API and Twilio — meeting your customers where they already are.",
      outcomes: [
        "Instant automated replies to customer messages",
        "Booking and inquiry flows without manual work",
        "Broadcast campaigns to your existing contacts",
      ],
    },
    {
      icon: SearchCheck,
      title: "SEO Optimization",
      description:
        "Technical and on-page SEO that gets your site ranking — performance audits, structured data, Core Web Vitals, and content optimization built into the product from day one.",
      outcomes: [
        "Higher rankings on Google search results",
        "Faster page load times that keep users on site",
        "Structured data that improves search visibility",
      ],
    },
    {
      icon: Workflow,
      title: "API Integrations & Automation",
      description:
        "Connect your product to the tools your business runs on — payments, CRMs, maps, email, calendars, and more — through clean, reliable integration work.",
      outcomes: [
        "Eliminate manual data entry between systems",
        "Payments, notifications, and updates automated",
        "Tools your team already uses, connected properly",
      ],
    },
    {
      icon: Layers,
      title: "SaaS & Multi-Tenant Products",
      description:
        "Subscription-based platforms with multi-tenant architecture, billing, role-based access, and admin dashboards — built to serve many clients under one scalable system.",
      outcomes: [
        "One codebase serving unlimited client accounts",
        "Billing and subscriptions handled automatically",
        "Each client sees only their own data",
      ],
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
                  <div className="">
                    {/* Icon */}
                    <div className="mb-2  flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                      <Icon
                        className="h-4 w-4 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-3">
                      <h3 className="text-base font-semibold tracking-tight leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed ">
                        {item.description}
                      </p>

                      <Separator />

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

export default Work;
