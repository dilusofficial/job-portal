import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useEditSingleJobMutation,
  useGetMySingleJobQuery,
} from "../../../../slices/employerApiSlice";
import Loading from "../../../Loading";
import { Identity } from "twilio/lib/twiml/VoiceResponse";
import {
  resetAll,
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
import ProfileFormInputElt from "../ProfileFormInputElt";
import ProfileInputSelectElt from "../ProfileInputSelectElt";
import { toast } from "react-toastify";

export default function EditJobForm() {
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
  const { id } = useParams();
  const { data, isLoading: loadingData } = useGetMySingleJobQuery(id);
  const [editSingleJob, { isLoading }] = useEditSingleJobMutation();

  const handleUpdate = async () => {
    try {
      const res = await editSingleJob({
        id,
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
      if (res.msg === "Job updated successfully") {
        toast.success("job updated successfully");
        dispatch(resetAll());
        navigate("/employer/dashboard/manage-jobs");
        window.scrollTo(0, 0);
      } else {
        toast.error(res.msg);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };

  useEffect(() => {
    if (data) {
      const formatedDate = new Date(data.deadline);
      const dateToShow = formatedDate.toISOString().split("T")[0];
      dispatch(setJobTitle(data.jobTitle));
      dispatch(setDescription(data.description));
      dispatch(setCategory(data.category));
      dispatch(setJobType(data.jobType));
      dispatch(setQualification(data.qualification));
      dispatch(setExperience(data.experience));
      dispatch(setGender(data.gender));
      dispatch(setSkills(data.skills.join(", ")));
      dispatch(setDeadline(dateToShow));
      dispatch(setJobLocation(data.jobLocation));
      dispatch(setSalary(data.salary));
    }
  }, [loadingData]);

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
      <div className=" flex gap-3">
        <Link
          onClick={() => {
            dispatch(resetAll());
            window.scrollTo(0, 0);
          }}
          to={"/employer/dashboard/manage-jobs"}
          className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover"
        >
          Back
        </Link>
        <button
          onClick={handleUpdate}
          disabled={isLoading}
          className="p-3 rounded-lg bg-ascent text-secondary hover:bg-hover"
        >
          Update
        </button>
      </div>

      {isLoading && <Loading />}
    </div>
  );
}
