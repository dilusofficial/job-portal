import React from "react";
import { useDispatch } from "react-redux";
import {
  setBasicDetails,
  setEducationDetails,
} from "../../slices/dataCollectionSlice";

export default function BasicDetails() {
  const dispatch = useDispatch();
  function handleNext() {
    dispatch(setBasicDetails("completed"));
    dispatch(setEducationDetails("current"));
  }
  return (
    <div className="p-4 bg-secondary lg:w-1/2 rounded-lg mt-3">
      <div className="form-row">
        <label htmlFor="fullname" className="form-label">
          Full Name
        </label>
        <input type="text" id="fullname" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input type="number" id="phone" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="dob" className="form-label">
          Date of Birth
        </label>
        <input type="date" id="dob" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input type="number" id="age" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="photo" className="form-label">
          Photo
        </label>
        <input type="file" id="photo" className="form-input" />
      </div>
      <div className="form-row">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <select id="gender" className="form-select">
          <option value={"male"}>Male</option>
          <option value={"female"}>Female</option>
          <option value={"unspecified"}>Unspecified</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="address" className="form-label">
          Current Adrress
        </label>
        <textarea id="address" rows={2} className="form-textarea" />
      </div>
      <div className="flex justify-end">
        <button
          className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
