import React from "react";
import WorkElt from "./WorkElt";
import { useDispatch } from "react-redux";
import {
  setEducationDetails,
  setProfessionalDetails,
  setWorkDetails,
} from "../../slices/dataCollectionSlice";

export default function WorkDetails() {
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(setEducationDetails("current"));
    dispatch(setWorkDetails("pending"));
  }
  function handleNext() {
    dispatch(setProfessionalDetails("current"));
    dispatch(setWorkDetails("completed"));
  }
  return (
    <div className="p-4 bg-secondary w-11/12 lg:w-1/2 rounded-lg mt-3">
      <h1 className="text-xl my-2">Work Experience</h1>
      <WorkElt />
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
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
