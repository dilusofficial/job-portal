import React from "react";
import CandidateCard from "./CandidateCard";
import Pagination from "../../Pagination";
import { FiFilter } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleEmployerCandidatesFilter } from "../../../slices/responsiveSlice";
import { useGetAllCandidatesQuery } from "../../../slices/employerApiSlice";
import Loading from "../../Loading";

export default function CandidateList() {
  const { data, isLoading } = useGetAllCandidatesQuery();
  const dispatch = useDispatch();
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
        onClick={() => dispatch(toggleEmployerCandidatesFilter())}
        className="xl:hidden block text-xl p-3 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg w-fit"
      >
        <FiFilter />
      </button>
      {data?.length > 0 &&
        data.map((item) => (
          <CandidateCard
            key={item._id}
            image={item.profilePic || item.owner.image || "/nouser.png"}
            name={item.fullName}
            position={item.oneWord ? item.oneWord : ""}
            location={item.preferredLocation ? item.preferredLocation[0] : ""}
            currentCTC={item.currentSalary ? item.currentSalary : ""}
            id={item._id}
          />
        ))}
      <Pagination />
    </div>
  );
}
