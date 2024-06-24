import React from "react";
import SearchElt from "../candidates/SearchElt";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import SearchSelectElt from "../candidates/SearchSelectElt";
import { TbCategory } from "react-icons/tb";
import { jobCategory } from "../../../utils/jobcategory";
import { IoCalendarClearOutline } from "react-icons/io5";
const membership = [
  { category: "2010" },
  { category: "2015" },
  { category: "2020" },
];

export default function SearchSectionCompany() {
  return (
    <div className="flex flex-col justify-start gap-8 h-full sticky left-0 top-0">
      <SearchElt
        title={"Search by Keywords"}
        icon={<CiSearch />}
        placeholder={"Title, Skills, Name...."}
      />
      <SearchElt
        title={"Location"}
        icon={<SlLocationPin />}
        placeholder={"Enter location"}
      />
      <SearchSelectElt
        title={"Category"}
        icon={<TbCategory />}
        list={jobCategory}
      />
      <SearchSelectElt
        title={"Member Since"}
        icon={<IoCalendarClearOutline />}
        list={membership}
      />
    </div>
  );
}
