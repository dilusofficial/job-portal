import React from "react";
import { companyList } from "../../../utils/CompanyListingData";
import CompanyCard from "./CompanyCard";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export default function CompanyList() {
  return (
    <div className="flex flex-col gap-5">
      <select className="py-1 px-3 xl:w-1/6 lg:w-1/4 w-1/2 h-10 rounded-lg bg-gray-50 border border-gray-300 text-gray-400">
        <option value={""}>Sort by (Default)</option>
        <option value={"newer"}>Newer</option>
        <option value={"older"}>Older</option>
      </select>
      {companyList.slice(0, 10).map((item) => (
        <CompanyCard
          key={item.id}
          image={item.image}
          name={item.company}
          category={item.category}
          location={item.location}
          no={item.openJobs}
        />
      ))}
      <div className="flex items-center gap-4">
        <div className="text-3xl text-ascent rounded-full cursor-pointer hover:bg-hover hover:text-secondary">
          <FiArrowLeftCircle />
        </div>
        <h1>Page 1 of 3</h1>
        <div className="text-3xl text-ascent rounded-full cursor-pointer hover:bg-hover hover:text-secondary">
          <FiArrowRightCircle />
        </div>
      </div>
    </div>
  );
}
