import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import Navbar from "../components/Navbar";


const HomeLayout = () => {

    return (
        <div className="font-poppins">
            {/* header */}
            <header className="container mx-auto">
                <Header />
                <LatestNews />
            </header>

            {/* navbar */}
            <nav className="container mx-auto">
                <Navbar />
            </nav>

            {/* main */}
            <main className="container mx-auto py-5 grid md:grid-cols-12 gap-5">
                <aside className="col-span-3">
                    <LeftNavbar />
                </aside>
                <div className="main-content col-span-6">
                    <Outlet />
                </div>
                <aside className="col-span-3">
                    <RightNavbar />
                </aside>
            </main>
        </div>
    );
};


export default HomeLayout;