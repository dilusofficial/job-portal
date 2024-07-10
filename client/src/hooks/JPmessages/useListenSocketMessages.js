import { useDispatch, useSelector } from "react-redux";
import { useSocketContext } from "../../context/SocketContext";
import { useEffect } from "react";
import { setConversationMessages } from "../../slices/JPMessagesSlice";

const useListenSocketMessages = () => {
  const { socket } = useSocketContext();
  const { conversationMessages } = useSelector((state) => state.jpMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      dispatch(setConversationMessages([...conversationMessages, newMessage]));
    });
    return () => socket?.off("newMessage");
  }, [socket, conversationMessages, setConversationMessages]);
};

export default useListenSocketMessages;
