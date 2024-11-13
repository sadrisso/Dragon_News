import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between py-5">
            <div>

            </div>
            <div className="space-x-8">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex gap-3 items-center">
                <i class="fa-solid fa-user text-2xl"></i>
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;