import React from "react";

export default function EducationElt({ no }) {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <div className="form-row">
        <label htmlFor={`study${no}`} className="form-label">
          Study Programme
        </label>
        <input type="text" id={`study${no}`} className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor={`institution$${no}`} className="form-label">
          Institution
        </label>
        <input type="text" id={`institution$${no}`} className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor={`startdate${no}`} className="form-label">
          Start Date
        </label>
        <input type="date" id={`startdate${no}`} className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor={`enddate${no}`} className="form-label">
          End Date
        </label>
        <input type="date" id={`enddate${no}`} className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor={`current${no}`} className=" me-3">
          Currently doing this
        </label>
        <input type="checkbox" id={`current${no}`} className="" />
      </div>
      <div className="form-row">
        <label htmlFor={`courses${no}`} className="form-label">
          Courses
        </label>
        <input type="text" id={`courses${no}`} className="form-input" />
      </div>
    </div>
  );
}
