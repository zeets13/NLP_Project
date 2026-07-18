import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

export default function ChatPage() {
  return (
    <section className="min-h-screen bg-[#211c1c] bg-cover bg-center flex flex-col">

      <Navbar />

      <ChatWindow />

      <MessageInput />

    </section>
  );
}