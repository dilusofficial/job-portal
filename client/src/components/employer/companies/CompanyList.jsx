import React from "react";
import CompanyCard from "./CompanyCard";
import Pagination from "../../Pagination";
import { useDispatch } from "react-redux";
import { toggleEmployerCompanyFilter } from "../../../slices/responsiveSlice";
import { FiFilter } from "react-icons/fi";
import { useGetAllEmployerCompaniesQuery } from "../../../slices/employerApiSlice";
import Loading from "../../Loading";

export default function CompanyList() {
  const { data, isLoading } = useGetAllEmployerCompaniesQuery();
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
        onClick={() => dispatch(toggleEmployerCompanyFilter())}
        className="xl:hidden block text-xl p-3 bg-gray-50 border border-gray-300 text-gray-400 rounded-lg w-fit"
      >
        <FiFilter />
      </button>
      {data?.length > 0 &&
        data.map((item) => (
          <CompanyCard
            key={item._id}
            image={item.logo || "/nocompany.png"}
            name={item.companyName}
            category={item.industry}
            location={item.state}
            no={item.openJobs || ""}
            id={item._id}
          />
        ))}
      <Pagination />
    </div>
  );
}
