import React from "react";
import { CardContent, CardTitle } from "./shared/card";

function Education() {
  return (
    <>
      <CardTitle>
        <h2>Education</h2>
      </CardTitle>
      <CardContent>
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h3>B.E in Computer Science</h3>
            <p className="text-sm">Savitribai Phule Pune University</p>
            <p className="text-sm ">
              <span className="font-medium">Relevant Coursework:</span> Data
              Structures & Algorithms, Operating Systems, Database Management
              Systems, Computer Networks, Software Engineering
            </p>
          </div>
        </div>
      </CardContent>
    </>
  );
}

export default Education;
