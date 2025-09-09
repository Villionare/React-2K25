import { useEffect, useRef, useState } from "react";
import Categories from "../Pages/Categories";
import Qoutes from "./Qoutes";

const Section = () => {




    return <>
        <div className="flex flex-col caret-transparent">
            <div className="flex flex-col gap-0 min-h-fit md:min-h-screen md:flex-row">

                {/* hero small */}
                <div className="flex md:hidden overflow-hidden">

                    <div className="relative h-100">
                        <video autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover scale-150 "
                            src="/vd.mp4" type="video/mp4">
                            video doesn't support
                        </video>
                        <div className="absolute inset-0 bg-black/50"></div>
                        <div className="absolute inset-5 flex-1 flex flex-col p-10 text-3xl md:text-8xl text-white font-bold justify-start ">
                            <p className="">
                                One journal,
                            </p>
                            <p className="text-6xl font-bold bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.fuchsia.400),theme(colors.sky.400))] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_8s_linear_infinite] ">
                                a thousand films.
                            </p>
                            <button className="w-fit mt-5 text-lg bg-none border-1 p-5 border-amber-50 rounded-full hover:bg-gray-200 hover:text-black transition duration-100">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>

                {/* Hero section */}
                <div className="hidden flex-1 flex-col box-border md:flex">

                    <div className="flex-1 flex flex-col text-3xl md:text-8xl text-white font-bold justify-center md:pl-10 ">
                        <p>
                            One journal,
                        </p>
                        <p className="text-6xl font-bold bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.fuchsia.400),theme(colors.sky.400))] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_8s_linear_infinite] ">
                            a thousand films.
                        </p>
                        <button className="w-fit mt-5 text-lg bg-none border-1 p-5 border-amber-50 rounded-full hover:bg-gray-200 hover:text-black transition duration-100">
                            Explore
                        </button>
                    </div>
                </div>

                <div className="relative hidden flex-1 overflow-hidden md:block">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover scale-140"
                        src="/vd.mp4"
                        type="video/mp4"
                    >
                        video doesn't support
                    </video>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050910]  to-transparent"></div>
                </div>
            </div>

            {/* qoutes */}
            <Qoutes />

            {/* categories */}
            <Categories />
        </div>
    </>
}



export default Section;


// 4a96fd52424c457a941c9aadec5767a4