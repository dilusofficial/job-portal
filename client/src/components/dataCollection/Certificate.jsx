import React from "react";

export default function Certificate({ no }) {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <div className="form-row">
        <label htmlFor={`certificate${no}`} className="form-label">
          Certificate Name
        </label>
        <input type="text" id={`certificate${no}`} className="form-input" />
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
        <label htmlFor={`description${no}`} className="form-label">
          Description
        </label>
        <input type="text" id={`description${no}`} className="form-input" />
      </div>
    </div>
  );
}
