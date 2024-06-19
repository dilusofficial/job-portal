import React from "react";

export default function PreferenceElt() {
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <div className="form-row">
        <label htmlFor="resume" className="form-label">
          Upload Resume
        </label>
        <input type="file" id="resume" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="CCTC" className="form-label">
          Current CTC
        </label>
        <input type="number" id="CCTC" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="ECTC" className="form-label">
          Expected CTC
        </label>
        <input type="number" id="ECTC" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="location" className="form-label">
          Preffered Location
        </label>
        <input type="text" id="location" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="skills" className="form-label">
          Skills
        </label>
        <input type="text" id="skills" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="languages" className="form-label">
          Languages
        </label>
        <input type="text" id="languages" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="describe" className="form-label">
          Describe Yourself
        </label>
        <textarea id="describe" rows={2} className="form-textarea" />
      </div>
    </div>
  );
}
