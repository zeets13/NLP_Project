import ChatBubble from "./ChatBubble";
import ResultCard from "./ResultCard";

export default function ChatWindow({messages}) {
  return (
    <main className="flex-1 overflow-y-auto px-8 py-8">

      
            {messages.map((msg, index) => (

                <ChatBubble
                    key={index}
                    sender={msg.sender}
                    message={msg.text}
                />

            ))}

      {/*<ResultCard />*/}

    </main>
  );
}