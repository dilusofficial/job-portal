import React from "react";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import SearchElt from "../../SearchElt";
import { TbCategory } from "react-icons/tb";
import SearchSelectElt from "../../SearchSelectElt";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleEmployerCandidatesFilter } from "../../../slices/responsiveSlice";

const genderlist = ["Male", "Female", "Others"];
const Experiencelist = [
  "Fresher",
  "1-2 Years",
  "2-4 Years",
  "4-6 Years",
  ">6 Years",
];
const Qualificationlist = [
  "Certificate",
  "Diploma",
  "Bachelors Degree",
  "Masters Degree",
  "Doctorate",
];

export default function SearchSection() {
  const dispatch = useDispatch();
  return (
    <div
      className={` flex flex-col justify-start gap-8 h-full sticky left-0 top-0`}
    >
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => dispatch(toggleEmployerCandidatesFilter())}
          className="text-3xl"
        >
          <IoMdCloseCircleOutline />
        </button>
      </div>
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
        list={[
          "Healthcare & Medical",
          "Software Development & IT",
          "Finance & Accounting",
          "Education & Training",
          "Engineering & Technical",
          "Construction & Skilled Trades",
          "Sales, Marketing & Advertising",
          "Customer Service & Support",
          "Human Resources & Recruitment",
          "Management & Executive",
        ]}
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
