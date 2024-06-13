import React, { useEffect, useState } from "react";
import CompanySearch from "../../../components/company/CompanySearch";
import CompanyList from "../../../components/company/CompanyList";
import { companyData } from "../../../utils/data";
import Pagination from "../../../components/Pagination";

export default function Companies() {
  const [companies, setCompanies] = useState(companyData);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const search = companies.filter((item) =>
      item.company.toLowerCase().includes(name)
    );
    setCompanies(search);
  }
  function handleReset() {
    setCompanies(companyData);
    setName("");
  }
  useEffect(() => {
    handleReset();
  }, []);
  return (
    <div>
      <CompanySearch
        nameValue={name}
        nameChange={setName}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />

      <CompanyList data={companies} />
    </div>
  );
}
