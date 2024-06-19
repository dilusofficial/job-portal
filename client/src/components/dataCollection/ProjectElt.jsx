import React from "react";

export default function ProjectElt() {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <div className="form-row">
        <label htmlFor="project" className="form-label">
          Project Name
        </label>
        <input type="text" id="project" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="startdate" className="form-label">
          Start Date
        </label>
        <input type="date" id="startdate" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="enddate" className="form-label">
          End Date
        </label>
        <input type="date" id="enddate" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="current" className=" me-3">
          Currently working
        </label>
        <input type="checkbox" id="current" className="" />
      </div>
      <div className="form-row">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" id="description" className="form-input" />
      </div>
    </div>
  );
}
