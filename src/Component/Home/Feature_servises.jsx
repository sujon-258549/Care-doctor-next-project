import React from 'react';

const FeatureServises = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto px-5 py-7 md:py-14'>
                <div className="w-[90%] md:w-[60%] lg:w-[50%] mx-auto">
                    <h3 className="text-xl font-bold pt-5 text-[#FF3811] text-center">Core Features</h3>
                    <h3 className="text-2xl md:text-4xl font-bold py-4 text-center">Why Choose Us</h3>
                    <p className="text-[16px] text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                </div>
                <div className='justify-center gap-5 flex flex-wrap py-10 '>
                    <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                        <img className='w-14 mx-auto  h-14  ' src='./image/icons/person.svg' alt="" />
                        <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                    </div>
                    <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                        <img className='w-14 mx-auto  h-14  ' src='./image/icons/quote.svg' alt="" />
                        <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                    </div>
                    <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                        <img className='w-14 mx-auto  h-14  ' src='./image/icons/deliveryt.svg' alt="" />
                        <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                    </div>
                    <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                        <img className='w-14 mx-auto  h-14  ' src='./image/icons/group.svg' alt="" />
                        <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                    </div>
                    <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                        <img className='w-14 mx-auto  h-14  ' src='./image/icons/deliveryt.svg' alt="" />
                        <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                    </div>
                    <div className='border-2 p-3 rounded-md flex flex-col hover:bg-red-600 hover:text-white'>
                        <img className='w-14 mx-auto  h-14  ' src="./image/icons/check.svg" alt="" />
                        <h3 className='text-xl mt-5 font-bold text-center'>Expert Team</h3>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default FeatureServises;
