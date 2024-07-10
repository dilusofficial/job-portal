import React, { useEffect } from "react";
import ShowMessages from "./ShowMessages";
import NoChatSelected from "./NoChatSelected";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedConversation } from "../../../slices/JPMessagesSlice";

export default function JPMessageContainer() {
  const { selectedConversation } = useSelector((state) => state.jpMessages);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setSelectedConversation(null));
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col w-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-gray-300 px-4 py-3 rounded mb-2">
            <span className="text-gray-400">To:</span>{" "}
            <span className="text-ascent text-lg">
              {selectedConversation.jsId
                ? selectedConversation.jsId.fullName
                : selectedConversation.emId
                ? selectedConversation.emId.companyName
                : "user"}
            </span>
          </div>
          <ShowMessages />
        </>
      )}
    </div>
  );
}
