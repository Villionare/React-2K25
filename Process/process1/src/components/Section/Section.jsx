import { useEffect, useRef, useState } from "react";
import Categories from "../Pages/Categories";
import MovieCard from "./MovieDeck";

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
        <div className="bg-linear-to-r from-black to-gray-800 px-15">

            <div className=" flex flex-col justify-evenly md:flex-row pt-20 min-h-screen">

                <div className="flex justify-center items-center flex-1 md:order-1 md:pl-10">
                    <p className="text-7xl text-white font-bold">"Movies Makes us More Human"</p>
                </div>

                <div className="flex flex-row items-center justify-center flex-1 my-10 md:order-2 md:pl-10">
                    <MovieCard />
                </div>

            </div>

            <div className="h-[80vh] order-1 md:order-2 md:min-h-screen " >

                <div className="flex justify-center items-center h-full w-full rounded-4xl bg-cover bg-center" style={{ backgroundImage: `url(${quotes[index].imgSrc})` }}>
                    <div
                        className="text-center " key={index}
                    >
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                            {quotes[index].quote}
                        </h1>

                        <p className="mt-2 text-sm italic text-gray-500">
                            {`-` + quotes[index].filmmaker}
                        </p>
                    </div>

                </div>
            </div>

            {/* categories */}
            <Categories />
        </div>
    </>
}



export default Section;


// 4a96fd52424c457a941c9aadec5767a4