import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicDetails: "current",
  basicColor: "text-ascent",
  educationDetails: "pending",
  educationColor: "text-gray-400",
  workDetails: "pending",
  workColor: "text-gray-400",
  professionalDetails: "pending",
  professionalColor: "text-gray-400",
  preferences: "pending",
  preferencesColor: "text-gray-400",
};

const dataCollectionSlice = createSlice({
  name: "dataCollection",
  initialState,
  reducers: {
    setBasicDetails: (state, { payload }) => {
      state.basicDetails = payload;
      if (payload === "pending") {
        state.basicColor = "text-gray-400";
      } else if (payload === "current") {
        state.basicColor = "text-ascent";
      } else if (payload === "completed") {
        state.basicColor = "text-green-700";
      }
    },
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
  },
});

export default dataCollectionSlice.reducer;
export const {
  setBasicDetails,
  setEducationDetails,
  setPreferences,
  setProfessionalDetails,
  setWorkDetails,
} = dataCollectionSlice.actions;
