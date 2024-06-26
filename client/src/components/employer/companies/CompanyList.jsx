import React from "react";
import { companyList } from "../../../utils/CompanyListingData";
import CompanyCard from "./CompanyCard";
import Pagination from "../../Pagination";
import { useDispatch } from "react-redux";
import { toggleEmployerCompanyFilter } from "../../../slices/responsiveSlice";
import { FiFilter } from "react-icons/fi";

export default function CompanyList() {
  const dispatch = useDispatch();
  return (
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
      {companyList.slice(0, 10).map((item) => (
        <CompanyCard
          key={item.id}
          image={item.image}
          name={item.company}
          category={item.category}
          location={item.location}
          no={item.openJobs}
          id={item.id}
        />
      ))}
      <Pagination />
    </div>
  );
}
