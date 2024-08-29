
"use client"

import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Page = () => {

    const handleSignUp = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userdata = { name, email, password }
        console.log(userdata)


        axios.post('http://localhost:3000/signup/adduser/api', userdata)
            .then(res => {
                if (res.data) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Succes",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            })




    }
    return (
        <div className='w-[90%] mx-auto px-5 py-10 md:py-20'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>
                <div>
                    <img src="./image/sign/Frame.png" alt="" />
                </div>
                <div>
                    <div className=" bg-gray-50  py-12 sm:px-6 lg:px-8 px-6">
                        <div className="">

                            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                                Sign Up
                            </h2>

                        </div>
                        <div className="mt-8 ">
                            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                                <form onSubmit={handleSignUp}>
                                    <div className='mb-5'>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium leading-5  text-gray-700"
                                        >
                                            Name
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <input
                                                name="name"
                                                placeholder="Enter Your Name"
                                                type="text"
                                                required=""
                                                defaultValue=""
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                            />
                                            <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium leading-5  text-gray-700"
                                        >
                                            Email address
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <input
                                                id="email"
                                                name="email"
                                                placeholder="Enter your Email"
                                                type="email"
                                                required=""
                                                defaultValue=""
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                            />
                                            <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <svg
                                                    className="h-5 w-5 text-red-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium leading-5 text-gray-700"
                                        >
                                            Password
                                        </label>
                                        <div className="mt-1 rounded-md shadow-sm">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder='Enter your password'
                                                required=""
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <span className="block w-full rounded-md shadow-sm">
                                            <button
                                                type="submit"
                                                className="w-full flex justify-center text-xl  py-2 px-4 border border-transparent  font-bold rounded-md text-white bg-[#FF3811] hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"

                                            >
                                                Sign in
                                            </button>
                                        </span>
                                    </div>
                                </form>
                                <div className='text-center'>
                                    <p className='text-center text-[18px] py-5'>Or Sign Up with</p>
                                    <div className='flex gap-5 justify-center pb-5'>
                                        <div className='bg-[#F5F5F8] p-3 rounded-full text-xl'>
                                            <FaFacebookF className='text-[#0A66C2]'></FaFacebookF>
                                        </div>
                                        <div className='bg-[#F5F5F8] p-3 rounded-full text-xl'>
                                            <FaLinkedinIn className='text-[#0A66C2]'></FaLinkedinIn>
                                        </div>
                                        <div className='bg-[#F5F5F8] p-3 rounded-full text-xl'>
                                            <FaGoogle className='text-[#31AA52]'></FaGoogle>
                                        </div>

                                    </div>
                                    <p className='text-[18px]'>Already have an account? <span className='text-[#FF3418] font-semibold'><Link className='font-bold' href={'/login'}>Login</Link></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
