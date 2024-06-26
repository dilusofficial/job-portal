import React from "react";
import {
  PiNotepad,
  PiHourglassSimpleLow,
  PiCoins,
  PiMoney,
  PiUser,
  PiGraduationCap,
} from "react-icons/pi";
import { HiOutlineLanguage } from "react-icons/hi2";
import ExtraDetailElt from "./ExtraDetailElt";

export default function ExtraDetails() {
  return (
    <div className="flex flex-col gap-8 my-5">
      <ExtraDetailElt
        title={"Experience"}
        icon={<PiNotepad />}
        content={"1-2"}
      />
      <ExtraDetailElt
        title={"Age"}
        icon={<PiHourglassSimpleLow />}
        content={"25"}
      />
      <ExtraDetailElt
        title={"Current Salary"}
        icon={<PiCoins />}
        content={"4.5 CTC"}
      />
      <ExtraDetailElt
        title={"Expected Salary"}
        icon={<PiMoney />}
        content={"5.5 CTC"}
      />
      <ExtraDetailElt title={"Gender"} icon={<PiUser />} content={"Male"} />
      <ExtraDetailElt
        title={"Languages"}
        icon={<HiOutlineLanguage />}
        content={"English Hindi Spanish"}
      />
      <ExtraDetailElt
        title={"Qualification"}
        icon={<PiGraduationCap />}
        content={"Bachelors Degree"}
      />
    </div>
  );
}
