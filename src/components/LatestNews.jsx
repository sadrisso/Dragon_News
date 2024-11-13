import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="container flex mx-auto items-center gap-2 p-2 bg-base-200">
            <div className="bg-[#D72050] text-white px-4 py-2">
                Latest
            </div>
            <Marquee pauseOnHover={true} speed={80}>
                <div className="space-x-10">
                    <Link to="/news">Lorem ipsum dolor sit, amet Lorem ipsum dolor sit</Link>
                    <Link to="/news">This is news two about keeds and older persons</Link>
                    <Link to="/news">Here you can find sports news and comedy shows</Link>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;