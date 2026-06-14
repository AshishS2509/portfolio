import { Card, CardContent } from "@/components/shared/card";
import { Quote } from "lucide-react";

const testimonialsData = {
  title: "What Clients Say",
  subtitle: "Straight from the business owners I've worked with",
  testimonials: [
    {
      name: "Ajay Kasar",
      role: "Founder, Trambakraj Tours and Travels",
      text: "Working with Ashish was a great experience. He understood our business, created a clean and professional website, and delivered exactly what we needed. The website has helped us present our services more effectively and build trust with potential customers.",
    },
  ],
};

export default function Testimonials() {
  const isEmpty = testimonialsData.testimonials.length === 0;

  return (
    <section
      aria-labelledby="testimonials"
      id="testimonials"
      className="max-w-2xl"
    >
      <div className="px-5 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            {testimonialsData.subtitle}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            {testimonialsData.title}
          </h2>
        </div>

        {/* Empty state */}
        {isEmpty ? (
          <div className="border border-dashed border-border rounded-xl py-16 text-center">
            <p className="text-muted-foreground text-sm">
              Testimonials coming soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {testimonialsData.testimonials.map((t, i) => (
              <Card
                key={i}
                className="bg-card border border-border rounded-xl hover:border-muted-foreground/30 transition-colors"
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  {/* Quote icon */}
                  <Quote className="w-5 h-5 text-muted-foreground/40" />

                  {/* Text */}
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {t.text}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
