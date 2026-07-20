import ChatBubble from "./ChatBubble";
import ResultCard from "./ResultCard";
import { useEffect, useRef } from "react";
import TypingBubble from "./TypingBubble";


export default function ChatWindow({messages, loading}) {
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <main ref={chatRef} className="flex-1 overflow-y-auto px-8 py-8 pb-40">

      
            {messages.map((msg, index) => (

                <ChatBubble
                    key={index}
                    sender={msg.sender}
                    message={msg.text}
                    
                />

            ))}
            {loading && <TypingBubble />}

      {/*<ResultCard />*/}

    </main>
  );
}