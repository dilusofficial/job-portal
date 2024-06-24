import React from "react";
import InfoCards from "./InfoCards";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoList } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { TbBadge } from "react-icons/tb";

export default function StatsContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      <InfoCards
        icon={<BsSuitcaseLg />}
        no={"22"}
        content={"Posted Jobs"}
        bg={"bg-blue-100"}
        text={"text-blue-700"}
      />
      <InfoCards
        icon={<IoList />}
        no={"9382"}
        content={"Applications"}
        bg={"bg-red-100"}
        text={"text-red-700"}
      />
      <InfoCards
        icon={<BiMessageDetail />}
        no={"74"}
        content={"Messages"}
        bg={"bg-yellow-100"}
        text={"text-yellow-700"}
      />
      <InfoCards
        icon={<TbBadge />}
        no={"32"}
        content={"Shorlist"}
        bg={"bg-green-100"}
        text={"text-green-700"}
      />
    </div>
  );
}
