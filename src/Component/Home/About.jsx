"use client"

import React from 'react';

const About = () => {
    return (
        <div>
            <section className="pt-8 md:pt-16">
                <div className=" mx-auto  flex-col-reverse lg:flex-row flex gap-6 ">
                    <div className="lg:w-1/2 lg:mr-20 relative">
                        <img className='w-[460px] h-[443px]  rounded-md ' src="./image/images/about_us/person.jpg" alt="" />
                        <img className='border-[#a2a1a2] border-[10px] w-[327px] absolute -bottom-[20%] lg:-bottom-[5%] right-[20%] lg:-right-[2%] h-[332px] rounded-md object-cover' src="./image/images/about_us/parts.jpg" alt="" />


                    </div>
                    <div className="text-center lg:text-left lg:w-1/2">
                        <p className="text-xl font-bold text-[#FF3811]">About Us</p>
                        <h1 className="text-4xl py-5 lg:text-5xl xl:text-6xl font-bold leading-none">
                            We are qualified <br /> & of experience <br /> in this field
                        </h1>
                        <p className="text-[16px]">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                        </p>
                        <p className="text-[16px] pt-5">
                            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                        </p>
                        <p className="mt-4 md:mt-8">
                            <button className="btn bg-[#FF3811] text-[18px] font-semibold text-white">Get More Info</button>
                        </p>

                    </div>

                </div>
            </section>

        </div>
    );
}

export default About;
