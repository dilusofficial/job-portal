import React from "react";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import LandingPageSmallSearch from "./LandingPageSmallSearch";

export default function LandingSection() {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 minusheight">
      <div className="flex flex-col justify-center items-start gap-3">
        <h1 className="lg:text-5xl text-xl my-2">
          Join us & Explore Thousands of Jobs
        </h1>
        <p className="opacity-40 my-2">
          Find Jobs, Employment and career opportunities.
        </p>
        <div className="flex justify-between items-center gap-5 mt-3 border border-ascent border-opacity-10 shadow-md p-3 rounded-lg">
          <LandingPageSmallSearch
            title={"What"}
            placeholder={"Job Title or Company"}
            icon={<CiSearch />}
          />
          <LandingPageSmallSearch
            title={"Where"}
            placeholder={"City or Postal code"}
            icon={<SlLocationPin />}
          />
          <div>
            <button className="bg-ascent py-5 px-2 text-secondary hover:bg-hover rounded-lg">
              Find Jobs
            </button>
          </div>
        </div>
        <p className="mt-3">
          Popular Searches:{" "}
          <span className=" opacity-40">Designer, developer, Devops....</span>
        </p>
      </div>
      <div className="hidden lg:block">
        <img src="/home-img.png"></img>
      </div>
    </section>
  );
}
