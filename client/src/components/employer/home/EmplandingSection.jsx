import React from "react";
import LandingPageSmallSearch from "../../user/home/LandingPageSmallSearch";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";

export default function EmplandingSection() {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 minusheight bg-background1 rounded-lg">
      <div className="flex flex-col justify-center items-start gap-3 px-6">
        <h1 className="lg:text-5xl text-xl my-2">Find Your ideal Candidate.</h1>
        <p className=" my-2">Find the ideal candidates for your company</p>
        <div className="flex justify-between items-center gap-5 mt-3 border border-ascent border-opacity-10 shadow-md p-3 rounded-lg">
          <LandingPageSmallSearch
            title={"What"}
            placeholder={"Job Title or skills"}
            icon={<CiSearch />}
          />
          <LandingPageSmallSearch
            title={"Where"}
            placeholder={"City or Postal code"}
            icon={<SlLocationPin />}
          />
          <div>
            <button className="bg-ascent py-5 px-2 text-secondary hover:bg-hover rounded-lg">
              Find Candidates
            </button>
          </div>
        </div>
        <p className="mt-3">
          Popular Searches:{" "}
          <span className=" ">Designer, developer, Devops....</span>
        </p>
      </div>
      <div className="hidden lg:block overflow-hidden place-content-center">
        <img src="/employers-1.png" className="w-4/5"></img>
      </div>
    </section>
  );
}
