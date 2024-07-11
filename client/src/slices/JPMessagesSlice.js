import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedConversation: null,
  conversationMessages: [],
  showSide: true,
};

const jpMessagesSlice = createSlice({
  name: "jpMessages",
  initialState,
  reducers: {
    setSelectedConversation: (state, { payload }) => {
      state.selectedConversation = payload;
    },
    setConversationMessages: (state, { payload }) => {
      state.conversationMessages = payload;
    },
    resetMessages: (state) => {
      (state.selectedConversation = null), (state.conversationMessages = []);
    },
    toggleShowSide: (state) => {
      state.showSide = !state.showSide;
    },
  },
});

export default jpMessagesSlice.reducer;
export const {
  setConversationMessages,
  setSelectedConversation,
  resetMessages,
  toggleShowSide,
} = jpMessagesSlice.actions;
