import React from "react";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import SearchElt from "./SearchElt";
import { TbCategory } from "react-icons/tb";
import SearchSelectElt from "./SearchSelectElt";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";
import { jobCategory } from "../../../utils/jobcategory";
const genderlist = [
  { category: "Male" },
  { category: "Female" },
  { category: "Others" },
];
const Experiencelist = [
  { category: "Fresher" },
  { category: "1-2 Years" },
  { category: "2-4 Years" },
  { category: "4-6 Years" },
  { category: ">6 Years" },
];
const Qualificationlist = [
  { category: "Certificate" },
  { category: "Diploma" },
  { category: "Bachelors Degree" },
  { category: "Masters Degree" },
  { category: "Doctorate" },
];

export default function SearchSection() {
  return (
    <div className="flex flex-col justify-start gap-8 h-full sticky left-0 top-0">
      <SearchElt
        title={"Search by Keywords"}
        icon={<CiSearch />}
        placeholder={"Job Title, Skills, Name...."}
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
        title={"Gender"}
        icon={<MdOutlineWorkOutline />}
        list={genderlist}
      />
      <SearchSelectElt
        title={"Experience Level"}
        icon={<GrUserExpert />}
        list={Experiencelist}
      />
      <SearchSelectElt
        title={"Qualification"}
        icon={<IoSchoolOutline />}
        list={Qualificationlist}
      />
    </div>
  );
}
