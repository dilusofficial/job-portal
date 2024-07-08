import React from "react";
import { useGetAllAppliedJobsQuery } from "../../../../slices/jobSeekerApiSlice";
import Loading from "../../../Loading";
import FormSelect from "../../../FormSelect";
import JSDashJobCard from "../JSDashJobCard";
import Pagination from "../../../Pagination";

export default function JSDashShortListedList() {
  const { data, isLoading } = useGetAllAppliedJobsQuery();

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
        {data.shortListed.length > 0 ? (
          data.shortListed.map((item) => (
            <JSDashJobCard
              key={item._id}
              owner={item.owner}
              jobTitle={item.jobTitle}
              salary={item.salary}
              skills={item.skills}
              location={item.jobLocation}
              jobId={item._id}
            />
          ))
        ) : (
          <h1>No ShortListed Jobs</h1>
        )}
      </div>
      <Pagination />
    </div>
  );
}
