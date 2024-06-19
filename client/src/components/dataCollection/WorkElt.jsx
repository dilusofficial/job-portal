import React from "react";

export default function WorkElt() {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <div className="form-row">
        <label htmlFor="job-title" className="form-label">
          Job Title
        </label>
        <input type="text" id="job-title" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="company" className="form-label">
          Company
        </label>
        <input type="text" id="company" className="form-input" />
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
        <label htmlFor="achievements" className="form-label">
          Acheivements
        </label>
        <input type="text" id="acheivements" className="form-input" />
      </div>
    </div>
  );
}
