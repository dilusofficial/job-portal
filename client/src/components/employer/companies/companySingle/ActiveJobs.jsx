import React from "react";
import { jobData } from "../../../../utils/jobData";
import JobCard from "./JobCard";

export default function ActiveJobs() {
  return (
    <div>
      <h1 className="my-4 text-xl">Active Jobs</h1>
      <div className="flex flex-col gap-3">
        {" "}
        {jobData.slice(0, 4).map((x) => (
          <JobCard
            key={x.id}
            image={"/company-1.png"}
            name={x.jobTitle}
            joblocation={x.jobLocation}
            category={x.category}
            jobtype={x.jobtype}
            salary={x.salary}
            open={x.applied}
          />
        ))}
      </div>
    </div>
  );
}
