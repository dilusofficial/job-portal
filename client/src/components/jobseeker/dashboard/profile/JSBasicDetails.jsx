import React from "react";
import FormInput from "../../../FormInput";
import FormSelect from "../../../FormSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddress,
  setAge,
  setData,
  setDateOfBirth,
  setEmail,
  setFullName,
  setProfilePic,
  setQualification,
  setResume,
} from "../../../../slices/dataCollectionSlice";
import { useUpdateBasicDetailsMutation } from "../../../../slices/jobSeekerApiSlice";
import { toast } from "react-toastify";
import Loading from "../../../Loading";

export default function JSBasicDetails({ toggle, togglestate }) {
  const state = useSelector((state) => state.dataCollection);
  const [updateBasicDetails, { isLoading }] = useUpdateBasicDetailsMutation();
  const dispatch = useDispatch();

  async function handleSave() {
    try {
      const res = await updateBasicDetails({
        age: state.age,
        address: state.address,
        dateOfBirth: state.dateOfBirth,
        email: state.email,
        fullName: state.fullName,
        qualification: state.qualification,
      }).unwrap();
      if (res.msg === "success") {
        toggle(!togglestate);
        dispatch(setData(res.updated));
        toast.success("saved");
        window.scrollTo(0, 0);
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  }

  return (
    <div className="p-4 bg-secondary w-full rounded-lg mt-3">
      <FormInput
        title={"Full Name"}
        type={"text"}
        value={state.fullName}
        onchange={(e) => dispatch(setFullName(e.target.value))}
      />
      <FormInput
        title={"Profile image"}
        type={"file"}
        value={state.profilePic}
        onchange={(e) => dispatch(setProfilePic(e.target.value))}
      />
      <FormInput
        title={"Email"}
        type={"email"}
        value={state.email}
        onchange={(e) => dispatch(setEmail(e.target.value))}
      />
      <FormInput
        title={"Resume"}
        type={"file"}
        value={state.resume}
        onchange={(e) => dispatch(setResume(e.target.value))}
      />
      <FormInput
        title={"Age"}
        type={"number"}
        value={state.age}
        onchange={(e) => dispatch(setAge(e.target.value))}
      />
      <FormInput
        title={"Date of Birth"}
        type={"date"}
        value={state.dateOfBirth.toString().slice(0, 10)}
        onchange={(e) => dispatch(setDateOfBirth(e.target.value))}
      />
      <FormInput
        title={"Address"}
        type={"text"}
        value={state.address}
        onchange={(e) => dispatch(setAddress(e.target.value))}
      />
      <FormSelect
        title={"Qualification"}
        list={[
          "Certificate",
          "Diploma",
          "Bachelors Degree",
          "Masters Degree",
          "Doctorate",
        ]}
        value={state.qualification}
        onchange={(e) => dispatch(setQualification(e.target.value))}
      />
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="p-2 bg-ascent text-primary rounded-md hover:bg-hover me-1"
        >
          Save
        </button>
        {isLoading && <Loading />}
      </div>
    </div>
  );
}
