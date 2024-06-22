import React from "react";

export default function CompanyCard({ name, location, image, position }) {
  return (
    <div className="flex gap-2 justify-between items-center border my-2 border-background1 rounded-md shadow-md nav-link p-8 hover:m-0">
      <div className="flex gap-3 items-center">
        <div>
          <img src={image}></img>
        </div>
        <div>
          <h1 className="text-lg">{name}</h1>
          <p className="text-base">{`${position} open position`}</p>
          <p className="flex gap-2 items-center text-xs font-thin">
            {location}
          </p>
        </div>
      </div>

      <button className="px-3 py-3 bg-primary hover:bg-ascent hover:text-secondary rounded-lg">
        View Company
      </button>
    </div>
  );
}
