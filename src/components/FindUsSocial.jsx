import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsSocial = () => {
    return (
        <div>
            <div className="font-semibold mb-3 text-xl">
                Find Us On
            </div>
            <div className="join join-vertical flex">
                <button className="btn join-item bg-base-100 text-blue-400"><FaFacebook />Facebook</button>
                <button className="btn join-item bg-base-100 text-red-400"><FaInstagram />Instagram</button>
                <button className="btn join-item bg-base-100 text-yellow-400"><FaTwitter /> Twetter</button>
            </div>
        </div>
    );
};

export default FindUsSocial;