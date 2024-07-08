import React from "react";
import FormSelect from "../../../FormSelect";
import JSDashJobCard from "../JSDashJobCard";
import { useGetAllAppliedJobsQuery } from "../../../../slices/jobSeekerApiSlice";
import Pagination from "../../../Pagination";
import Loading from "../../../Loading";

export default function AppliedList() {
  //const { data, isLoading } = useGetAllAppliedJobsQuery();
  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <div className="flex justify-end">
        <div className="xl:w-1/6 lg:w-1/4 w-1/2 ">
          <FormSelect title={"Sort"} list={["Newest", "Oldest"]} />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2  gap-4 my-4">
        {data.appliedJobs.length > 0 ? (
          data.appliedJobs.map((item) => <JSDashJobCard key={item._id} />)
        ) : (
          <h1>No Applied Jobs</h1>
        )}
      </div>
      <Pagination />
    </div>
  );
}
