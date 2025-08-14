import { useRef } from "react";
import Categories from "../Pages/Categories";

const Section = () => {

    const quotes = [
        {
            quote: "Every time I go to a movie, it's magic, no matter what the movie's about.",
            filmmaker: "Steven Spielberg"
        },
        {
            quote: "Cinema is a matter of what's in the frame and what's out.",
            filmmaker: "Martin Scorsese"
        },
        {
            quote: "When people ask me if I went to film school I tell them, 'No, I went to films.'",
            filmmaker: "Quentin Tarantino"
        },
        {
            quote: "Drama is life with the dull bits cut out.",
            filmmaker: "Alfred Hitchcock"
        },
        {
            quote: "The role of the artist is to not look away.",
            filmmaker: "Akira Kurosawa"
        },
        {
            quote: "Every film should have its own world, a logic and feel to it that expands beyond the exact image the audience is seeing.",
            filmmaker: "Christopher Nolan"
        },
        {
            quote: "Film lovers are sick people.",
            filmmaker: "François Truffaut"
        },
        {
            quote: "A film is - or should be - more like music than like fiction.",
            filmmaker: "Stanley Kubrick"
        },
        {
            quote: "Movies Makes us More Human",
            filmmaker: "Abhay Singh"
        }
    ];

    return <>
        <div className="bg-linear-to-r from-black to-gray-800">
            {/* hero section */}
            <div className="relative flex flex-col md:flex-row justify-evenly pt-20 min-h-screen">
                <div className="p-10 border-1 border-amber-300 pt-10 md:flex-[50vw] md:pl-10 md:pt-10 lg:pt-10">
                    {/* main content automatic changing */}

                </div>
                <div className="flex justify-center border-cyan-100 flex-[50vw] pt-5 sm:pt-0 md:pt-10">

                    <div
                        className="relative w-full h-screen bg-cover bg-center rounded-full m-5"
                        style={{ backgroundImage: "url('/nolan.jpg')" }}>

                        <div className="absolute inset-0 flex items-center justify-center text-center">
                            <div>
                                <h1 className="text-3xl font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"> “Every time I go to a movie, it's magic, no matter what the movie's about.”</h1>
                                <p className="mt-2 text-sm italic text-gray-500">— Steven Spielberg</p>
                            </div>
                        </div>
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