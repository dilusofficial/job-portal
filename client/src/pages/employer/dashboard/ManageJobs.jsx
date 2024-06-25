import React from "react";
import JobTable from "../../../components/employer/dashboard/mangeJobs/Table";
import Pagination from "../../../components/Pagination";

export default function ManageJobs() {
  return (
    <div>
      <h1 className="text-xl my-3">My Jobs</h1>
      <div className="my-4">
        <JobTable />
      </div>
      <Pagination />
    </div>
  );
}
