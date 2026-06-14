import { Card, CardContent } from "./shared/card";
import { Button } from "./shared/button";
import Icons, { TIconNames } from "./shared/Icons";
import { Download, MapPin, Clock, Laptop, Languages } from "lucide-react";
import { Badge } from "@/components/shared/badge";
import { Separator } from "@/components/shared/separator";

const profileData = {
  name: "Ashish Solanki",
  title: "Tech Consultant & Full Stack Developer",
  tagline: "I understand your business first. Then I build the solution.",
  badge: "Available for Freelance",
  availability: {
    status: "Available for freelance",
    badge: "Open to work",
  },
  socials: [
    {
      name: "linkedIn",
      href: "https://www.linkedin.com/in/solanki-ashish/",
    },
    { name: "github", href: "https://github.com/AshishS2509" },
    { name: "x", href: "https://x.com/Ashish_2509_" },
  ],
  email: "ashish.solanki.2509@gmail.com",
  cv: {
    href: "https://drive.google.com/file/d/1JzJV3CeyQJLl92njdUsi14ZVWwMF-z6E/view?usp=sharing",
    buttonText: "Download CV",
  },
  cta: {
    text: "Let's Work Together",
    href: "mailto:ashish.solanki.2509@gmail.com",
  },
  quickFacts: [
    { label: "Based in", value: "India", icon: MapPin },
    { label: "Available", value: "Immediately", icon: Clock },
    { label: "Preferred work", value: "Remote / Freelance", icon: Laptop },
    { label: "Languages", value: "English, Hindi, Marathi", icon: Languages },
  ],
};

function Profile() {
  return (
    <Card className="sticky top-32">
      <CardContent className="p-5 space-y-5">
        {/* Identity block */}
        <div className="flex flex-col items-center text-center gap-3 pt-1">
          <div className="space-y-1">
            <h1 className="text-xl font-bold tracking-tight leading-tight">
              {profileData.name}
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              {profileData.title}
            </p>
          </div>

          <Badge variant="secondary" className="text-xs font-medium">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
            {profileData.availability.badge}
          </Badge>

          <p className="text-xs text-muted-foreground/80 italic leading-relaxed px-2 max-w-56">
            "{profileData.tagline}"
          </p>
        </div>

        <Separator />

        {/* Social links */}
        <nav
          aria-label="Social links"
          className="flex items-center justify-center gap-3"
        >
          {profileData.socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
            >
              <Button variant="outline" size="icon">
                <Icons name={social.name as TIconNames} />
              </Button>
            </a>
          ))}
        </nav>

        <Separator />

        {/* Quick facts */}
        <ul className="space-y-0">
          {profileData.quickFacts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <li key={i}>
                <div className="flex items-center gap-3 py-2">
                  <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                  <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-muted-foreground w-26 shrink-0">
                    {fact.label}
                  </span>
                  <span className="text-xs text-foreground/80 leading-snug">
                    {fact.value}
                  </span>
                </div>
                {i < profileData.quickFacts.length - 1 && (
                  <Separator className="ml-0" />
                )}
              </li>
            );
          })}
        </ul>

        <Separator />

        {/* Contact + CV */}
        <div className="space-y-2.5">
          <address className="not-italic text-center space-y-0.5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
              Email
            </p>
            <a
              className="text-sm text-primary hover:underline underline-offset-2 break-all"
              href={`mailto:${profileData.email}`}
            >
              {profileData.email}
            </a>
          </address>

          <div className="flex flex-col gap-2 pt-1">
            <a
              href={profileData.cv.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full" variant="default">
                <Download className="h-4 w-4" />
                {profileData.cv.buttonText}
              </Button>
            </a>
            <a href={profileData.cta.href} className="w-full">
              <Button className="w-full" variant="outline">
                {profileData.cta.text}
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Profile;
