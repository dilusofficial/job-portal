import React from "react";

export default function Certificate() {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg my-3 border">
      <div className="form-row">
        <label className="form-label">Certificate Name</label>
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
        <label className="form-label">Description</label>
        <input type="text" className="form-input" />
      </div>
    </div>
  );
}
