import React from "react";
import { professionalSkills } from "../../../utils/skills";
import { SlLocationPin } from "react-icons/sl";
import { IoCashOutline } from "react-icons/io5";

export default function CandidateCard({
  name,
  position,
  image,
  currentCTC,
  location,
}) {
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center md:px-10 p-3 border border-primary shadow-md rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div>
          <img src={image}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{name}</h1>
          <div className="flex gap-5 text-sm">
            <p className="text-hover">{position}</p>
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
              {currentCTC} CTC
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {professionalSkills.slice(0, 6).map((item) => (
              <div
                className="px-2 py-2 text-xs bg-background1 text-center text-gray-500 rounded-lg"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-between">
            <button className="text-blue-700 bg-blue-100 hover:bg-blue-200 p-2 rounded-xl">
              View
            </button>
            <button className="text-green-700 bg-green-100 hover:bg-green-200 p-2 rounded-xl">
              Approve
            </button>
            <button className="text-yellow-700 bg-yellow-100 hover:bg-yellow-200 p-2 rounded-xl">
              Reject
            </button>
            <button className="text-red-700 bg-red-100 hover:bg-red-200 p-2 rounded-xl">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
