import '../app.css'

const Page = () => {
    return (
        <div className='w-[90%] mx-auto px-5 py-10 md:py-10'>
            <div className='servises flex flex-col justify-center md:px-20 px-5 relative'>
                <div className=''>
                    <h1 className='text-5xl font-bold text-white'>Add New Service</h1>
                </div>
                <div id='trapezoid' className='absolute bottom-0 left-[38.50%]'>

                    <h3 className='text-xl font-semibold pt-1 text-white '>Home/Service</h3>

                </div>

            </div>

            <div>
                <div className="p-10 bg-[#F3F3F3] mt-10 rounded-lg">
                    <div className="p-8">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                name="name"
                                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Service Name"
                            />
                            <input
                                type="text"
                                name="price"
                                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Service Price"
                            />
                        </div>
                        <div className="my-6 flex gap-4">
                        <input
                                type="text"
                                name="texthere"
                                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Text here"
                            />
                            <input
                                type="text"
                                name="serveses"
                                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                                placeholder="Service Type"
                            />
                        </div>
                        <div className="">
                            <textarea
                                name="textarea"
                                id="text"
                                cols={30}
                                rows={10}
                                className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold "
                                placeholder={"Product Description"}
                            />
                        </div>
                        <div className="text-center w-full">
                           <button className='w-full bg-[#ff2811] btn text-xl font-semibold text-white'> Submit </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Page;
