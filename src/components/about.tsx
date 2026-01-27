import { CardTitle, CardContent } from "./shared/card";

const aboutData = {
  title: "About",
  paraOne:
    "I'm a solution-oriented software engineer focused on building clean, scalable, and reliable web applications. I approach development by first understanding the problem, then designing practical and maintainable solutions that balance performance, clarity, and long-term usability.",
  paraTwo:
    "With experience in both startup and structured IT environments, I'm comfortable taking ownership, working end-to-end across the stack, and collaborating closely with others to ship high-quality software. I value clean architecture, well-designed APIs, and thoughtful database design, and I'm always looking to improve systems rather than just make them “work”.",
  paraThree:
    "I enjoy tackling complex requirements, refining existing systems, and continuously learning better ways to build software.",
};

function About() {
  return (
    <section aria-labelledby="about" id="about">
      <CardTitle>
        <h2>{aboutData.title}</h2>
      </CardTitle>

      <CardContent className="text-justify">
        <div className="space-y-4">
          <p className="indent-4">{aboutData.paraOne}</p>
          <p className="indent-4">{aboutData.paraTwo}</p>
          <p className="indent-4">{aboutData.paraThree}</p>
        </div>
      </CardContent>
    </section>
  );
}

export default About;
