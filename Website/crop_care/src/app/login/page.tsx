"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { socialLogin, login } from "@/app/actions/index";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const session = useSession();
    useEffect(() => {
      if(session.status === "authenticated"){
          redirect('/dashboard');
      }
    }, [session]);
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
    const handleSocial = async (event: any) => {
        event.preventDefault();
        try {
            const res = socialLogin('google');
            if (res) {
                console.log(res);
            } else {
                console.log("Something went wrong");
            }
        } catch (err: any) {
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
        <div className='flex flex-col items-center justify-center w-[50%] mx-auto'>
            <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                <div className='flex flex-col items-center justify-center w-full'>
                    <h1 className='text-5xl text-center font-Kodchasan'>
                        <Image alt="" src='/assets/logo.png' className='mx-auto' width={50} height={50} />
                        AgriCure
                    </h1>
                </div>
            </div>
            <div className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0">
                <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
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
                    <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                        <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">or</p>
                    </div>
                </div>
                <div className="flex-auto p-6">
                    <form role="form text-left">
                        <div className="mb-4">
                            <input aria-describedby="email-addon" aria-label="Email" placeholder="Email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email" id="email" onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <input aria-describedby="password-addon" aria-label="Password" placeholder="Password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password" id="password" onChange={handleChange} />
                        </div>

                        <div className="text-center">
                            <button className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white" type="button" onClick={handleSubmit}>Login</button>
                        </div>
                        <p className="mt-4 mb-0 leading-normal text-sm">Don&apos;t have an account? <a className="font-bold text-slate-700" href="/register">Sign In</a></p>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Login