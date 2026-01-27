import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import Skills from "@/components/skills";
import Work from "@/components/work";
import {
  Award,
  BriefcaseBusiness,
  FileBadge,
  FileCodeCorner,
  GraduationCap,
  UserRound,
} from "lucide-react";

export default function Home() {
  return (
    <section className="lg:flex lg:flex-row">
      {/* Profile / Sidebar */}
      <aside className="lg:basis-1/3 lg:p-8">
        <Profile />
      </aside>

      {/* Main Content */}
      <main className="lg:basis-2/3 lg:p-6">
        <nav
          aria-label="Page sections"
          className="mb-4 pr-2 gap-2 justify-end hidden lg:flex"
        >
          <a href="#about" aria-label="About section" title="About">
            <Button type="button" variant="outline" size="icon-lg">
              <UserRound aria-hidden="true" />
            </Button>
          </a>

          <a href="#work" aria-label="Work section" title="Work">
            <Button type="button" variant="outline" size="icon-lg">
              <FileBadge aria-hidden="true" />
            </Button>
          </a>

          <a href="#projects" aria-label="Projects section" title="Projects">
            <Button type="button" variant="outline" size="icon-lg">
              <FileCodeCorner aria-hidden="true" />
            </Button>
          </a>

          <a
            href="#experience"
            aria-label="Experience section"
            title="Experience"
          >
            <Button type="button" variant="outline" size="icon-lg">
              <BriefcaseBusiness aria-hidden="true" />
            </Button>
          </a>

          <a href="#skills" aria-label="Skills section" title="Skills">
            <Button type="button" variant="outline" size="icon-lg">
              <Award aria-hidden="true" />
            </Button>
          </a>

          <a href="#education" aria-label="Education section" title="Education">
            <Button type="button" variant="outline" size="icon-lg">
              <GraduationCap aria-hidden="true" />
            </Button>
          </a>
        </nav>

        <Card className="p-4 md:p-8 mt-2 lg:m-2">
          <About />
          <Work />
          <Projects />
          <Experience />
          <Skills />
          <Education />
        </Card>
      </main>
    </section>
  );
}
