import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/accordion";

const faqData = {
  title: "Common Questions",
  subtitle: "Things people usually ask before hiring me",
  faqs: [
    {
      question: "Do you only build websites?",
      answer:
        "No. I build web apps, mobile apps, AI chatbots, WhatsApp bots, and handle API integrations and SEO. Most projects I take on combine several of these — a business rarely just needs 'a website'.",
    },
    {
      question: "How do we start?",
      answer:
        "Book a discovery call or send me an email describing what you're trying to do. I'll ask a few questions, then put together a scope and quote for you — no commitment needed.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Depends on scope. A WhatsApp automation or chatbot can be done in 1–2 weeks. A full web app or SaaS product takes 3–8 weeks. I'll give you a realistic timeline upfront in the proposal.",
    },
    {
      question: "Do you work with clients outside India?",
      answer:
        "Yes. I work remotely with clients anywhere. Most communication happens over WhatsApp, email, or video calls.",
    },
    {
      question: "What if I don't know exactly what I need?",
      answer:
        "That's exactly what the discovery and consulting service is for. I'll help you figure out what to build and what to skip — before spending anything on development.",
    },
    {
      question: "Will I own the code after the project?",
      answer:
        "Yes, completely. Once the project is paid for, you own everything — source code, design files, and all documentation.",
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
