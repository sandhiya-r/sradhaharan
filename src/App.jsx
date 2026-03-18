import { Hero } from "./sections/Hero.jsx";
import { About } from "./sections/About.jsx";
import { Projects } from "./sections/Projects.jsx";
import { Experience } from "./sections/Experience.jsx";
import { Contact } from "./sections/Contact.jsx";
import { Navbar} from "./components/Navbar.jsx";

const App = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Projects/>
                <Experience/>
                <Contact/>
            </main>
        </div>
    )
}

export default App