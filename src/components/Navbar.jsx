import { Bell, UserCircle2 } from "lucide-react";
import { FaUserCheck, FaUserCircle } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="h-20 flex items-center justify-between px-12 pt-5">
      <div className="flex items-center gap-4">

        
        <div className="mx-auto ">


          <h1 className="text-2xl font-bold text-gray-200">

            HateShield AI

          </h1>

          <p className="text-md text-gray-300">

            Promoting Safer Conversations

          </p>

        </div>

      </div>

      <div className="flex items-center">

        <FaUserCircle size={30} className="text-white" />

      </div>

    </nav>
  );
}