import React, { useState } from "react";
import EducationElt from "./EducationElt";
import { useDispatch, useSelector } from "react-redux";
import {
  setEducation,
  setEducationDetails,
  setWorkDetails,
} from "../../slices/dataCollectionSlice";

export default function EducationDetail() {
  const { education } = useSelector((state) => state.dataCollection);
  const [educationDetail, setEducationDetail] = useState(education || [{}]);

  const dispatch = useDispatch();

  function handleNext() {
    dispatch(setEducation(educationDetail));
    dispatch(setEducationDetails("completed"));
    dispatch(setWorkDetails("current"));
    window.scrollTo(0, 0);
  }

  function handleChange(index, field, value) {
    const newEducationDetail = [...educationDetail];
    newEducationDetail[index] = {
      ...newEducationDetail[index],
      [field]: value,
    };
    setEducationDetail(newEducationDetail);
  }

  function addNewForm() {
    setEducationDetail([...educationDetail, {}]);
  }

  function removeForm(index) {
    const updated = educationDetail.filter((_, i) => i !== index);
    setEducationDetail(updated);
  }

  return (
    <div className="p-4 bg-secondary min-h-96 w-11/12 lg:w-1/2 rounded-lg mt-3">
      <h1 className="text-xl my-2">Education</h1>
      {educationDetail.map((elt, index) => (
        <EducationElt
          key={index}
          index={index}
          educationDetail={elt}
          handleChange={handleChange}
          handleRemove={removeForm}
        />
      ))}

      <div>
        <div className="flex justify-end">
          <button
            onClick={addNewForm}
            className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
          >
            Add New
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
