import React from "react";
import { rating } from "../../utils/rating";

export default function CompanyDetails({ company }) {
  return (
    <section className="bg-secondary p-3 rounded-lg">
      <div className="flex gap-3 justify-start items-center my-3">
        <p>Address</p>
        <p>:</p>
        <p>{company?.address || "Menlo Park, California, United States"}</p>
      </div>
      <div className="flex gap-3 justify-start items-center my-3">
        <p>Website</p>
        <p>:</p>
        <p>{company?.website || "www.exampleweb.com"}</p>
      </div>
      <div className="flex gap-3 justify-start items-center my-3">
        <p>Email</p>
        <p>:</p>
        <p>{company?.email || "examplemail@gmail.com"}</p>
      </div>
      <div className="flex gap-3 justify-start items-center my-3">
        <p>Contact</p>
        <p>:</p>
        <p>{company?.contact || "99999999999"}</p>
      </div>
      <div className="flex gap-3 justify-start items-center my-3">
        <p>Rating</p>
        <p>:</p>
        <p>{company?.rating ? rating(company.rating) : "Not Rated"}</p>
      </div>
    </section>
  );
}
