import Navbar from "../components/Navbar"
import ChatWindow from "./ChatWindow"
export default function Home(){
    return(
        <>
        <section className="min-h-screen bg-[url('/src/assets/bg.png')] bg-cover bg-center">
            <Navbar/>
            <div>
                <ChatWindow/>
            </div>

        </section>
        </>
        

    );
}
