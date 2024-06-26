import React from "react";
import { professionalSkills } from "../../../../utils/skills";

export default function Skills() {
  return (
    <div className="flex flex-col gap-5 my-5 w-full">
      <h1 className="text-xl">Skills</h1>
      <div className="grid grid-cols-2 gap-2">
        {professionalSkills.slice(0, 6).map((item) => (
          <div
            className="px-2 py-2 text-xs bg-background2 text-center text-gray-500 rounded-lg"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
