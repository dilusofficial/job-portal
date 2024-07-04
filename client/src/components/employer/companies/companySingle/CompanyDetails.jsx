import React from "react";
import CompanyExtraDetails from "./CompanyExtraDetails";
import ActiveJobs from "./ActiveJobs";
import SocialMedia from "../../../SocialMedia";

export default function CompanyDetails() {
  return (
    <div className="flex lg:flex-row flex-col gap-3 w-full my-4">
      <div className="bg-background2 w-full rounded-lg p-3 lg:px-10">
        <h1 className="my-4 text-xl">About Company</h1>
        <p className="text-gray-500 leading-9">
          Moody’s Corporation, often referred to as Moody’s, is an American
          business and financial services company. It is the holding company for
          Moody’s Investors Service (MIS), an American credit rating agency, and
          Moody’s Analytics (MA), an American provider of financial analysis
          software and services. Moody’s was founded by John Moody in 1909 to
          produce manuals of statistics related to stocks and bonds and bond
          ratings. Moody’s was acquired by Dun & Bradstreet in 1962. In 2000,
          Dun & Bradstreet spun off Moody’s Corporation as a separate company
          that was listed on the NYSE under MCO. In 2007, Moody’s Corporation
          was split into two operating divisions, Moody’s Investors Service, the
          rating agency, and Moody’s Analytics, with all of its other products.
        </p>
        <ActiveJobs />
      </div>
      <div className="bg-background1 w-full lg:w-1/4 rounded-lg p-3 lg:px-8">
        <CompanyExtraDetails />
        <SocialMedia />
      </div>
    </div>
  );
}
