import React from "react";
import SearchSection from "../../../components/employer/candidates/SearchSection";
import CandidateList from "../../../components/employer/candidates/CandidateList";

export default function CandidatesPage() {
  return (
    <div>
      <h1 className="form-title mb-8 text-2xl font-semibold text-center">
        Candidates
      </h1>
      <div className="flex justify-start items-start gap-5">
        <div className="xl:block hidden max-w-96 w-96 bg-background1 sticky left-0 top-20 h-screen rounded-xl py-10 px-3">
          <SearchSection />
        </div>
        <div className="w-full bg-background2 rounded-xl py-10 lg:px-10 md:px-5 px-3">
          <CandidateList />
        </div>
      </div>
    </div>
  );
}
