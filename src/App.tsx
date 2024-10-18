import { Dashboard } from "./components/Dashboard";
import Download from "./components/Download";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar"; // Adjusted for .js if Loader is a .js file
import Statistics from "./components/Statistics";
import Team from "./components/Team";
import About from "./components/ِAbout";

function App() {
    return (
        <>
            <Loader />
            <div className="box-layout">  
                <Navbar />
                <Hero />
                <About />
                <Statistics />
                <Feature />
                <Dashboard />
                <Download />
                <Team />
                <Footer />
            </div>
        </>
    );
}

export default App;
