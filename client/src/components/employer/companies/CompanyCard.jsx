import React from "react";
import { SlLocationPin } from "react-icons/sl";

export default function CompanyCard({ name, image, category, location, no }) {
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center md:px-10 p-3 border border-primary shadow-md rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div>
          <img src={image}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{name}</h1>
          <div className="flex gap-5 text-sm">
            <p className="text-hover">{category}</p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              {location}
            </p>
          </div>
          <div className="">
            <div className="px-2 py-2 text-xs bg-background2 text-center text-gray-500 rounded-lg">
              open positions: {no}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 md:mt-0">
        <button className="px-3 py-3 bg-primary hover:bg-ascent hover:text-secondary rounded-lg">
          View Company
        </button>
      </div>
    </div>
  );
}
