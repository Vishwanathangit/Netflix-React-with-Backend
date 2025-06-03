import React, { useState } from 'react';
import bgImage from '../assets/images/bg.jpg';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [error, seterror] = useState('');
    const [emailerr, setemailerr] = useState('');
    const [passerr, setpasserr] = useState('');
    const navigate = useNavigate();

    function handleemail(eve) {
        setemail(eve.target.value);
        setemailerr('');
    }

    function handlepass(eve) {
        setpass(eve.target.value);
        setpasserr('');
    }

    function check() {
        let hasError = false;


        if (!email || email.trim() === '') {
            setemailerr('Email or mobile number is required');
            hasError = true;
        } else {
            setemailerr('');
        }

        if (!pass || pass.trim() === '') {
            setpasserr('Password is required');
            hasError = true;
        } else {
            setpasserr('');
        }

        if (!hasError) {
            axios
                .get(`https://netflix-react-with-backend.onrender.com/login?mobile=${email}&password=${pass}`, {withCredentials: true})
                .then(function (data) {
                    if (data.data === true) {
                        navigate('/success');
                    } else {
                        navigate('/fail');
                    }
                })
                .catch((err) => {
                    console.error('API error:', err);
                    seterror('An error occurred. Please try again.');
                });
        }
    }

    return (
        <div
            className="h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute top-6 left-30 z-10">
                <img src={logo} alt="Netflix Logo" className="w-40 h-auto" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-black/75 w-full max-w-md p-8 rounded-md text-white">
                    <h1 className="text-3xl font-bold mb-6">Sign In</h1>
                    <div className="space-y-4">
                        <div>
                            <input
                                onChange={handleemail}
                                type="text"
                                name="mobile"
                                placeholder="Email or mobile number"
                                className="w-full p-3 bg-gray-500/30 text-white rounded-md border border-gray-500 focus:outline-none focus:border-white"
                                value={email}
                            />
                            {emailerr && (
                                <p className="mt-1 text-sm text-red-500">{emailerr}</p>
                            )}
                        </div>
                        <div>
                            <input
                                onChange={handlepass}
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full p-3 bg-gray-500/30 text-white rounded-md border border-gray-500 focus:outline-none focus:border-white"
                                value={pass}
                            />
                            {passerr && (
                                <p className="mt-1 text-sm text-red-500">{passerr}</p>
                            )}
                        </div>
                        <button
                            onClick={check}
                            className="w-full p-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="text-center my-4">
                        <h3 className="text-gray-400 font-semibold">OR</h3>
                    </div>
                    <button className="w-full p-3 bg-gray-500/30 text-white rounded-md border border-gray-500 hover:border-white transition">
                        Use a sign-in code
                    </button>
                    <p className="text-center mt-4 text-gray-400 hover:underline cursor-pointer">
                        Forgot password?
                    </p>
                    <div className="flex items-center mt-4">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-gray-400">
                            Remember me
                        </label>
                    </div>
                    <p className="mt-6 text-gray-400">
                        New to Netflix?{' '}
                        <a href="#" className="text-white hover:underline">
                            Sign up now.
                        </a>
                    </p>
                    <p className="mt-4 text-sm text-gray-500">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                        <a href="#" className="text-blue-500 hover:underline">
                            Learn more.
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;