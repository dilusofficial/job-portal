import React from "react";
import { useDispatch } from "react-redux";
import { toggleJobSeekerJobsFilter } from "../../../slices/responsiveSlice";
import { FiFilter } from "react-icons/fi";
import JobCard from "./JobCard";
import Pagination from "../../Pagination";
import { useGetAllJobsQuery } from "../../../slices/jobSeekerApiSlice";
import Loading from "../../Loading";

export default function JobList() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllJobsQuery();
  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-5">
      <select className="py-1 px-3 xl:w-1/6 lg:w-1/4 w-1/2 h-10 rounded-lg bg-gray-50 border border-gray-300 text-gray-400">
        <option value={""}>Sort by (Default)</option>
        <option value={"newer"}>Newer</option>
        <option value={"older"}>Older</option>
      </select>
      <button
        onClick={() => dispatch(toggleJobSeekerJobsFilter())}
        className="xl:hidden block text-xl p-3 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg w-fit"
      >
        <FiFilter />
      </button>
      {data &&
        data.map((x) => (
          <JobCard
            key={x._id}
            name={x.jobTitle}
            company={x.owner.companyName}
            location={x.jobLocation}
            category={x.category}
            created={x.createdAt}
            currentCTC={x.salary}
            skills={x.skills}
            id={x._id}
            image={x.owner.logo ? x.owner.logo : "/nocompany.png"}
          />
        ))}

      <Pagination />
    </div>
  );
}
