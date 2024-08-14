"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 20500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
           
               
                <SwiperSlide><div
                    className="w-full bg-center bg-cover h-[38rem]  rounded-md"
                    style={{
                        backgroundImage:
                            'url("./image/images/banner/5.jpg")'
                    }}
                >
                    <div className="flex items-center px-5 md:px-20 w-full h-full rounded-md bg-gradient-to-r from-[#000000c3] to-[#ffffff00]">

                        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                            <div className="text-left">
                                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white  sm:leading-none md:text-6xl">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className="mt-5 sm:flex md:mt-8">
                                    <div className="rounded-md shadow">
                                    <button className="btn btn-outline text-[18px] bg-[#FF3811] border-[#FF3811] text-[#FFF] ">Discover More</button>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <button className="btn btn-outline text-[18px] border-[#ffffff] text-[#fff] ">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>

                </div>

                </SwiperSlide>
               
                <SwiperSlide><div
                    className="w-full bg-center bg-cover h-[38rem]  rounded-md"
                    style={{
                        backgroundImage:
                            'url("./image/images/banner/1.jpg")'
                    }}
                >
                    <div className="flex items-center px-5 md:px-20 w-full h-full rounded-md bg-gradient-to-r from-[#000000c3] to-[#ffffff00]">

                        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                            <div className="text-left">
                                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white  sm:leading-none md:text-6xl">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className="mt-5 sm:flex md:mt-8">
                                    <div className="rounded-md shadow">
                                    <button className="btn btn-outline text-[18px] bg-[#FF3811] border-[#FF3811] text-[#FFF] ">Discover More</button>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <button className="btn btn-outline text-[18px] border-[#ffffff] text-[#fff] ">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>

                </div>

                </SwiperSlide>
               
                <SwiperSlide><div
                    className="w-full bg-center bg-cover h-[38rem]  rounded-md"
                    style={{
                        backgroundImage:
                            'url("./image/images/banner/2.jpg")'
                    }}
                >
                    <div className="flex items-center px-5 md:px-20 w-full h-full rounded-md bg-gradient-to-r from-[#000000c3] to-[#ffffff00]">

                        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                            <div className="text-left">
                                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white  sm:leading-none md:text-6xl">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className="mt-5 sm:flex md:mt-8">
                                    <div className="rounded-md shadow">
                                    <button className="btn btn-outline text-[18px] bg-[#FF3811] border-[#FF3811] text-[#FFF] ">Discover More</button>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <button className="btn btn-outline text-[18px] border-[#ffffff] text-[#fff] ">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>

                </div>

                </SwiperSlide>
               
                <SwiperSlide><div
                    className="w-full bg-center bg-cover h-[38rem]  rounded-md"
                    style={{
                        backgroundImage:
                            'url("./image/images/banner/3.jpg")'
                    }}
                >
                    <div className="flex items-center px-5 md:px-20 w-full h-full rounded-md bg-gradient-to-r from-[#000000c3] to-[#ffffff00]">

                        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                            <div className="text-left">
                                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white  sm:leading-none md:text-6xl">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className="mt-5 sm:flex md:mt-8">
                                    <div className="rounded-md shadow">
                                    <button className="btn btn-outline text-[18px] bg-[#FF3811] border-[#FF3811] text-[#FFF] ">Discover More</button>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <button className="btn btn-outline text-[18px] border-[#ffffff] text-[#fff] ">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>

                </div>

                </SwiperSlide>
               
                <SwiperSlide><div
                    className="w-full bg-center bg-cover h-[38rem]  rounded-md"
                    style={{
                        backgroundImage:
                            'url("./image/images/banner/4.jpg")'
                    }}
                >
                    <div className="flex items-center px-5 md:px-20 w-full h-full rounded-md bg-gradient-to-r from-[#000000c3] to-[#ffffff00]">

                        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                            <div className="text-left">
                                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white  sm:leading-none md:text-6xl">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className="mt-5 sm:flex md:mt-8">
                                    <div className="rounded-md shadow">
                                    <button className="btn btn-outline text-[18px] bg-[#FF3811] border-[#FF3811] text-[#FFF] ">Discover More</button>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <button className="btn btn-outline text-[18px] border-[#ffffff] text-[#fff] ">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>

                </div>

                </SwiperSlide>
               
                <SwiperSlide><div
                    className="w-full bg-center bg-cover h-[38rem]  rounded-md"
                    style={{
                        backgroundImage:
                            'url("./image/images/banner/6.jpg")'
                    }}
                >
                    <div className="flex items-center px-5 md:px-20 w-full h-full rounded-md bg-gradient-to-r from-[#000000c3] to-[#ffffff00]">

                        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                            <div className="text-left">
                                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-white  sm:leading-none md:text-6xl">
                                    Affordable Price For Car Servicing
                                </h2>
                                <p className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                                </p>
                                <div className="mt-5 sm:flex md:mt-8">
                                    <div className="rounded-md shadow">
                                    <button className="btn btn-outline text-[18px] bg-[#FF3811] border-[#FF3811] text-[#FFF] ">Discover More</button>
                                    </div>
                                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                        <button className="btn btn-outline text-[18px] border-[#ffffff] text-[#fff] ">Latest Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>

                </div>

                </SwiperSlide>
               
               

            </Swiper>
        </>
    );
}
