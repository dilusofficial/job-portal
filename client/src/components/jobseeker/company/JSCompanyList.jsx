import React from "react";
import Pagination from "../../Pagination";
import { useDispatch } from "react-redux";
import { FiFilter } from "react-icons/fi";
import JSCompanyCard from "./JSCompanyCard";
import { toggleJobSeekerCompanyFilter } from "../../../slices/responsiveSlice";
import { useGetAllCompaniesQuery } from "../../../slices/jobSeekerApiSlice";
import Loading from "../../Loading";

export default function JSCompanyList() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllCompaniesQuery();
  console.log(data);
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
        onClick={() => dispatch(toggleJobSeekerCompanyFilter())}
        className="xl:hidden block text-xl p-3 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg w-fit"
      >
        <FiFilter />
      </button>
      {data &&
        data.map((x) => (
          <JSCompanyCard
            key={x._id}
            name={x.companyName}
            Industry={x.industry}
            image={x.logo ? x.logo : "/nocompany.png"}
            location={x.state}
            created={x.createdAt}
            id={x._id}
          />
        ))}

      <Pagination />
    </div>
  );
}
