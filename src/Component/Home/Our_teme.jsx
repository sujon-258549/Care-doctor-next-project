"use client"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Our_time = () => {
    return (
        <div className='w-[90%] mx-auto px-5 py-7 md:py-14'>
            <div className="w-[90%] md:w-[60%] lg:w-[50%] mx-auto">
                <h3 className="text-xl font-bold pt-5 text-[#FF3811] text-center">Team</h3>
                <h3 className="text-2xl md:text-4xl font-bold py-4 text-center">Meet Our Team</h3>
                <p className="text-[16px] text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 md:pt-16'>

                <div className="card card-compact bg-base-100  shadow-xl p-5" style={{ boxShadow: "1px 1px 10px" }} >
                    <div className="">
                        <img className=" rounded-md "
                            src="./image/images/team/2.jpg"
                            alt="Shoes" />
                    </div>

                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Car Engine Plug</h2>
                        <div className="text-center">
                            <h4 className="text-xl"> Engine Expert</h4>


                        </div>
                        <div className="flex justify-center gap-3">
                            <div className="p-2 bg-[#395185] rounded-full text-white">
                                <FaFacebookF className="text-2xl"></FaFacebookF>
                            </div>
                            <div className="p-2 bg-[#55ACEE] rounded-full text-white">
                                <FaTwitter className="text-2xl"></FaTwitter>
                            </div>
                            <div className="p-2 bg-[#0A66C2] rounded-full text-white">
                                <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
                            </div>
                            <div className="p-2 bg-gradient-to-t from-[#F2C141] to-[#9a4a18] rounded-full text-white">
                                <FaInstagram className="text-2xl"></FaInstagram>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card card-compact bg-base-100  shadow-xl p-5" style={{ boxShadow: "1px 1px 10px" }} >
                    <div className="">
                        <img className=" rounded-md "
                            src="./image/images/team/3.jpg"
                            alt="Shoes" />
                    </div>

                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Car Engine Plug</h2>
                        <div className="text-center">
                            <h4 className="text-xl"> Engine Expert</h4>


                        </div>
                        <div className="flex justify-center gap-3">
                            <div className="p-2 bg-[#395185] rounded-full text-white">
                                <FaFacebookF className="text-2xl"></FaFacebookF>
                            </div>
                            <div className="p-2 bg-[#55ACEE] rounded-full text-white">
                                <FaTwitter className="text-2xl"></FaTwitter>
                            </div>
                            <div className="p-2 bg-[#0A66C2] rounded-full text-white">
                                <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
                            </div>
                            <div className="p-2 bg-gradient-to-t from-[#F2C141] to-[#9a4a18] rounded-full text-white">
                                <FaInstagram className="text-2xl"></FaInstagram>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card card-compact bg-base-100  shadow-xl p-5" style={{ boxShadow: "1px 1px 10px" }} >
                    <div className="">
                        <img className=" rounded-md "
                            src="./image/images/team/1.jpg"
                            alt="Shoes" />
                    </div>

                    <div className="card-body">
                        <h2 className="text-xl font-bold text-center">Car Engine Plug</h2>
                        <div className="text-center">
                            <h4 className="text-xl"> Engine Expert</h4>


                        </div>
                        <div className="flex justify-center gap-3">
                            <div className="p-2 bg-[#395185] rounded-full text-white">
                                <FaFacebookF className="text-2xl"></FaFacebookF>
                            </div>
                            <div className="p-2 bg-[#55ACEE] rounded-full text-white">
                                <FaTwitter className="text-2xl"></FaTwitter>
                            </div>
                            <div className="p-2 bg-[#0A66C2] rounded-full text-white">
                                <FaLinkedinIn className="text-2xl"></FaLinkedinIn>
                            </div>
                            <div className="p-2 bg-gradient-to-t from-[#F2C141] to-[#9a4a18] rounded-full text-white">
                                <FaInstagram className="text-2xl"></FaInstagram>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
           
        </div>
    );
}

export default Our_time;
