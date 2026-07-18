import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
export default function Home(){
    return(
        <>
        <section className="min-h-screen bg-[url('/src/assets/bg.png')] bg-cover bg-center">
            <Navbar/>
            
            <Hero/>

        </section>
        </>
        

    );
}
