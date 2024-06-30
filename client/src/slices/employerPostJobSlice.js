import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobTitle: "",
  description: "",
  category: "Healthcare & Medical",
  jobType: "Full-time",
  qualification: "Certificate",
  experience: "All",
  gender: "All",
  skills: "",
  deadline: "",
  jobLocation: "On-site",
  salary: "",
};

const employerPostJobSlice = createSlice({
  name: "employerPostJob",
  initialState,
  reducers: {
    setJobTitle: (state, { payload }) => {
      state.jobTitle = payload;
    },
    setDescription: (state, { payload }) => {
      state.description = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setJobType: (state, { payload }) => {
      state.jobType = payload;
    },
    setQualification: (state, { payload }) => {
      state.qualification = payload;
    },
    setExperience: (state, { payload }) => {
      state.experience = payload;
    },
    setGender: (state, { payload }) => {
      state.gender = payload;
    },
    setSkills: (state, { payload }) => {
      state.skills = payload;
    },
    setDeadline: (state, { payload }) => {
      state.deadline = payload;
    },
    setJobLocation: (state, { payload }) => {
      state.jobLocation = payload;
    },
    setSalary: (state, { payload }) => {
      state.salary = payload;
    },
  },
});

export default employerPostJobSlice.reducer;
export const {
  setJobTitle,
  setDescription,
  setCategory,
  setJobType,
  setDeadline,
  setExperience,
  setGender,
  setJobLocation,
  setQualification,
  setSalary,
  setSkills,
} = employerPostJobSlice.actions;
