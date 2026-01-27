import { CardContent, CardTitle } from "./shared/card";

function Experience() {
  return (
    <>
      <CardTitle>
        <h2>Experience</h2>
      </CardTitle>
      <CardContent>
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3>PointMatrix IT Services</h3>
            <p>Software Developer</p>
            <p className="text-xs">Mar 2024 - Dec 2025</p>
            <p className="text-sm">
              Developed and maintained scalable web applications using modern
              technologies. Collaborated with cross-functional teams to deliver
              high-quality solutions while following best practices in software
              architecture and code design.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3>Midnight Studios Pvt Ltd</h3>
            <p>Full Stack Developer</p>
            <p className="text-xs">Oct 2022 - May 2023</p>
            <p className="text-sm">
              Built end-to-end web and mobile applications with focus on
              performance and user experience. Worked on API development,
              database design, and frontend optimization while maintaining
              clean, maintainable code.
            </p>
          </div>
        </div>
      </CardContent>
    </>
  );
}

export default Experience;
