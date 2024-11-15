import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        signInUser(email, password)
            .then((res) => console.log("Successfully login", res))
            .catch((err) => console.log(err))
    }


    return (
        <div className="flex justify-center items-center mt-32">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div>
                    <h1 className="text-2xl font-semibold text-center mt-5">Login your account</h1>
                </div>
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mb-5 font-semibold">Don't have any account? <NavLink to="/auth/register" className="text-red-500">Register</NavLink></p>
            </div>
        </div>
    );
};

export default Login;