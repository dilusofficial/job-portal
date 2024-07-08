import React from "react";
import { IoCashOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function JSDashJobCard({
  image,
  jobTitle,
  company,
  salary,
  location,
  skills,
  jobId,
}) {
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center md:px-10 p-3 border border-primary shadow-md rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={image}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{jobTitle}</h1>
          <div className="flex gap-5 text-sm">
            <p className="text-hover">{company}</p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {location}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <IoCashOutline />
              </span>
              {salary} CTC
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {skills.slice(0, 3).map((item) => (
              <div
                className="px-2 py-2 text-xs bg-primary text-center text-gray-500 rounded-lg"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex gap-3 justify-between">
            <Link
              to={`/jobseeker/jobs/${jobId}`}
              className="text-blue-700 bg-blue-100 hover:bg-blue-200 p-2 rounded-xl"
            >
              View
            </Link>

            <button className="text-red-700 bg-red-100 hover:bg-red-200 p-2 rounded-xl">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
