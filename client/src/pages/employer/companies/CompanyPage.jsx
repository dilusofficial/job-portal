import React from "react";
import SearchSectionCompany from "../../../components/employer/companies/SearchSectionCompany";
import CompanyList from "../../../components/employer/companies/CompanyList";

export default function CompanyPage() {
  return (
    <div>
      <h1 className="form-title mb-8 text-2xl font-semibold text-center">
        Candidates
      </h1>
      <div className="flex justify-start items-start gap-5">
        <div className="xl:block hidden max-w-96 w-96 bg-background2 sticky left-0 top-20 h-screen rounded-xl py-10 px-3">
          <SearchSectionCompany />
        </div>
        <div className="w-full bg-background1 rounded-xl py-10 lg:px-10 md:px-5 px-3">
          <CompanyList />
        </div>
      </div>
    </div>
  );
}
