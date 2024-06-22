import React from "react";
import CompanyCard from "./CompanyCard";
import { featuredCompanies } from "../../../utils/featuredCompanies";

export default function FeaturedCompanies() {
  return (
    <section className="minusheight bg-background1 rounded-lg mt-2 flex flex-col justify-center px-4">
      <div className="text-center my-5 mb-7">
        <h1 className="lg:text-3xl text-xl my-2">Top Companies</h1>
        <p className=" my-2">
          Here are some of the leading companies registered with us
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 place-content-between gap-5">
        {featuredCompanies.map((item) => (
          <div key={item.image}>
            <CompanyCard
              name={item.name}
              location={item.location}
              image={item.image}
              position={item.position}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
