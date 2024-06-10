import React from "react";
import StatComponent from "../../components/statistics/StatComponent";
import GraphComponent from "../../components/statistics/GraphComponent";
import { graphData1, graphData2 } from "../../utils/data";

export default function Statistics() {
  return (
    <>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 my-10">
        <StatComponent count={"500K+"} text={"Jobs"} />
        <StatComponent count={"10K+"} text={"Companies"} />
        <StatComponent count={"200K+"} text={"Users"} />
        <StatComponent count={"10K+"} text={"Subscribers"} />
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold mt-5">Job stats</h1>
        <GraphComponent data={graphData1} />
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold mt-5">Subscribers stats</h1>
        <GraphComponent data={graphData2} />
      </div>
    </>
  );
}