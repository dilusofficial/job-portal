import React from "react";
import { IoCashOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { professionalSkills } from "../../../../utils/skills";
import { BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HeaderPart() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between bg-background2 items-center md:px-10 p-3  rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div>
          <img src={"/user-1.png"}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{"Darlene Johnson"}</h1>
          <p className="text-hover">{"UI Developer"}</p>
          <div className="flex md:flex-row flex-col gap-5 text-sm">
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              London, UK
              {""}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <IoCashOutline />
              </span>
              5.5 CTC
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsClockHistory />
              </span>
              Member since, Aug 14 2017
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {professionalSkills.slice(0, 3).map((item) => (
              <div
                className="px-2 py-2 text-xs text-center text-blue-500 bg-blue-100 rounded-lg"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-0">
        <Link
          to={"/employer/candidates"}
          className="px-3 py-3 bg-ascent hover:bg-hover text-secondary rounded-lg mr-2"
        >
          Back
        </Link>
        <button
          to={`/employer/candidates/${""}`}
          className="px-3 py-3 bg-ascent hover:bg-hover text-secondary rounded-lg"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
