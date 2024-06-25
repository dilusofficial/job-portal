import React from "react";
import CandidateCard from "./CandidateCard";
import { candidatesList } from "../../../utils/candidateListingdata";
import Pagination from "../../Pagination";

export default function CandidateList() {
  return (
    <div className="flex flex-col gap-5">
      <select className="py-1 px-3 xl:w-1/6 lg:w-1/4 w-1/2 h-10 rounded-lg bg-gray-50 border border-gray-300 text-gray-400">
        <option value={""}>Sort by (Default)</option>
        <option value={"newer"}>Newer</option>
        <option value={"older"}>Older</option>
      </select>
      {candidatesList.slice(0, 10).map((item) => (
        <CandidateCard
          key={item.id}
          image={item.image}
          name={item.fullname}
          position={item.jobrole}
          location={item.location}
          currentCTC={item.currentCTC}
          id={item.id}
        />
      ))}
      <Pagination />
    </div>
  );
}
