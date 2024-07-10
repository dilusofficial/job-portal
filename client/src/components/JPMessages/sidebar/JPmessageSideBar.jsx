import React from "react";
import MessageSearch from "./MessageSearch";
import Conversation from "./Conversation";

export default function JPmessageSideBar() {
  return (
    <div className="border-r-2 p-4 flex flex-col w-80">
      <MessageSearch />
      <div className="divider divider-primary"></div>
      <Conversation />
    </div>
  );
}
