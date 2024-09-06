"use client";
import React, { useState } from "react";
import { socialLogin, login } from "@/app/actions/index";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = (event: any) => {
        if (event.target.id == "email") {
            setEmail(event.target.value);
        } else if (event.target.id == "password") {
            setPassword(event.target.value);
        }
    }
    const handleSocial = async (event: any) =>{
        event.preventDefault();
        try{
            const res = socialLogin('google');
            if(res){
                console.log(res);
            } else{
                console.log("Something went wrong");
            }
        } catch(err: any) {
            console.log("Something went wrong");
        }
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const formData = {
                email: email,
                password: password
            };
            const res = login(formData);
            if (!res) {

            } else {
                router.push("/dashboard");
            }
        } catch (error: any) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <form>
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5 justify-center">
                                <h1 className="text-3xl">SIH</h1>
                            </div>
                            <div className="mt-5">
                                <label
                                    className="font-semibold text-sm text-gray-600 pb-1 block"
                                    htmlFor="login"
                                >
                                    E-mail
                                </label>
                                <input
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                    type="text"
                                    id="email"
                                    onChange={handleChange}
                                />
                                <label
                                    className="font-semibold text-sm text-gray-600 pb-1 block"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                    type="password"
                                    id="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="text-right mb-4">
                                <a
                                    className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
                                    href="#"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="mt-5">
                                <button
                                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                    onClick={handleSubmit}
                                >
                                    Log in
                                </button>
                            </div>
                        </div>
                    </form>
                    <form className="my-5">
                        <div className="flex justify-center w-full items-center">
                            <div>
                                <button
                                    onClick={handleSocial}
                                    className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                >
                                    <FcGoogle className="text-3xl" />
                                    <span className="ml-2">Sign in with Google</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
