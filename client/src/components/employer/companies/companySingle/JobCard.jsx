import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";

export default function JobCard({
  image,
  name,
  category,
  joblocation,
  jobtype,
  salary,
  open,
}) {
  return (
    <div className="flex md:flex-row flex-col md:justify-between bg-background1 items-center md:px-10 p-3 rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div>
          <img src={image}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{name}</h1>
          <div className="flex gap-5 text-sm">
            <p className="text-hover flex gap-2 items-center">
              <span>
                <FaRegBuilding />
              </span>
              {category}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {joblocation}
            </p>
          </div>
          <div className="flex gap-5 text-sm">
            <p className="text-gray-500 flex gap-2 items-center">{jobtype}</p>
            <p className="flex gap-2 items-center text-gray-500">
              {`${salary} CTC`}
            </p>
            <p className="text-gray-500 flex gap-2 items-center">
              {open} Open Positions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
