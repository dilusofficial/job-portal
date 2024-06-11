import React from "react";
import { description } from "../../utils/data2";

export default function JobDetails({ job }) {
  return (
    <>
      <section className="bg-secondary p-3 rounded-lg">
        <div className="flex gap-3 justify-start items-center my-3">
          <p>Posted By</p>
          <p>:</p>
          <p>{job?.company || "Google"}</p>
        </div>
        <div className="flex gap-3 justify-start items-center my-3">
          <p>Posted</p>
          <p>:</p>
          <p>{job?.createdAt || "2 days ago"}</p>
        </div>
        <div className="flex gap-3 justify-start items-center my-3">
          <p>Location</p>
          <p>:</p>
          <p>{job?.location || "Remote"}</p>
        </div>
        <div className="flex gap-3 justify-start items-center my-3">
          <p>Job Type</p>
          <p>:</p>
          <p>{job?.jobType || "examplemail@gmail.com"}</p>
        </div>
        <div className="flex gap-3 justify-start items-center my-3">
          <p>Salary</p>
          <p>:</p>
          <p>{`${job?.salary ? `${job.salary} LPA` : `5 LPA`}`}</p>
        </div>
        <div className="flex gap-3 justify-start items-center my-3">
          <p>Skills</p>
          <p>:</p>
          <p>{job?.skills || "Html, css, react, python"}</p>
        </div>
      </section>
      <section className="bg-secondary p-3 rounded-lg mt-2">
        <h1 className="font-semibold mb-2">Description</h1>
        <p className="leading-normal">{description.desc}</p>
      </section>
    </>
  );
}
