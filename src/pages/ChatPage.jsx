import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

import { useState } from "react";

export default function ChatPage() {
   const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm here to help detect harmful speech."
    }
  ]);

  // Store current input
  const [input, setInput] = useState("");
  
  const sendMessage = () => {

      if (!input.trim()) return;

      setMessages(prev => [

          ...prev,

          {
              sender: "user",
              text: input
          }

      ]);

      setInput("");

  };
  return (
    <section className="min-h-screen bg-[#211c1c] bg-cover bg-center flex flex-col">

      <Navbar />

      <ChatWindow 
        messages={messages}
        />

      <MessageInput 
         input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        />

    </section>
  );
}