import React from "react";
import ProfileFormInputElt from "../ProfileFormInputElt";
import ProfileInputSelectElt from "../ProfileInputSelectElt";

export default function JobForm() {
  return (
    <div className="my-4">
      <ProfileFormInputElt
        title={"Job Title"}
        type={"text"}
        placeholder={"Job Name"}
      />
      <div className="form-row">
        <label className="form-label">Job description</label>
        <div className="flex items-center">
          <textarea
            className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900"
            placeholder={"Description"}
            rows={10}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <ProfileInputSelectElt
          title={"Job Category"}
          list={[
            "Healthcare & Medical",
            "Software Development & IT",
            "Finance & Accounting",
            "Education & Training",
            "Engineering & Technical",
            "Construction & Skilled Trades",
            "Sales, Marketing & Advertising",
            "Customer Service & Support",
            "Human Resources & Recruitment",
            "Management & Executive",
          ]}
        />
        <ProfileInputSelectElt
          title={"Job Type"}
          list={["Full-time", "Part-time", "Internship"]}
        />
        <ProfileInputSelectElt
          title={"Qualification"}
          list={[
            "Certificate",
            "Diploma",
            "Bachelors Degree",
            "Masters Degree",
            "Doctorate",
          ]}
        />
        <ProfileInputSelectElt
          title={"Experience"}
          list={["fresher", "0-1", "1-2", "2-4", "4-6", ">6"]}
        />
        <ProfileInputSelectElt
          title={"Preffered Gender"}
          list={["All", "Male", "Female"]}
        />
        <ProfileFormInputElt title={"Application Deadline"} type={"date"} />
        <ProfileInputSelectElt
          title={"Job Location"}
          list={["On-site", "Remote", "W-F-H", "Hybrid"]}
        />
        <ProfileFormInputElt title={"Salary"} type={"text"} />
      </div>
      <ProfileFormInputElt
        title={"Skills required"}
        type={"text"}
        placeholder={"skills"}
      />
      <button className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover">
        Post
      </button>
    </div>
  );
}
