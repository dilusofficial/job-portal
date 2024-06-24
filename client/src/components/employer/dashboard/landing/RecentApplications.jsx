import React from "react";
import { candidatesList } from "../../../../utils/candidateListingdata";
import CandidateCard from "../CandidateCard";

export default function RecentApplications() {
  return (
    <div className="bg-background2 p-3 rounded-lg my-4">
      <h1 className="text-xl my-3">Recent Applications</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {candidatesList.slice(0, 6).map((item) => (
          <CandidateCard
            key={item.id}
            name={item.fullname}
            image={item.image}
            location={item.location}
            currentCTC={item.currentCTC}
            position={item.jobrole}
          />
        ))}
      </div>
    </div>
  );
}
