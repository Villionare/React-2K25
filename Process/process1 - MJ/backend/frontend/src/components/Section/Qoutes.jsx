import { useEffect, useState } from "react";

const Qoutes = () => {
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
            imgSrc: "/ChristopherNolan.webp" // no image found
        }
    ];

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // start fade out
            setFade(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % quotes.length);
                setFade(true); // fade in new quote
            }, 500); // match fade duration
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return <>
        <div className="flex flex-col gap-10 mt-20 md:flex-row">
            <div className="flex-1 order-2 px-6 md:px-16 flex flex-col items-center justify-center h-fit md:order-1">

                {/* Image with text overlay */}
                <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl group">
                    <img
                        src={quotes[index].imgSrc}
                        alt="filmmaker"
                        className={`object-cover w-full h-[400px] md:h-[550px] transform group-hover:scale-105 transition-all duration-700 ease-out ${fade ? "opacity-100" : "opacity-0"
                            }`}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Quote + Filmmaker on image */}
                    <div className="absolute bottom-6 left-6 right-6 text-center md:text-left">
                        <h1
                            className={`text-xl md:text-3xl font-bold text-white drop-shadow-lg transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            {quotes[index].quote}
                        </h1>
                        <p
                            className={`mt-2 text-sm md:text-lg italic text-gray-300 transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            — {quotes[index].filmmaker}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-1 order-1 flex justify-center items-center font-bold md:order-2">
                <p className=" text-yellow-300 text-7xl">
                    Legends, stories, and the art of movies.
                </p>
            </div>
        </div>
    </>
}

export default Qoutes;