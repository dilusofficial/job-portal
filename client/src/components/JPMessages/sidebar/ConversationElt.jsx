import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../../../slices/JPMessagesSlice";

export default function ConversationElt({ data }) {
  const { selectedConversation } = useSelector((state) => state.jpMessages);
  const isSelected = selectedConversation?._id === data._id;
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className={`flex gap-3 items-center hover:bg-primary rounded px-2 py-1 cursor-pointer border-b-2 ${
          isSelected ? "bg-primary" : ""
        }`}
        onClick={() => dispatch(setSelectedConversation(data))}
      >
        <div className="avatar online z-0">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={
                data.jsId
                  ? data.jsId.profilePic
                  : data.emId
                  ? data.emId.logo
                  : "/nouser.png"
              }
              alt="pic"
            />
          </div>
        </div>
        <div>
          <p className="text-base">
            {data.jsId
              ? data.jsId.fullName
              : data.emId
              ? data.emId.companyName
              : "user"}
          </p>
        </div>
      </div>
    </div>
  );
}
