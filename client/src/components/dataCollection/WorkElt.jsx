import React from "react";

export default function WorkElt() {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg my-3 border">
      <div className="form-row">
        <label className="form-label">Job Title</label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Company</label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Start Date</label>
        <input type="date" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">End Date</label>
        <input type="date" className="form-input" />
      </div>
      <div className="form-row">
        <label className=" me-3">Currently working</label>
        <input type="checkbox" className="" />
      </div>
      <div className="form-row">
        <label className="form-label">Acheivements</label>
        <input type="text" className="form-input" />
      </div>
    </div>
  );
}
