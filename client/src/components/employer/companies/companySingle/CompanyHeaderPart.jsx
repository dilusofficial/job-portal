import React from "react";
import { BsClockHistory, BsSuitcase } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

export default function CompanyHeaderPart() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between bg-background2 items-center md:px-10 p-3  rounded-xl">
      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div>
          <img src={"/company-1.png"}></img>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium">{"Udemy"}</h1>
          <div className="flex gap-5 md:flex-row flex-col text-sm">
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <SlLocationPin />
              </span>
              London, UK
              {""}
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsSuitcase />
              </span>
              Accounting/Finance
            </p>
            <p className="flex gap-2 items-center text-gray-500">
              <span>
                <BsClockHistory />
              </span>
              Member since, Aug 14 2017
            </p>
          </div>
          <div className="px-2 py-2 text-xs bg-primary w-fit text-gray-500 rounded-lg">
            open positions: 12
          </div>
        </div>
      </div>
    </div>
  );
}
