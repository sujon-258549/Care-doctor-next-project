"use client"
import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="navber w-[90%] mx-auto px-5">
            <nav className="relative ">
                <div className=" py-4 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <a href="#">
                                <img
                                    className="w-auto h-6 sm:h-7"
                                    src="https://merakiui.com/images/full-logo.svg"
                                    alt="Company Logo"
                                />
                            </a>

                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className=" focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 8h16M4 16h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                        <div
                            className={`${isOpen
                                ? "translate-x-0 opacity-100"
                                : "opacity-0 -translate-x-full"
                                } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
                        >
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                                <a
                                    href="#"
                                    className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 "
                                >
                                    Join Slack
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 "
                                >
                                    Browse Topics
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 "
                                >
                                    Random Item
                                </a>
                                <a
                                    href="#"
                                    className="px-3 py-2 mx-3 mt-2 transition-colors duration-300 transform rounded-md lg:mt-0 "
                                >
                                    Experts
                                </a>
                            </div>

                        </div>
                        <div className="flex items-center mt-4 lg:mt-0 relative">
                            <button>
                                <FaShoppingBag></FaShoppingBag>
                            </button>
                            <label  className="input flex items-center">
                                <input  type="text" className="grow w-2 focus:w-32 border-none focus:z-50" />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                            </label>
                        <button className="btn btn-outline text-[18px] border-[#FF3811] text-[#FF3811] ">Appointment</button>
                    </div>
                </div>
            </div>
        </nav>
        </section >
    );
};

export default Navbar;
