import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
            {/* header */}
            <header>
                <Header />
                <section>
                    <LatestNews />
                </section>
            </header>

            {/* navbar */}
            <nav className="container mx-auto">
                <Navbar />
            </nav>

            {/* main */}
            <main className="container mx-auto py-5 grid grid-cols-12 gap-5">
                <aside className="col-span-3">
                    <LeftNavbar />
                </aside>
                <div className="main-content col-span-6">
                    Middle
                </div>
                <aside className="col-span-3">
                    Right
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;