import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SectionHelp from "../components/SectionHelp";

export default function AppLayout({ children }) {
    return (
        <div className={'bg-darkBlue font-inter'}>
            <Navbar/>
            <main>
                {children}
                <SectionHelp/>
            </main>
            <Footer/>
        </div>
    );
}