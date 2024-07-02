import React from "react";
import { candidatesList } from "../../../../utils/candidateListingdata";
import CandidateCard from "../CandidateCard";
import Pagination from "../../../Pagination";
import FormSelect from "../../../FormSelect";

export default function ApplicantList() {
  return (
    <div>
      <div className="flex justify-end">
        <div className="xl:w-1/6 lg:w-1/4 w-1/2 ">
          <FormSelect title={"Sort"} list={["Newest", "Oldest"]} />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-4 my-4">
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
      <Pagination />
    </div>
  );
}
