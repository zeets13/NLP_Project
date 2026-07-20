import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import api from "../api/api";
import { useState } from "react";

export default function ChatPage() {
  const [loading, setLoading] = useState(false);
   const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm here to help detect harmful speech."
    }
  ]);

  // Store current input
  const [input, setInput] = useState("");
  
  const sendMessage = async () => {

  if (!input.trim()) return;

  const userMessage = input;

  // Show user's message immediately
  setMessages(prev => [
    ...prev,
    {
      sender: "user",
      text: userMessage
    }
  ]);

  // Clear input
  setInput("");
  setLoading(true);
  try {
    
    const response = await api.post("/predict", {
      text: userMessage
    });
    await new Promise(resolve => setTimeout(resolve, 1200));

    // Add bot response
    setLoading(false);

    setMessages(prev => [
      ...prev,
      {
        sender: "bot",
        text: response.data.message
      }
    ]);

  } catch (error) {

    console.log(error);
    console.log(error.response);
    console.log(error.message);

    setMessages(prev => [
      ...prev,
      {
        sender: "bot",
        text: "Sorry, something went wrong."
      }
    ]);

  }

};
  return (
    <section className="h-screen bg-[#211c1c] flex flex-col">

      <Navbar />

      <ChatWindow 
        messages={messages}
        loading={loading}

        />

      <MessageInput 
         input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        />

    </section>
  );
}