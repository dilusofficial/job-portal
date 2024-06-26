import React from "react";
import { LiaIndustrySolid } from "react-icons/lia";
import { PiUsersFourLight } from "react-icons/pi";
import { LiaHourglassStartSolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import ExtraDetailElt from "../../candidates/candidateSingle/ExtraDetailElt";

export default function CompanyExtraDetails() {
  return (
    <div className="flex flex-col gap-8 my-5">
      <ExtraDetailElt
        title={"Industry"}
        icon={<LiaIndustrySolid />}
        content={"Accounting/Finance"}
      />
      <ExtraDetailElt
        title={"Size"}
        icon={<PiUsersFourLight />}
        content={"50-100"}
      />
      <ExtraDetailElt
        title={"Founded"}
        icon={<LiaHourglassStartSolid />}
        content={"2007"}
      />
      <ExtraDetailElt
        title={"Website"}
        icon={<CgWebsite />}
        content={"www.example.com"}
      />
      <ExtraDetailElt
        title={"Contact"}
        icon={<MdOutlinePhoneEnabled />}
        content={"+911234567890"}
      />
      <ExtraDetailElt
        title={"Mail"}
        icon={<IoMailOutline />}
        content={"example@mail.com"}
      />
    </div>
  );
}
