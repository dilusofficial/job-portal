import React from "react";
import PreferenceElt from "./PreferenceElt";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setPreferences,
  setProfessionalDetails,
} from "../../slices/dataCollectionSlice";

export default function Preferences() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleBack() {
    dispatch(setPreferences("pending"));
    dispatch(setProfessionalDetails("current"));
  }
  function handleNext() {
    dispatch(setPreferences("completed"));
    navigate("/");
  }
  return (
    <div className="p-4 bg-secondary w-11/12 lg:w-1/2 rounded-lg mt-3">
      <PreferenceElt />

      <div>
        <div className="flex justify-end">
          <button
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
            onClick={handleNext}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
