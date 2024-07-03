import React from "react";
import SearchElt from "../../SearchElt";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import SearchSelectElt from "../../SearchSelectElt";
import { TbCategory } from "react-icons/tb";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toggleJobSeekerCompanyFilter } from "../../../slices/responsiveSlice";
const membership = ["2010", "2015", "2020"];

export default function JSCompanySearchSection() {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-start gap-8 h-full sticky left-0 top-0">
      <div className="flex justify-end xl:hidden">
        <button
          onClick={() => dispatch(toggleJobSeekerCompanyFilter())}
          className="text-3xl"
        >
          <IoMdCloseCircleOutline />
        </button>
      </div>
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
        title={"Industry"}
        icon={<TbCategory />}
        list={[
          "Information Technology & Telecommunications",
          "Finance & Insurance",
          "Healthcare & Pharmaceuticals",
          "Education & Training",
          "Engineering & Manufacturing",
          "Construction & Real Estate",
          "Retail, Wholesale & E-commerce",
          "Hospitality, Travel & Tourism",
          "Media, Entertainment & Arts",
          "Government, Non-Profit & Public Services",
        ]}
      />
      <SearchSelectElt
        title={"Member Since"}
        icon={<IoCalendarClearOutline />}
        list={membership}
      />
    </div>
  );
}
