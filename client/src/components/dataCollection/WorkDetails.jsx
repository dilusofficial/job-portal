import React, { useState } from "react";
import WorkElt from "./WorkElt";
import { useDispatch, useSelector } from "react-redux";
import {
  setEducationDetails,
  setProfessionalDetails,
  setWork,
  setWorkDetails,
} from "../../slices/dataCollectionSlice";

export default function WorkDetails({ inside }) {
  const { work } = useSelector((state) => state.dataCollection);
  const [workDetail, setWorkDetail] = useState(work || [{}]);
  const dispatch = useDispatch();

  function handleBack() {
    dispatch(setWork(workDetail));
    dispatch(setEducationDetails("current"));
    dispatch(setWorkDetails("pending"));
    window.scrollTo(0, 0);
  }
  function handleNext() {
    dispatch(setWork(workDetail));
    dispatch(setProfessionalDetails("current"));
    dispatch(setWorkDetails("completed"));
    window.scrollTo(0, 0);
  }

  function handleChange(index, field, value) {
    const newWorkDetail = [...workDetail];
    newWorkDetail[index] = { ...newWorkDetail[index], [field]: value };
    setWorkDetail(newWorkDetail);
  }

  function addNewForm() {
    setWorkDetail([...workDetail, {}]);
  }

  function removeForm(index) {
    const updated = workDetail.filter((_, i) => i !== index);
    setWorkDetail(updated);
  }
  return (
    <div
      className={`p-4 bg-secondary min-h-96  ${
        inside ? "w-full" : "w-11/12 lg:w-1/2"
      } rounded-lg mt-3`}
    >
      <h1 className="text-xl my-2">Work Experience</h1>
      {workDetail.map((elt, index) => (
        <WorkElt
          key={index}
          workDetail={elt}
          index={index}
          handleChange={handleChange}
          handleRemove={removeForm}
        />
      ))}

      <div>
        <div className="flex justify-end">
          {!inside && (
            <button
              className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          <button
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
            onClick={addNewForm}
          >
            Add New
          </button>
          {inside && (
            <button className="p-2 bg-ascent text-primary rounded-md hover:bg-hover">
              Save
            </button>
          )}
          {!inside && (
            <button
              className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
