import { useEffect, useRef, useState } from "react";
import Categories from "../Pages/Categories";
import { motion } from "motion/react"

const Section = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % quotes.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    const quotes = [
        {
            quote: "Every time I go to a movie, it's magic, no matter what the movie's about.",
            filmmaker: "Steven Spielberg",
            imgSrc: "/steven.jpeg"
        },
        {
            quote: "Cinema is a matter of what's in the frame and what's out.",
            filmmaker: "Martin Scorsese",
            imgSrc: "/martin.avif"
        },
        {
            quote: "When people ask me if I went to film school I tell them, 'No, I went to films.'",
            filmmaker: "Quentin Tarantino",
            imgSrc: "/QuentinTarantino.jpg"
        },
        {
            quote: "Drama is life with the dull bits cut out.",
            filmmaker: "Alfred Hitchcock",
            imgSrc: "/alfred-hitchcock.webp"
        },
        {
            quote: "The role of the artist is to not look away.",
            filmmaker: "Akira Kurosawa",
            imgSrc: "/akira.webp"
        },
        {
            quote: "Every film should have its own world, a logic and feel to it that expands beyond the exact image the audience is seeing.",
            filmmaker: "Christopher Nolan",
            imgSrc: "/ChristopherNolan.webp"
        },
        {
            quote: "Film lovers are sick people.",
            filmmaker: "François Truffaut",
            imgSrc: "/FrançoisTruffaut.jpeg"
        },
        {
            quote: "A film is - or should be - more like music than like fiction.",
            filmmaker: "Stanley Kubrick",
            imgSrc: "/StanleyKubrick.jpeg"
        },
        {
            quote: "Movies Makes us More Human",
            filmmaker: "Abhay Singh",
            imgSrc: "" // no image found
        }
    ];

    return <>
        <div className="flex flex-col bg-linear-to-r from-black to-gray-800">

            <div className="flex h-screen">
                {/* Hero section */}
                <div className="flex-1 flex flex-col min-h-screen box-border py-25 md:py-25">
                    <div className="flex-1 flex flex-col p-10 text-3xl md:text-8xl text-white font-bold justify-start ">
                        <p className="">
                            One journal,
                        </p>
                        <p className="text-6xl font-bold bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.fuchsia.400),theme(colors.sky.400))] bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradient_8s_linear_infinite] ">
                            a thousand films.
                        </p>
                        <button className="w-fit mt-5 text-lg bg-none border-1 p-5 border-amber-50 rounded-full">
                            Explore
                        </button>
                    </div>
                </div>
                {/* background-video */}
                <div className="flex-1 relative">

                    <video autoPlay
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                        src="/vd.mp4" type="video/mp4">
                        video doesn't support
                    </video>
                </div>
            </div>



            {/* qoutes */}
            <div className="mx-15 flex flex-col min-h-screen md:gap-20 md:flex-row md:mt-20 border-2 border-amber-300">

                <div className="flex-1 flex justify-center items-center h-full box-border">
                    <div
                        className="text-center" key={index}
                    >
                        <h1 className="text-xl md:text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            {quotes[index].quote}
                        </h1>

                        <p className="mt-2 text-sm italic text-gray-500">
                            {`-` + quotes[index].filmmaker}
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center border-1 border-amber-300">

                    <img src={quotes[index].imgSrc} className="bg-cover object-cover h-full w-full" alt="" />
                </div>
            </div>

            {/* categories */}
            <Categories />
        </div>
    </>
}



export default Section;


// 4a96fd52424c457a941c9aadec5767a4