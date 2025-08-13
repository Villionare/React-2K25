const Section = () => {

    return <>
        <div className="bg-linear-to-r from-black to-gray-800">
            {/* hero section */}
            <div className="flex flex-col md:flex-row justify-evenly pt-20 min-h-screen">
                <div className="p-10 md:flex-[55vw] md:pl-30 pt-10 md:pt-10 lg:pt-30">

                    {/* main content automatic changing */}
                    <span className="font-bold text-7xl text-white text-center">
                        Movies Makes us More Human
                    </span>
                </div>
                <div className="flex justify-center border-cyan-100 flex-[45vw] pt-5 sm:pt-0 md:pt-10">
                    <div>
                        <img src="/nolan.jpg" className="w-[90vw] md:w-[35vw] rounded-4xl" alt="" />
                    </div>
                </div>
            </div>


            {/* categories */}
            <div className="mt-10">
                <h1 className="sm:mt-0 sm:text-center text-white text-5xl ml-10 mb-5">
                    Categories:
                </h1>
            </div>

            <div className="flex flex-col gap-7 justify-center items-center">
                <div className="flex flex-col justify-around  md:flex-row md:gap-4">

                    <div className="relative bg-blue-950 p-10 rounded-2xl sm:w-[80vw] sm:mb-7 sm:gap-10 h-40 md:w-65">
                        <span className="text-white font-bold absolute top-2 left-2">
                            ACTION
                        </span>
                    </div>
                    <div className="relative bg-blue-950 p-10 rounded-2xl sm:w-[80vw] sm:mb-7 sm:gap-10 w-60 h-40 md:w-65">
                        <span className="text-white font-bold absolute top-2 left-2">
                            COMEDY
                        </span>
                    </div>
                    <div className="relative bg-blue-950 p-10 rounded-2xl sm:w-[80vw] sm:mb-7 sm:gap-10 w-60 h-40 md:w-65">
                        <span className="text-white font-bold absolute top-2 left-2">
                            ANIME
                        </span>
                    </div>
                    <div className="relative bg-blue-950 p-10 rounded-2xl sm:w-[80vw] sm:mb-7 sm:gap-10 w-60 h-40 md:w-65">
                        <span className="text-white font-bold absolute top-2 left-2">
                            THRILLER
                        </span>
                    </div>
                </div>

                <div className="flex flex-1/2 flex-col md:flex-row  justify-around">
                    <div className="bg-blue-950 p-10 rounded-2xl sm:w-[80vw] sm:mb-7 sm:gap-10 w-60 h-40 relative">
                        <span className="text-white font-bold absolute top-2 left-2">
                            ADVENT
                            URE</span>
                    </div>
                    <div className="bg-blue-950 p-10 rounded-2xl sm:w-[80vw] sm:mb-7 sm:gap-10 w-60 h-40 relative">
                        <span className="text-white font-bold absolute top-2 left-2">
                            DRAMA</span>
                    </div>
                    <div className="bg-blue-950 p-10 rounded-2xl sm:w-[80vw] sm:mb-7 sm:gap-10 w-60 h-40 relative">
                        <span className="text-white font-bold absolute top-2 left-2">
                            ROMANCE
                        </span>
                    </div>
                    <div className="bg-blue-950 p-10 rounded-2xl sm:w-[80vw] sm:mb-7 sm:gap-10 w-60 h-40 relative">
                        <span className="text-white font-bold absolute top-2 left-2">
                            FANTASY
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
}

{/* Steven Spielberg
“Every time I go to a movie, it’s magic, no matter what the movie’s about.”

🎬 Martin Scorsese
“Cinema is a matter of what’s in the frame and what’s out.”

🎬 Quentin Tarantino
“When people ask me if I went to film school I tell them, ‘No, I went to films.’”

🎬 Alfred Hitchcock
“Drama is life with the dull bits cut out.”

🎬 Akira Kurosawa
“The role of the artist is to not look away.”

🎬 Christopher Nolan
“Every film should have its own world, a logic and feel to it that expands beyond the exact image the audience is seeing.”

🎬 François Truffaut
“Film lovers are sick people.”

🎬 Stanley Kubrick
“A film is – or should be – more like music than like fiction.” */}

export default Section;