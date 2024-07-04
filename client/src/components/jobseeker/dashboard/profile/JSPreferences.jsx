import React from "react";
import FormInput from "../../../FormInput";
import { useDispatch, useSelector } from "react-redux";
import {
  setAbout,
  setCurrentSalary,
  setExpectedSalary,
  setGithub,
  setLanguages,
  setPortfolio,
  setPrefferedLocation,
  setskills,
  setTotalExperience,
} from "../../../../slices/dataCollectionSlice";

export default function JSPreferences() {
  const state = useSelector((state) => state.dataCollection);
  const dispatch = useDispatch();
  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <FormInput
        title={"Current Salary"}
        type={"number"}
        value={state.currentSalary}
        onchange={(e) => dispatch(setCurrentSalary(e.target.value))}
      />
      <FormInput
        title={"Expected Salary"}
        type={"number"}
        value={state.expectedSalary}
        onchange={(e) => dispatch(setExpectedSalary(e.target.value))}
      />
      <FormInput
        title={"Total Experience"}
        type={"number"}
        value={state.totalExperience}
        onchange={(e) => dispatch(setTotalExperience(e.target.value))}
      />
      <FormInput
        title={"Preferred Locations"}
        type={"text"}
        value={state.preferredLocation}
        onchange={(e) => dispatch(setPrefferedLocation(e.target.value))}
      />
      <FormInput
        title={"Languages"}
        type={"text"}
        value={state.languages}
        onchange={(e) => dispatch(setLanguages(e.target.value))}
      />
      <FormInput
        title={"skills"}
        type={"text"}
        value={state.skills}
        onchange={(e) => dispatch(setskills(e.target.value))}
      />
      <FormInput
        title={"Portfolio"}
        type={"text"}
        value={state.portfolio}
        onchange={(e) => dispatch(setPortfolio(e.target.value))}
      />
      <FormInput
        title={"Github"}
        type={"text"}
        value={state.github}
        onchange={(e) => dispatch(setGithub(e.target.value))}
      />
      <FormInput
        title={"about"}
        type={"text"}
        value={state.about}
        onchange={(e) => dispatch(setAbout(e.target.value))}
      />
      <div className="flex justify-end">
        <button className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1">
          Save
        </button>
      </div>
    </div>
  );
}
