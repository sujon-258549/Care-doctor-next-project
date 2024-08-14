"use client"
import { FaArrowRightLong } from "react-icons/fa6";
const Servises = () => {
    return (
        <div className='w-[90%] mx-auto px-5 py-7 md:py-14'>
            <div className="w-[90%] md:w-[60%] lg:w-[40%] mx-auto">
                <h3 className="text-xl font-bold pt-5 text-[#FF3811] text-center">Service</h3>
                <h3 className="text-2xl md:text-4xl font-bold py-4 text-center">Our Service Area</h3>
                <p className="text-[16px] text-center">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 md:pt-16'>

                <div className="card card-compact bg-base-100  shadow-xl p-5" style={{ boxShadow: "1px 1px 10px" }} >
                    <img className="w-full rounded-md"
                        src="./image/images/services/1.jpg"
                        alt="Shoes" />

                    <div className="card-body">
                        <h2 className="card-title">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <h4 className="text-xl text-[#FF3811]">Price : $20.00</h4>
                            <h4 className="text-xl text-[#FF3811]"><FaArrowRightLong></FaArrowRightLong> </h4>

                        </div>
                    </div>

                </div>
                <div className="card card-compact bg-base-100  shadow-xl p-5" style={{ boxShadow: "1px 1px 10px" }} >
                    <img className="w-full rounded-md"
                        src="./image/images/services/2.jpg"
                        alt="Shoes" />

                    <div className="card-body">
                        <h2 className="card-title">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <h4 className="text-xl text-[#FF3811]">Price : $20.00</h4>
                            <h4 className="text-xl text-[#FF3811]"><FaArrowRightLong></FaArrowRightLong> </h4>

                        </div>
                    </div>

                </div>
                <div className="card card-compact bg-base-100  shadow-xl p-5" style={{ boxShadow: "1px 1px 10px" }} >
                    <img className="w-full rounded-md"
                        src="./image/images/services/3.jpg"
                        alt="Shoes" />

                    <div className="card-body">
                        <h2 className="card-title">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <h4 className="text-xl text-[#FF3811]">Price : $20.00</h4>
                            <h4 className="text-xl text-[#FF3811]"><FaArrowRightLong></FaArrowRightLong> </h4>

                        </div>
                    </div>

                </div>
                <div className="card card-compact bg-base-100  shadow-xl p-5" style={{ boxShadow: "1px 1px 10px" }} >
                    <img className="w-full rounded-md"
                        src="./image/images/services/4.jpg"
                        alt="Shoes" />

                    <div className="card-body">
                        <h2 className="card-title">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <h4 className="text-xl text-[#FF3811]">Price : $20.00</h4>
                            <h4 className="text-xl text-[#FF3811]"><FaArrowRightLong></FaArrowRightLong> </h4>

                        </div>
                    </div>

                </div>
                <div className="card card-compact bg-base-100  shadow-xl p-5" style={{ boxShadow: "1px 1px 10px" }} >
                    <img className="w-full rounded-md"
                        src="./image/images/services/5.jpg"
                        alt="Shoes" />

                    <div className="card-body">
                        <h2 className="card-title">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <h4 className="text-xl text-[#FF3811]">Price : $20.00</h4>
                            <h4 className="text-xl text-[#FF3811]"><FaArrowRightLong></FaArrowRightLong> </h4>

                        </div>
                    </div>

                </div>
                <div className="card card-compact bg-base-100  shadow-xl p-5" style={{ boxShadow: "1px 1px 10px" }} >
                    <img className="w-full rounded-md"
                        src="./image/images/services/6.jpg"
                        alt="Shoes" />

                    <div className="card-body">
                        <h2 className="card-title">Electrical System</h2>
                        <div className="flex justify-between items-center">
                            <h4 className="text-xl text-[#FF3811]">Price : $20.00</h4>
                            <h4 className="text-xl text-[#FF3811]"><FaArrowRightLong></FaArrowRightLong> </h4>

                        </div>
                    </div>

                </div>

            </div>
           <div className="mx-auto mt-10 flex justify-center">
           <button className="btn btn-outline text-[18px] border-[#FF3811] text-[#FF3811] ">More Services</button>
           </div>
        </div>
    );
}

export default Servises;
