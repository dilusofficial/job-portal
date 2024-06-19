import React from "react";

export default function LandingSection() {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1">
      <div className="flex flex-col justify-center items-start gap-3">
        <h1 className="lg:text-5xl text-xl my-2">
          Join us & Explore Thousands of Jobs
        </h1>
        <p className="opacity-40 my-2">
          Find Jobs, Employment and career opportunities.
        </p>
      </div>
      <div className="hidden lg:block">
        <img src="/home-img.png"></img>
      </div>
    </section>
  );
}
