import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SectionGameHelp from "../components/SectionGameHelp.jsx";

export default function GameLayout({ children }) {
    return (
        <div className={"bg-darkBlue font-inter"}>
            <Navbar />
            <main>
                {children}
                <SectionGameHelp/>
            </main>
            <Footer />
        </div>
    );
}
