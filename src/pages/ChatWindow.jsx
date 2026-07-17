import {FaFacebookMessenger, FaRobot} from "react-icons/fa"
import MessageInput from "../components/MessageInput";
export default function ChatWindow() {
  return (
    <section className="flex flex-col mx-auto ">

      <div className="flex flex-col justify-center items-center py-30">

        <div className="text-7xl">
          <FaRobot size={80} className="text-white" />

          
        </div>

        <h1 className="text-6xl font-bold mt-6 text-white">

          Welcome to HateShield AI

        </h1>

        <p className="text-gray-200 mt-4">

          Detect harmful speech with AI-powered moderation.

        </p>

        


      </div>
      <MessageInput/>
      

  

    </section>
  );
}