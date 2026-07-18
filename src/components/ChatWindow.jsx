import ChatBubble from "./ChatBubble";
import ResultCard from "./ResultCard";

export default function ChatWindow() {
  return (
    <main className="flex-1 overflow-y-auto px-8 py-8">

      <ChatBubble
        sender="bot"
        message="Hello! I'm here to help detect harmful speech."
      />

      <ChatBubble
        sender="user"
        message="I hate you."
      />

      <ResultCard />

    </main>
  );
}