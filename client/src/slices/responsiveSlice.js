import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showEmployerSmallBar: false,
  showEmployerCandidatesFilter: false,
  showEmployerCompanyFilter: false,
  showEmployerSmallDashboard: false,
};
const responsiveSlice = createSlice({
  name: "responsive",
  initialState,
  reducers: {
    toggleEmployerSmallBar: (state) => {
      state.showEmployerSmallBar = !state.showEmployerSmallBar;
    },
    toggleEmployerCandidatesFilter: (state) => {
      state.showEmployerCandidatesFilter = !state.showEmployerCandidatesFilter;
    },
    toggleEmployerCompanyFilter: (state) => {
      state.showEmployerCompanyFilter = !state.showEmployerCompanyFilter;
    },
    toggleEmployerSmallDashboard: (state) => {
      state.showEmployerSmallDashboard = !state.showEmployerSmallDashboard;
    },
  },
});

export default responsiveSlice.reducer;
export const {
  toggleEmployerSmallBar,
  toggleEmployerCandidatesFilter,
  toggleEmployerCompanyFilter,
  toggleEmployerSmallDashboard,
} = responsiveSlice.actions;
