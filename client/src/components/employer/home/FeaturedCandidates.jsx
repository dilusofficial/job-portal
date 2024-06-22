import React from "react";
import { featuredCandidates } from "../../../utils/featuredcandidates";
import CandidateCard from "./CandidateCard";

export default function FeaturedCandidates() {
  return (
    <section className="minusheight bg-background2 rounded-lg mt-2 flex flex-col justify-center px-4">
      <div className="text-center my-5 mb-7">
        <h1 className="lg:text-3xl text-xl my-2">Featured Candidates</h1>
        <p className=" my-2">Here are some of our top candidates</p>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 place-content-between gap-5">
        {featuredCandidates.map((item) => (
          <div key={item.image}>
            <CandidateCard
              name={item.name}
              location={item.location}
              image={item.image}
              position={item.position}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
