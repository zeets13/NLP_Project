import { SendHorizontal } from "lucide-react";
import { FaPaperPlane } from "react-icons/fa";

export default function MessageInput() {
  return (
    <div className="flex justify-center pb-5">

      <div className="w-full max-w-5xl  bg-black rounded-xl flex items-center px-6 py-5">

        <input
          className="bg-transparent flex-1 outline-none text-white placeholder:text-oklch(26.9% 0 none)"
          placeholder="Type your message..."
        />

        <button className="cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

        </button>

      </div>

    </div>
  );
}