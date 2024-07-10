import React from "react";
import ConversationElt from "./ConversationElt";
import { useSelector } from "react-redux";

export default function Conversation() {
  const { userInfo, type } = useSelector((state) => state.allUsers);
  return (
    <div className="py-2 flex flex-col gap-2 overflow-auto">
      {type === "employer" &&
        userInfo?.emconnections.length > 0 &&
        userInfo.emconnections.map((item) => (
          <ConversationElt key={item._id} data={item} />
        ))}
      {type === "jobseeker" &&
        userInfo?.jsconnections.length > 0 &&
        userInfo.jsconnections.map((item) => (
          <ConversationElt key={item._id} data={item} />
        ))}

      {type === "employers" && userInfo?.emconnections.length < 1 && (
        <h1>No chat History</h1>
      )}
      {type === "jobseeker" && userInfo?.jsconnections.length < 1 && (
        <h1>No chat History</h1>
      )}
    </div>
  );
}
