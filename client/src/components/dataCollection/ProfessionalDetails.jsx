import React, { useState } from "react";
import ProjectElt from "./ProjectElt";
import { useDispatch } from "react-redux";
import {
  setPreferences,
  setProfessionalDetails,
  setWorkDetails,
} from "../../slices/dataCollectionSlice";
import Certificate from "./Certificate";

export default function ProfessionalDetails() {
  const [newProject, setNewProject] = useState(1);
  const [newCertificate, setNewCertificate] = useState(1);
  const dispatch = useDispatch();
  function handleBack() {
    dispatch(setProfessionalDetails("pending"));
    dispatch(setWorkDetails("current"));
  }
  function handleNext() {
    dispatch(setProfessionalDetails("completed"));
    dispatch(setPreferences("current"));
  }
  return (
    <div className="p-4 bg-secondary w-11/12 lg:w-1/2 rounded-lg mt-3">
      <h1 className="text-xl my-2">Personal Projects</h1>
      {Array.from({ length: newProject }).map((_, index) => (
        <ProjectElt key={index} />
      ))}

      <div className="flex justify-end">
        <button
          className="p-2 bg-ascent text-primary rounded-md hover:bg-hover"
          onClick={() => setNewProject(newProject + 1)}
        >
          Add New
        </button>
      </div>
      <h1 className="text-xl my-2">Certificates</h1>
      {Array.from({ length: newCertificate }).map((_, index) => (
        <Certificate key={index} />
      ))}

      <div className="flex justify-end">
        <button
          className="p-2 mb-3 bg-ascent text-primary rounded-md hover:bg-hover"
          onClick={() => setNewCertificate(newCertificate + 1)}
        >
          Add New
        </button>
      </div>
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
