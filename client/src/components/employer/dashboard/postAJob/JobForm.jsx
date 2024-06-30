import React from "react";
import ProfileFormInputElt from "../ProfileFormInputElt";
import ProfileInputSelectElt from "../ProfileInputSelectElt";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setCategory,
  setDeadline,
  setDescription,
  setExperience,
  setGender,
  setJobLocation,
  setJobTitle,
  setJobType,
  setQualification,
  setSalary,
  setSkills,
} from "../../../../slices/employerPostJobSlice";
import { usePostNewJobMutation } from "../../../../slices/employerApiSlice";
import { toast } from "react-toastify";
import Loading from "../../../Loading";

export default function JobForm() {
  const {
    jobTitle,
    description,
    category,
    jobType,
    qualification,
    experience,
    gender,
    skills,
    deadline,
    jobLocation,
    salary,
  } = useSelector((state) => state.employerPostJob);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postNewJob, { isLoading }] = usePostNewJobMutation();

  const handlePost = async () => {
    try {
      const res = await postNewJob({
        jobTitle,
        description,
        category,
        jobType,
        qualification,
        experience,
        gender,
        skills,
        deadline,
        jobLocation,
        salary,
      }).unwrap();
      if (res.msg === "Job added successfully") {
        toast.success("Details successfully added");
        dispatch(setJobTitle(""));
        dispatch(setDescription(""));
        dispatch(setCategory("Healthcare & Medical"));
        dispatch(setJobType("Full-time"));
        dispatch(setQualification("Certificate"));
        dispatch(setExperience("All"));
        dispatch(setGender("All"))
        dispatch(setSkills(""))
        dispatch(setDeadline(""))
        dispatch(setJobLocation("On-site"))
        dispatch(setSalary(""))
        navigate("/employer/dashboard/manage-jobs");
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };

  return (
    <div className="my-4">
      <ProfileFormInputElt
        title={"Job Title"}
        type={"text"}
        value={jobTitle}
        onchange={(e) => dispatch(setJobTitle(e.target.value))}
        placeholder={"Job Name"}
      />
      <div className="form-row">
        <label className="form-label">Job description</label>
        <div className="flex items-center">
          <textarea
            className="w-full py-1 px-3 rounded-lg bg-background2 border border-gray-300 text-gray-900"
            placeholder={"Description"}
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
            rows={10}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <ProfileInputSelectElt
          title={"Job Category"}
          value={category}
          onchange={(e) => dispatch(setCategory(e.target.value))}
          list={[
            "Healthcare & Medical",
            "Software Development & IT",
            "Finance & Accounting",
            "Education & Training",
            "Engineering & Technical",
            "Construction & Skilled Trades",
            "Sales, Marketing & Advertising",
            "Customer Service & Support",
            "Human Resources & Recruitment",
            "Management & Executive",
          ]}
        />
        <ProfileInputSelectElt
          title={"Job Type"}
          list={["Full-time", "Part-time", "Internship"]}
          value={jobType}
          onchange={(e) => dispatch(setJobType(e.target.value))}
        />
        <ProfileInputSelectElt
          title={"Qualification"}
          value={qualification}
          onchange={(e) => dispatch(setQualification(e.target.value))}
          list={[
            "Certificate",
            "Diploma",
            "Bachelors Degree",
            "Masters Degree",
            "Doctorate",
          ]}
        />
        <ProfileInputSelectElt
          title={"Experience"}
          value={experience}
          onchange={(e) => dispatch(setExperience(e.target.value))}
          list={["All", "fresher", "0-1", "1-2", "2-4", "4-6", ">6"]}
        />
        <ProfileInputSelectElt
          title={"Preffered Gender"}
          value={gender}
          onchange={(e) => dispatch(setGender(e.target.value))}
          list={["All", "Male", "Female"]}
        />
        <ProfileFormInputElt
          title={"Application Deadline"}
          value={deadline}
          onchange={(e) => dispatch(setDeadline(e.target.value))}
          type={"date"}
        />
        <ProfileInputSelectElt
          title={"Job Location"}
          value={jobLocation}
          onchange={(e) => dispatch(setJobLocation(e.target.value))}
          list={["On-site", "Remote", "W-F-H", "Hybrid"]}
        />
        <ProfileFormInputElt
          title={"Salary"}
          type={"text"}
          value={salary}
          onchange={(e) => dispatch(setSalary(e.target.value))}
        />
      </div>
      <ProfileFormInputElt
        title={"Skills required"}
        type={"text"}
        value={skills}
        onchange={(e) => dispatch(setSkills(e.target.value))}
        placeholder={"Html, css, python,"}
      />
      <button
        onClick={handlePost}
        disabled={isLoading}
        className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover"
      >
        Post
      </button>
      {isLoading && <Loading />}
    </div>
  );
}
