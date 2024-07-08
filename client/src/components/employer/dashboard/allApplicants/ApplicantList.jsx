import React from "react";
import CandidateCard from "../CandidateCard";
import Pagination from "../../../Pagination";
import FormSelect from "../../../FormSelect";
import { useGetAllApplicantsQuery } from "../../../../slices/employerApiSlice";
import Loading from "../../../Loading";

export default function ApplicantList() {
  const { data, isLoading, refetch } = useGetAllApplicantsQuery();

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
        {data.allApplicants.length > 0 ? (
          data.allApplicants.map((item) => (
            <CandidateCard
              key={item._id}
              name={item.applicant.fullName}
              role={item.applicant.oneWord || ""}
              skills={item.applicant.skills}
              image={item.applicant.profilePic || "/nouser.png"}
              location={item.applicant.preferredLocation[0] || ""}
              currentCTC={item.applicant.currentSalary}
              position={item.jobApplied.jobTitle}
              date={item.createdAt.toString().slice(0, 10)}
              applicantId={item.applicant._id}
              action={item.action || ""}
              jobId={item.jobApplied._id}
              refetch={refetch}
            />
          ))
        ) : (
          <h1 className="text-xl">No Recent Applicants</h1>
        )}
      </div>
      <Pagination />
    </div>
  );
}
