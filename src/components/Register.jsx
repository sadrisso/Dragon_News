import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createNewUser, setUser, updateUser } = useContext(AuthContext)
    const [error, setError] = useState({})
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        if (name.length < 6) {
            setError({ ...error, name: "name must be 6 charactar or long" })
            return;
        }
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setError({ ...error, password: "password must be 6 charactar or long" })
            return;
        }

        createNewUser(email, password)
            .then((res) => {
                setUser(res)
                updateUser({displayName: name, photoURL: photoUrl})
                .then(() => navigate('/'))
                .catch((err) => console.log(err))
                console.log(res)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    return (
        <div className="flex flex-col justify-center items-center mt-10 py-10">
            <div>
                <h1 className="text-4xl font-semibold">Register</h1>
            </div>
            <form className="card-body w-[600px]" onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered"
                        required />
                    {error.name &&
                        <label className="label text-red-500">
                            {error.name}
                        </label>
                    }
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name="photoUrl"
                        placeholder="photo url"
                        className="input input-bordered"
                        required />
                </div>
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
                    {error.password &&
                        <label className="label text-red-500">
                            {error.password}
                        </label>
                    }
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className='font-semibold'>Already have an account? <NavLink to="/auth/login" className="text-blue-500">Login</NavLink></p>
        </div>
    );
};

export default Register;