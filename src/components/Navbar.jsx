import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between py-5 text-center items-center">
            <div>

            </div>
            <div className="space-x-8">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex gap-3 items-center justify-center mt-3 md:mt-0">
                <i class="fa-solid fa-user text-2xl"></i>
                <NavLink to="/auth/login"><button className="btn btn-neutral rounded-none">Login</button></NavLink>
            </div>
        </div>
    );
};

export default Navbar;