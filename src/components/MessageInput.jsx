import { SendHorizontal } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";

export default function MessageInput() {
  return (
    <div className="flex justify-center mt-12">

      <div className="w-full max-w-5xl border-2 border-white/75 bg-white/25 rounded-xl flex items-center px-6 py-4">

        <input
          className="bg-transparent flex-1 outline-none text-gray-800 placeholder:text-gray-800"
          placeholder="Type your message..."
        />

        <button className="cursor-pointer">

          <FaPaperPlane size={25} className="text-gray-800" />

        </button>

      </div>

    </div>
  );
}