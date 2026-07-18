import { FaRobot } from "react-icons/fa";
import UserBubble from "./UserBubble";
import BotBubble from "./BotBubble";

export default function ChatBubble({ sender, message }) {
  const isUser = sender === "user";

  if (sender === "user") {
    return <UserBubble message={message} />;
  }

  return (
    <BotBubble>
      {message}
    </BotBubble>
  );
}