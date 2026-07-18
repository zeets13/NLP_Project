import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import { BiHomeHeart } from "react-icons/bi";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/chat" element={<ChatPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;