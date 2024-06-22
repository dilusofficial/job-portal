import React from "react";
import { SlLocationPin } from "react-icons/sl";

export default function CandidateCard({ name, position, location, image }) {
  return (
    <div className="flex flex-col gap-2 items-center border my-2 border-background1 rounded-md shadow-md nav-link p-8 hover:my-0">
      <div>
        <img src={image}></img>
      </div>
      <h1 className="text-xl">{name}</h1>
      <p className="text-lg">{position}</p>
      <p className="flex gap-2 items-center text-sm font-thin">
        <span>
          <SlLocationPin />
        </span>
        {location}
      </p>
      <button className="px-3 py-3 bg-primary hover:bg-ascent hover:text-secondary rounded-lg">
        View Profile
      </button>
    </div>
  );
}
