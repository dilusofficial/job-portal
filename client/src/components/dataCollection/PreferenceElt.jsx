import React from "react";

export default function PreferenceElt() {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <div className="form-row">
        <label className="form-label">Full Name</label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Upload Resume</label>
        <input type="file" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Current CTC</label>
        <input type="number" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Expected CTC</label>
        <input type="number" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Total Experience</label>
        <input type="number" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Preffered Locations</label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Skills</label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Languages</label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Describe Yourself</label>
        <textarea rows={2} className="form-textarea" />
      </div>
    </div>
  );
}
