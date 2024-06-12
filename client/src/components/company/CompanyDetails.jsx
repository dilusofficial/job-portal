import React from "react";
import { rating } from "../../utils/rating";
import DetailElement from "../DetailElement";

export default function CompanyDetails({ company }) {
  return (
    <section className="bg-secondary p-3 rounded-lg">
      <DetailElement
        title={"Address"}
        content={company?.address || "Menlo Park, California, United States"}
      />
      <DetailElement
        title={"Website"}
        content={company?.website || "www.exampleweb.com"}
      />
      <DetailElement
        title={"Email"}
        content={company?.email || "examplemail@gmail.com"}
      />
      <DetailElement
        title={"Contact"}
        content={company?.contact || "99999999999"}
      />
      <DetailElement
        title={"Rating"}
        content={company?.rating ? rating(company.rating) : "Not Rated"}
      />
    </section>
  );
}
