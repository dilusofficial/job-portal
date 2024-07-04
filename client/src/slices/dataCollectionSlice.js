import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  educationDetails: "current",
  educationColor: "text-ascent",
  workDetails: "pending",
  workColor: "text-gray-400",
  professionalDetails: "pending",
  professionalColor: "text-gray-400",
  preferences: "pending",
  preferencesColor: "text-gray-400",
  education: [{}],
  work: [{}],
  projects: [{}],
  certificates: [{}],
  fullName: "",
  age: "",
  email: "",
  address: "",
  dateOfBirth: "",
  profilePic: "",
  qualification: "",
  portfolio: "",
  github: "",
  resume: "",
  currentSalary: "",
  expectedSalary: "",
  totalExperience: "",
  preferredLocation: "",
  skills: "",
  languages: "",
  about: "",
};

const dataCollectionSlice = createSlice({
  name: "dataCollection",
  initialState,
  reducers: {
    setEducationDetails: (state, { payload }) => {
      state.educationDetails = payload;
      if (payload === "pending") {
        state.educationColor = "text-gray-400";
      } else if (payload === "current") {
        state.educationColor = "text-ascent";
      } else if (payload === "completed") {
        state.educationColor = "text-green-700";
      }
    },
    setWorkDetails: (state, { payload }) => {
      state.workDetails = payload;
      if (payload === "pending") {
        state.workColor = "text-gray-400";
      } else if (payload === "current") {
        state.workColor = "text-ascent";
      } else if (payload === "completed") {
        state.workColor = "text-green-700";
      }
    },
    setProfessionalDetails: (state, { payload }) => {
      state.professionalDetails = payload;
      if (payload === "pending") {
        state.professionalColor = "text-gray-400";
      } else if (payload === "current") {
        state.professionalColor = "text-ascent";
      } else if (payload === "completed") {
        state.professionalColor = "text-green-700";
      }
    },
    setPreferences: (state, { payload }) => {
      state.preferences = payload;
      if (payload === "pending") {
        state.preferencesColor = "text-gray-400";
      } else if (payload === "current") {
        state.preferencesColor = "text-ascent";
      } else if (payload === "completed") {
        state.preferencesColor = "text-green-700";
      }
    },
    setWork: (state, { payload }) => {
      state.work = payload;
    },
    setEducation: (state, { payload }) => {
      state.education = payload;
    },
    setProjects: (state, { payload }) => {
      state.projects = payload;
    },
    setCertificates: (state, { payload }) => {
      state.certificates = payload;
    },
    setFullName: (state, { payload }) => {
      state.fullName = payload;
    },
    setResume: (state, { payload }) => {
      state.resume = payload;
    },
    setCurrentSalary: (state, { payload }) => {
      state.currentSalary = payload;
    },
    setExpectedSalary: (state, { payload }) => {
      state.expectedSalary = payload;
    },
    setTotalExperience: (state, { payload }) => {
      state.totalExperience = payload;
    },
    setPrefferedLocation: (state, { payload }) => {
      state.preferredLocation = payload;
    },
    setskills: (state, { payload }) => {
      state.skills = payload;
    },
    setLanguages: (state, { payload }) => {
      state.languages = payload;
    },
    setAbout: (state, { payload }) => {
      state.about = payload;
    },
    setAge: (state, { payload }) => {
      state.age = payload;
    },
    setAddress: (state, { payload }) => {
      state.address = payload;
    },
    setDateOfBirth: (state, { payload }) => {
      state.dateOfBirth = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setPortfolio: (state, { payload }) => {
      state.portfolio = payload;
    },
    setGithub: (state, { payload }) => {
      state.github = payload;
    },
    setProfilePic: (state, { payload }) => {
      state.profilePic = payload;
    },
    setQualification: (state, { payload }) => {
      state.qualification = payload;
    },
    resetData: (state) => {
      state.education = [{}];
      state.work = [{}];
      state.projects = [{}];
      state.certificates = [{}];
      state.fullName = "";
      state.resume = "";
      state.currentSalary = "";
      state.expectedSalary = "";
      state.totalExperience = "";
      state.preferredLocation = "";
      state.skills = "";
      state.languages = "";
      state.about = "";
      state.age = "";
      state.email = "";
      state.address = "";
      state.dateOfBirth = "";
      state.profilePic = "";
      state.qualification = "";
      state.portfolio = "";
      state.github = "";
    },
  },
});

export default dataCollectionSlice.reducer;
export const {
  setEducationDetails,
  setPreferences,
  setProfessionalDetails,
  setWorkDetails,
  setAbout,
  setCertificates,
  setCurrentSalary,
  setEducation,
  setExpectedSalary,
  setFullName,
  setLanguages,
  setPrefferedLocation,
  setProjects,
  setResume,
  setTotalExperience,
  setWork,
  setskills,
  setAddress,
  setAge,
  setDateOfBirth,
  setEmail,
  setGithub,
  setPortfolio,
  setProfilePic,
  setQualification,
  resetData,
} = dataCollectionSlice.actions;
