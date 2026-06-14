import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/accordion";

const faqData = {
  title: "Common Questions",
  subtitle: "The questions most clients ask before we start working together",
  faqs: [
    {
      question: "Do you only build websites?",
      answer:
        "Not at all. I build web apps, mobile apps, AI chatbots, WhatsApp automation systems, and handle API integrations and SEO. Most projects I take on combine several of these — because a business rarely has just one isolated problem to solve.",
    },
    {
      question: "How do we start?",
      answer:
        "Book a discovery call or send me a quick email describing what you're trying to solve. I'll ask a few focused questions, then put together a clear scope and quote for you — no commitment required to have that first conversation.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Depends on what you're building. A WhatsApp automation setup or AI chatbot typically takes 1–2 weeks. A full web app or SaaS platform takes 3–8 weeks. I give you a specific, realistic timeline in the proposal before any work begins — and I stick to it.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes. I work fully remotely with clients across India and internationally. Most projects run smoothly over WhatsApp, email, and video calls — timezone differences haven't been an issue.",
    },
    {
      question: "What if I don't know exactly what I need?",
      answer:
        "That's exactly what the discovery and consulting service is for. Many clients come in knowing something needs to change but aren't sure what to build. I help you define the right scope, avoid expensive mistakes, and get clarity on the solution before spending anything on development.",
    },
    {
      question: "Will I own the code after the project?",
      answer:
        "Yes — completely. Once the project is paid for, everything is yours: the full source code, design files, deployment configurations, and all documentation. No vendor lock-in, no ongoing licensing fees, no strings attached.",
    },
  ],
};

export default function FAQ() {
  return (
    <section className="max-w-2xl">
      <div className="px-5 mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            {faqData.subtitle}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {faqData.title}
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-1">
          {faqData.faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border! border-border rounded-lg px-5 data-[state=open]:border-muted-foreground/30 transition-colors"
            >
              <AccordionTrigger className="text-sm font-medium text-left py-4 hover:no-underline hover:text-foreground transition-colors ">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <p className="text-sm text-muted-foreground mt-8">
          Still have a question?{" "}
          <a
            href="mailto:ashish.solanki.2509@gmail.com"
            className="text-foreground underline underline-offset-4 hover:text-foreground/70 transition-colors"
          >
            Just send me a message.
          </a>
        </p>
      </div>
    </section>
  );
}
