import React from "react";

export default function LandingPageSmallSearch({ icon, title, placeholder }) {
  return (
    <div className="flex flex-col gap-5 w-full xl:w-auto border-b xl:border-e border-ascent border-opacity-10">
      <h1 className="px-3">{title}</h1>
      <div className="flex gap-2 justify-start items-center">
        <input
          className="w-full py-1 px-3 rounded bg-background1 text-gray-900 h-9"
          placeholder={placeholder}
        ></input>
        <div className="text-3xl me-5">{icon}</div>
      </div>
    </div>
  );
}
