import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedConversation: null,
  conversationMessages: [],
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
  },
});

export default jpMessagesSlice.reducer;
export const {
  setConversationMessages,
  setSelectedConversation,
  resetMessages,
} = jpMessagesSlice.actions;
