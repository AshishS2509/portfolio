import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import { Card, CardContent, CardTitle } from "@/components/shared/card";
import Skills from "@/components/skills";
import Work from "@/components/work";
import { ChevronsUp, Globe, MonitorSmartphone, Workflow } from "lucide-react";

export default function Home() {
  return (
    <div className="lg:flex lg:flex-row">
      <div className="lg:basis-1/3 lg:p-8">
        <Profile />
      </div>
      <div className="lg:basis-2/3 lg:p-6">
        <Card className="p-4 md:p-8 mt-2 lg:m-2">
          <About />
          <Work />
          <Projects />
          <Experience />
          <Skills />
          <Education />
        </Card>
      </div>
    </div>
  );
}
