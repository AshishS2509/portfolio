import { CardTitle, CardContent } from "./shared/card";

function About() {
  return (
    <>
      <CardTitle>
        <h2>About</h2>
      </CardTitle>
      <CardContent className="text-justify">
        <p>
          &ensp; I'm a solution-oriented software engineer focused on building
          clean, scalable, and reliable web applications. I approach development
          by first understanding the problem, then designing practical and
          maintainable solutions that balance performance, clarity, and
          long-term usability.
        </p>
        <p>
          &ensp; With experience in both startup and structured IT environments,
          I'm comfortable taking ownership, working end-to-end across the stack,
          and collaborating closely with others to ship high-quality software. I
          value clean architecture, well-designed APIs, and thoughtful database
          design, and I'm always looking to improve systems rather than just
          make them “work”.
        </p>
        <p>
          &ensp; I enjoy tackling complex requirements, refining existing
          systems, and continuously learning better ways to build software.
        </p>
      </CardContent>
    </>
  );
}

export default About;
