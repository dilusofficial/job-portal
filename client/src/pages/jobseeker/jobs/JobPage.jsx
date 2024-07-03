import React from "react";
import { useSelector } from "react-redux";
import JobSearchSection from "../../../components/jobseeker/jobs/JobSearchSection";
import JobList from "../../../components/jobseeker/jobs/JobList";

export default function JobPage() {
  const { showJobSeekerJobsFilter } = useSelector((state) => state.responsive);
  return (
    <div className="">
      <h1 className="form-title mb-8 text-2xl font-semibold text-center">
        Jobs
      </h1>
      <div className="flex xl:flex-row flex-col justify-start items-start gap-5">
        <div
          className={`xl:block ${
            showJobSeekerJobsFilter
              ? "w-full"
              : "hidden sticky left-0 top-20 min-h-screen max-w-96 w-96"
          } bg-background1  rounded-xl py-10 px-3`}
        >
          <JobSearchSection />
        </div>
        <div className="w-full bg-background2 rounded-xl py-10 lg:px-10 md:px-5 px-3">
          <JobList />
        </div>
      </div>
    </div>
  );
}
