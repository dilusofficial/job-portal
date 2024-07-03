import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbout,
  setCurrentSalary,
  setExpectedSalary,
  setFullName,
  setLanguages,
  setPrefferedLocation,
  setResume,
  setTotalExperience,
  setskills,
} from "../../slices/dataCollectionSlice";

export default function PreferenceElt() {
  const {
    fullName,
    resume,
    currentSalary,
    expectedSalary,
    totalExperience,
    preferredLocation,
    skills,
    languages,
    about,
  } = useSelector((state) => state.dataCollection);
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <div className="form-row">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => dispatch(setFullName(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Upload Resume</label>
        <input type="file" className="form-input" />
      </div>
      <div className="form-row">
        <label className="form-label">Current CTC</label>
        <input
          type="number"
          value={currentSalary}
          onChange={(e) => dispatch(setCurrentSalary(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Expected CTC</label>
        <input
          type="number"
          value={expectedSalary}
          onChange={(e) => dispatch(setExpectedSalary(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Total Experience</label>
        <input
          type="number"
          className="form-input"
          value={totalExperience}
          onChange={(e) => dispatch(setTotalExperience(e.target.value))}
        />
      </div>
      <div className="form-row">
        <label className="form-label">Preffered Locations</label>
        <input
          type="text"
          value={preferredLocation}
          onChange={(e) => dispatch(setPrefferedLocation(e.target.value))}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <label className="form-label">Skills</label>
        <input
          type="text"
          className="form-input"
          value={skills}
          onChange={(e) => dispatch(setskills(e.target.value))}
        />
      </div>
      <div className="form-row">
        <label className="form-label">Languages</label>
        <input
          type="text"
          className="form-input"
          value={languages}
          onChange={(e) => dispatch(setLanguages(e.target.value))}
        />
      </div>
      <div className="form-row">
        <label className="form-label">Describe Yourself</label>
        <textarea
          rows={2}
          value={about}
          onChange={(e) => dispatch(setAbout(e.target.value))}
          className="form-textarea"
        />
      </div>
    </div>
  );
}
