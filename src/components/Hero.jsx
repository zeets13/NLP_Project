import {FaFacebookMessenger, FaRobot} from "react-icons/fa"
import ChatPage from "../pages/ChatPage"
import { useNavigate } from "react-router-dom";

export default function ChatWindow() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col mx-auto ">

      <div className="flex flex-col justify-center items-center py-40 ">

        <div className="text-7xl">
          <FaRobot size={80} className="text-white" />

          
        </div>

        <h1 className="text-6xl font-bold mt-6 text-white text-center">

          Welcome to HateShield AI

        </h1>

        <p className="text-gray-200 mt-4">

          Detect harmful speech with AI-powered moderation.

        </p>
        
        <div className="mt-8">
          <button onClick={() => navigate("/chat")}
             className="cursor-pointer bg-taupe-800 text-white text-lg tracking-[0.05em] uppercase font-bold rounded-full border-2 px-8 py-2 font-semibold hover:bg-white hover:text-black transition">
            Start
          </button>
        </div>

        

        

        


      </div>
      {/*
      <div className="flex-1 overflow-y-auto py-10">

        <Chats
          sender="user"
          message="I hate you."
        />
        </div>
      
      <MessageInput/>
      */}
      

  

    </section>
  );
}