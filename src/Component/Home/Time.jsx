
"use client"

const Time = () => {
    return (
        <div>
            <section className="w-[90%] mx-auto mt-5 mb-16 bg-gray-900 rounded-md">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className='flex items-center gap-5'>
                            <img src="./image/location/001-timetable.png" alt="" />
                            <div>
                                <p className=" text-gray-500 dark:text-gray-400">
                                    We are open monday-friday
                                </p>
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    7:00 am - 9:00 pm
                                </h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src="./image/location/Group.png" alt="" />
                            <div>
                                <p className=" text-gray-500 dark:text-gray-400">
                                    We are open monday-friday
                                </p>
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    7:00 am - 9:00 pm
                                </h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <img src="./image/location/location.png" alt="" />
                            <div>
                                <p className=" text-gray-500 dark:text-gray-400">
                                    We are open monday-friday
                                </p>
                                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                                    7:00 am - 9:00 pm
                                </h1>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Time;
