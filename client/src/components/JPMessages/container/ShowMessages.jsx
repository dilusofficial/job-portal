import React, { useEffect, useRef } from "react";
import SingleMessage from "./SingleMessage";
import { useDispatch, useSelector } from "react-redux";
import { useGetMessagesQuery } from "../../../slices/JPMessagesApiSlice";
import Loading from "../../Loading";
import MessageInput from "./MessageInput";
import { setConversationMessages } from "../../../slices/JPMessagesSlice";
import useListenSocketMessages from "../../../hooks/JPmessages/useListenSocketMessages";

export default function ShowMessages() {
  useListenSocketMessages();
  const { selectedConversation, conversationMessages } = useSelector(
    (state) => state.jpMessages
  );
  const { type, EInfo, JSInfo } = useSelector((state) => state.allUsers);
  const senderId = type === "employer" ? EInfo._id : JSInfo._id;
  const receiverId = selectedConversation?.jsId
    ? selectedConversation.jsId._id
    : selectedConversation.emId._id;
  const { data, isLoading, refetch } = useGetMessagesQuery({
    senderId,
    receiverId,
  });
  const lastMessageRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
    dispatch(setConversationMessages(data));
  }, [data]);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div id="mcon" className="px-4 flex-1 overflow-auto">
        {conversationMessages?.length > 0 &&
          conversationMessages.map((item) => (
            <div key={item._id} ref={lastMessageRef}>
              <SingleMessage data={item} />
            </div>
          ))}
      </div>
      <MessageInput refetch={refetch} />
    </>
  );
}