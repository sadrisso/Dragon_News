import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)
    console.log(user?.email)

    const logOut = () => {
        signOutUser()
            .then(() => console.log("User signed out successful"))
    }

    return (
        <div className="flex flex-col md:flex-row md:justify-between py-5 text-center items-center">
            <div>
                {user?.email}
            </div>
            <div className="space-x-8">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex gap-3 items-center justify-center mt-3 md:mt-0">
                <i class="fa-solid fa-user text-2xl"></i>
                {user ? <button className="btn rounded-none" onClick={logOut}>Logout</button> :
                    <NavLink to="/auth/login"><button className="btn btn-neutral rounded-none">Login</button></NavLink>}
            </div>
        </div>
    );
};

export default Navbar;